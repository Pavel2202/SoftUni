const baseUrl = "http://localhost:3030/data";

export const getAll = async () => {
  let response = await fetch(`${baseUrl}/albums?sortBy=_createdOn%20desc`);
  let result = await response.json();

  return result;
};

export const getOne = async (musicId) => {
  let response = await fetch(`${baseUrl}/albums/${musicId}`);
  let result = await response.json();

  return result;
};

export const createMusic = async (musicData, token) => {
  let response = await fetch(`${baseUrl}/albums`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-Authorization": token,
    },
    body: JSON.stringify({ ...musicData, likes: 0 }),
  });

  let result = await response.json();
  return result;
};
