const fetch = require('node-fetch');

exports.handler = async function () {
  const ISS_API = 'http://api.open-notify.org/iss-now.json';
  
  const response = await fetch(ISS_API);
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
  
}

