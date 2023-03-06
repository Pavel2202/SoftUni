const Edit = () => {
  return (
    <section id="editPage">
      <form className="editForm">
        <img src="./images/editpage-dog.jpg" />
        <div>
          <h2>Edit PetPal</h2>
          <div className="name">
            <label htmlFor="name">Name:</label>
            <input name="name" id="name" type="text" value="Max" />
          </div>
          <div className="breed">
            <label htmlFor="breed">Breed:</label>
            <input name="breed" id="breed" type="text" value="Shiba Inu" />
          </div>
          <div className="Age">
            <label htmlFor="age">Age:</label>
            <input name="age" id="age" type="text" value="2 years" />
          </div>
          <div className="weight">
            <label htmlFor="weight">Weight:</label>
            <input name="weight" id="weight" type="text" value="5kg" />
          </div>
          <div className="image">
            <label htmlFor="image">Image:</label>
            <input
              name="image"
              id="image"
              type="text"
              value="./image/dog.jpeg"
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
