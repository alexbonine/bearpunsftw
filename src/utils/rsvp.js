const BASE_URL = `/.netlify/functions/`;

export const getRsvp = async (name) => {
  return fetch(
    `${BASE_URL}get-rsvp?name=${encodeURIComponent(name)}`
  ).then((response) => response.json());
};

export const updateRsvp = async (data) => {
  return fetch(`${BASE_URL}update-rsvp`, {
    body: JSON.stringify(data),
    method: "POST",
  }).then((response) => {
    return response.json();
  });
};
