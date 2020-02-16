export function getUrl (query, count) {
  return `https://api.edamam.com/search?q=${query}&app_id=aa1b3576&app_key=a8b83ff9eb6ad0c5acef74783a0ed0c4&from=0&to=${count}`;
}