const Details = () => {
  return (
    <section id="detailsPage">
      <div className="details">
        <div className="animalPic">
          <img src="./images/Shiba-Inu.png" />
        </div>
        <div>
          <div className="animalInfo">
            <h1>Name: Max</h1>
            <h3>Breed: Shiba Inu</h3>
            <h4>Age: 2 years</h4>
            <h4>Weight: 5kg</h4>
            <h4 className="donation">Donation: 0$</h4>
          </div>
          <div className="actionBtn">
            <a href="#" className="edit">
              Edit
            </a>
            <a href="#" className="remove">
              Delete
            </a>
            <a href="#" className="donate">
              Donate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
