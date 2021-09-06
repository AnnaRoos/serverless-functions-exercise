const fetch = require('node-fetch');


exports.handler = async function () {
  const ASTRO_API = 'http://api.open-notify.org/astros.json';
  const response = await fetch(ASTRO_API);
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
  
}