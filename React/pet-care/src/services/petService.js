import * as request from "./requester";

const baseUrl = "http://localhost:3030/data";

export const getAll = () => request.get(`${baseUrl}/pets`);

export const getOne = (petId) => {
  return fetch(`${baseUrl}/pets/${petId}`).then((res) => res.json());
};

export const create = async (petData, token) => {
  let response = await fetch(`${baseUrl}/pets`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-Authorization": token,
    },
    body: JSON.stringify({ ...petData, donation: 0 }),
  });

  let result = await response.json();
  return result;
};

export const update = async (petId, petData, token) => {
  let response = await fetch(`${baseUrl}/pets/${petId}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      "X-Authorization": token,
    },
    body: JSON.stringify({ ...petData }),
  });

  let result = await response.json();
  return result;
};

export const remove = (petId, token) => {
  return fetch(`${baseUrl}/pets/${petId}`, {
    method: "DELETE",
    headers: {
      "X-Authorization": token,
    },
  }).then((res) => res.json());
};
