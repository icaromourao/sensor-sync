export default function Request(endpoint, method, body) {
  return fetch(`${process.env.EXPO_PUBLIC_API_BASE_URL}/${endpoint}`, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...body,
      'api-key': process.env.EXPO_PUBLIC_API_KEY,
    }),
  }).then((response) => response)
    .catch((error) => {
      console.log(`There has been a problem with your fetch operation: ${error.message}`);
      throw error;
    });
}
