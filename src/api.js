function api(endpoint, { method = "GET", body, jwt } = {}) {
  const url = "https://rogue-trader-rpg.herokuapp.com" + endpoint;
  console.log(url);
  return fetch(url, {
    method: method,
    headers: {
      Authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(body)
  })
    .then(response => Promise.all([response.status, response.json()]))
    .then(([status, data]) => {
      if (status >= 400) {
        // eslint-disable-next-line no-throw-literal
        return { api_error: data };
      } else {
        return data;
      }
    });
}

export default api;
