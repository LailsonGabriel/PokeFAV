export default async function requestAPI(url) {
  const request = await fetch(url).then((data) => data.json());
  return request;
}