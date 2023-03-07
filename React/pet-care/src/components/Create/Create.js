import { useNavigate } from "react-router-dom";
import * as petService from "../../services/petService";
import { useAuthContext } from "../../contexts/AuthContext";

const Create = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const onCreateHandler = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);

    let name = formData.get("name");
    let breed = formData.get("breed");
    let age = formData.get("age");
    let weight = formData.get("weight");
    let image = formData.get("image");

    petService
      .create(
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
    <section id="createPage">
      <form className="createForm" method="POST" onSubmit={onCreateHandler}>
        <img src="./images/cat-create.jpg" />
        <div>
          <h2>Create PetPal</h2>
          <div className="name">
            <label htmlFor="name">Name:</label>
            <input name="name" id="name" type="text" placeholder="Max" />
          </div>
          <div className="breed">
            <label htmlFor="breed">Breed:</label>
            <input
              name="breed"
              id="breed"
              type="text"
              placeholder="Shiba Inu"
            />
          </div>
          <div className="Age">
            <label htmlFor="age">Age:</label>
            <input name="age" id="age" type="text" placeholder="2 years" />
          </div>
          <div className="weight">
            <label htmlFor="weight">Weight:</label>
            <input name="weight" id="weight" type="text" placeholder="5kg" />
          </div>
          <div className="image">
            <label htmlFor="image">Image:</label>
            <input
              name="image"
              id="image"
              type="text"
              placeholder="./image/dog.jpeg"
            />
          </div>
          <button className="btn" type="submit">
            Create Pet
          </button>
        </div>
      </form>
    </section>
  );
};

export default Create;