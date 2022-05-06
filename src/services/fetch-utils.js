import { client } from './client.js';

export async function getFavPlaces() {
  const response = await client.from('favorite_placez').select('*');
  console.log(response);
  return response.body;
}
