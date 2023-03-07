const baseUrl = "http://localhost:3030/data";

export const donate = async (petData, token) => {
  let response = await fetch(`${baseUrl}/donation`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-Authorization": token,
    },
    body: JSON.stringify({ ...petData }),
  });

  let result = await response.json();
  return result;
};

export const getPetDonations = async (petId) => {
  let response = await fetch(
    `${baseUrl}/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`
  );
  let result = await response.json();
  return result;
};

export const hasUserDonated = async (petId, userId) => {
  let response = await fetch(
    `${baseUrl}/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`
  );
  let result = await response.json();
  return result;
};
