import axios from 'axios';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const FLOURSIH_EMBED_PREFIX = '$$DBK_PREFIX__FLOURISH_EMBED$$';

/**
 * Fetches all relevant data needed to render the application
 */
export async function fetchAllData() {
  // If filenames are "enumerated" (i.e. dog1.jpg, dog2.jpg, etc), then the
  // NUMBERING IS EXPECTED TO START AT 1

  // Fetch /data/biographies.json
  // Fetch /data/undergraduate/headers.json
  //   - Based on the length of array in headers.json,
  //     fetch /data/undergraduate/demand{i}.html
  // Fetch /data/graduate/headers.json
  //   - Based on the length of array in headers.json,
  //     fetch /data/graduate/demand{i}.html

  let objOfPromises = {
    intro: fetchIntro(),
    biographies: fetchBiographies(),
    graduateDemands: fetchDemands('graduate'),
    undergraduateDemands: fetchDemands('undergraduate'),
    credits: fetchCredits()
  };
  let retObj = {};
  for (let k in objOfPromises) {
    retObj[k] = await objOfPromises[k];
  }

  return retObj;
}

/**
 * @returns {string}
 */
async function fetchIntro() {
  /** @type {string} */
  let data = (await axios.get('/data/intro.html')).data;

  // Wrapping each line in a paragraph tag
  return data.split(/\r?\n/gi).map(s => `<p>${s}</p>`).join(' ');
}

/**
 * @returns {string[]}
 */
async function fetchCredits() {
  return (await axios.get('/data/credits.json')).data;
}

/**
 * Fetches all biographical information about an organizer.
 *
 * @returns {BiographyData[]}
 */
async function fetchBiographies() {
  let resp = await axios.get('/data/biographies.json');
  /** @type {BiographyData[]} */
  let bios = resp.data;

  return bios.map(obj => {
    let newObj = Object.assign({}, obj);

    newObj.picturePath = ASSETS_URL + obj.picturePath;
    if (obj.gallery) {
      newObj.gallery = obj.gallery.map(s => ASSETS_URL + s);
    }

    return newObj;
  });
}

/**
 * Fetches all text related to a set/type of demands. The response includes
 * an array of objects, which have the properties `header` and `body`
 *
 * @param {("graduate"|"undergraduate")} type What type of demands to fetch
 */
async function fetchDemands(type) {
  if (type !== 'undergraduate' && type !== 'graduate') {
    throw new TypeError(`Unexpected demand type: ${type}`);
  }

  const prefix = `/data/${type}`;

  // Fetching list of demands
  let resp = await axios.get(`${prefix}/headers.json`);
  /** @type {string[]} */
  let headers = resp.data;

  let foobar = await Promise.all(
    headers.map((_, i) => fetchDemandInfo(`${prefix}/demand${i+1}.html`)));

  return headers.map((obj, i) => ({
    header: obj.header,
    picturePath: ASSETS_URL + obj.picturePath,
    caption: obj.caption,
    body: foobar[i].body,
    flourishEmbeds: foobar[i].flourishEmbeds,
    bodyParagraphs: foobar[i].bodyParagraphs
  }));
}

async function fetchDemandInfo(demandUrl) {
  let response = await axios.get(demandUrl);

  /** @type {string} */
  let rawText = response.data;

  let lines = rawText
    .replace(/“/gi, '&ldquo;') // Fixing left "fancy" quotes
    .replace(/”/gi, '&rdquo;') // Fixing right "fancy" quotes
    .replace(/’/gi, '&rsquo;') // Fixing "fancy" apostrophes
    .split(/\r?\n/gi) // Splitting by lines
    .filter(x => x.length); // Removing empty lines

  let bodyParagraphs = [];
  let flourishEmbeds = [];

  lines.forEach((line, lineNum) => {
    // If this line is a flourish embed, DO NOT add it to the body html string
    if (line.startsWith(FLOURSIH_EMBED_PREFIX)) {
      let dataSrc = line.split(FLOURSIH_EMBED_PREFIX)[1];
      flourishEmbeds.push({ dataSrc, index: lineNum });
      return '';
    } else {
      bodyParagraphs.push(line);
    }
  });

  return {
    body: '',
    bodyParagraphs,
    flourishEmbeds
  };
}

/**
 * @typedef BiographyData
 * @prop {string} picturePath Path to profile picture
 * @prop {string} name Name of person
 * @prop {string} body Plaintext or HTMl biographical data
 * @prop {string[]} [gallery] Array of picture paths for a gallery
 */

/**
 * @typedef DemandData
 * @prop {string} header
 * @prop {string} picturePath
 * @prop {string} caption
 * @prop {string} body
 * @prop {[{embedSrc: string, index: number}]} flourishEmbeds
 */

/**
 * @typedef AllResults
 * @prop {BiographyData[]} biographies
 * @prop {DemandData[]} graduateDemands
 * @prop {DemandData[]} undergraduateDemands
 * @prop {string[]} credits
 * @prop {string} intro
 */
