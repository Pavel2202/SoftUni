import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

import * as petService from "../../services/petService";
import usePetState from "../../hooks/usePetState";

const Edit = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { petId } = useParams();
  const [pet, setPet] = usePetState(petId);

  const onEditHandler = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);

    let name = formData.get("name");
    let breed = formData.get("breed");
    let age = formData.get("age");
    let weight = formData.get("weight");
    let image = formData.get("image");

    petService
      .update(
        pet._id,
        {
          name,
          breed,
          age,
          weight,
          image,
        },
        user.accessToken
      )
      .then((res) => {
        navigate("/dashboard");
      });
  };

  return (
    <section id="editPage">
      <form className="editForm" method="POST" onSubmit={onEditHandler}>
        <img src={pet.image} />
        <div>
          <h2>Edit PetPal</h2>
          <div className="name">
            <label htmlFor="name">Name:</label>
            <input name="name" id="name" type="text" defaultValue={pet.name} />
          </div>
          <div className="breed">
            <label htmlFor="breed">Breed:</label>
            <input
              name="breed"
              id="breed"
              type="text"
              defaultValue={pet.breed}
            />
          </div>
          <div className="Age">
            <label htmlFor="age">Age:</label>
            <input name="age" id="age" type="text" defaultValue={pet.age} />
          </div>
          <div className="weight">
            <label htmlFor="weight">Weight:</label>
            <input
              name="weight"
              id="weight"
              type="text"
              defaultValue={pet.weight}
            />
          </div>
          <div className="image">
            <label htmlFor="image">Image:</label>
            <input
              name="image"
              id="image"
              type="text"
              defaultValue={pet.image}
            />
          </div>
          <button className="btn" type="submit">
            Edit Pet
          </button>
        </div>
      </form>
    </section>
  );
};

export default Edit;
