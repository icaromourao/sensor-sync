export default function Request(endpoint, method, body) {
  const options = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      apiKey: process.env.EXPO_PUBLIC_API_KEY,
    },
    body: JSON.stringify(body),
  };
  if (method === 'GET' || method === 'HEAD') {
    delete options.body;
  }
  return fetch(`${process.env.EXPO_PUBLIC_API_BASE_URL}/${endpoint}`, options)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => {
      console.log(`There has been a problem with your fetch operation: ${error.message}`);
      throw error;
    });
}
