import axios from 'axios';

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

  let promises = [
    fetchBiographies(),
    fetchDemands('graduate'),
    fetchDemands('undergraduate'),
    fetchCredits()
  ];
  let results = await Promise.all(promises);

  /**
   * @type {AllResults}
   */
  let o = {
    biographies: results[0],
    graduateDemands: results[1],
    undergraduateDemands: results[2],
    credits: results[3]
  };

  return o;
}

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
  // TODO typedef for this response
  /** @type {BiographyData[]} */
  return resp.data;
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
  let bodies = bodyResponses.map(r => r.data);

  return headers.map((header, i) => ({header, body: bodies[i]}));
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
 * @prop {string} body
 */

/**
 * @typedef AllResults
 * @prop {BiographyData[]} biographies
 * @prop {DemandData[]} graduateDemands
 * @prop {DemandData[]} undergraduateDemands
 */
