const BASE_URL = `/.netlify/functions/`;

export const getRsvp = async (first, last) => {
  return fetch(
    `${BASE_URL}get-rsvp?first=${encodeURIComponent(
      first
    )}&last=${encodeURIComponent(last)}`
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
