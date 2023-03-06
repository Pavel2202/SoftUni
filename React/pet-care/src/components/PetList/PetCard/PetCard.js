import { Link } from "react-router-dom";

const PetCard = ({ pet }) => {
  return (
    <div className="animals-board">
      <article className="service-img">
        <img className="animal-image-cover" src={pet.image} />
      </article>
      <h2 className="name">{pet.name}</h2>
      <h3 className="breed">{pet.breed}</h3>
      <div className="action">
        <Link className="btn" to={`/details/${pet._id}`}>
          Details
        </Link>
      </div>
    </div>
  );
};

export default PetCard;
