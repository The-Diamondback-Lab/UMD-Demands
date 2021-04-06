import axios from 'axios';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

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

  // Fetching all demand bodies
  let bodyResponses = await Promise.all(
    headers.map((_, i) => axios.get(`${prefix}/demand${i+1}.html`)));
  /** @type {string[]} */
  let bodies = bodyResponses.map(r => {
    /** @type {string} */
    let rawContent = r.data;
    let lines = rawContent
      .replace(/“/gi, '&ldquo;') // Fixing left "fancy" quotes
      .replace(/”/gi, '&rdquo;') // Fixing right "fancy" quotes
      .replace(/’/gi, '&rsquo;') // Fixing "fancy" apostrophes
      .split(/\r?\n/gi) // Splitting by lines
      .filter(x => x.length); // Removing empty lines

    // Wrapping each line in a paragraph tag
    return lines.map(para => `<p>${para}</p>`).join('\n');
  });

  return headers.map((o, i) => ({
    header: o.header,
    picturePath: ASSETS_URL + o.picturePath,
    body: bodies[i]
  }));
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
 * @prop {string} body
 */

/**
 * @typedef AllResults
 * @prop {BiographyData[]} biographies
 * @prop {DemandData[]} graduateDemands
 * @prop {DemandData[]} undergraduateDemands
 * @prop {string[]} credits
 * @prop {string} intro
 */
