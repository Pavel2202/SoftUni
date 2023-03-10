const baseUrl = "http://localhost:3030/data";

export const getAll = async () => {
  let response = await fetch(`${baseUrl}/albums?sortBy=_createdOn%20desc`);
  let result = await response.json();

  return result;
};
