const BASE_URL = `/.netlify/functions/`;

const parseResponse = (response) => {
  if (response && (!response.ok || response.status > 300)) {
    return { error: true };
  }

  try {
    return response.json();
  } catch (e) {
    return { error: true };
  }
};

export const getRsvp = async (first, last) => {
  return fetch(
    `${BASE_URL}get-rsvp?first=${encodeURIComponent(
      first
    )}&last=${encodeURIComponent(last)}`
  ).then(parseResponse);
};

export const updateRsvp = async (id, data) => {
  return fetch(`${BASE_URL}update-rsvp?id=${id}`, {
    body: JSON.stringify(data),
    method: "PUT",
  }).then(parseResponse);
};

export const getRsvps = async (pw) => {
  return fetch(`${BASE_URL}get-rsvps?pw=${encodeURIComponent(pw)}`).then(
    parseResponse
  );
};
