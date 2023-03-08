import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import * as petService from "../../services/petService";
import * as donationService from "../../services/donationService";
import { useAuthContext } from "../../contexts/AuthContext";
import {
  useNotificationContext,
  types,
} from "../../contexts/NotificationContext";
import usePetState from "../../hooks/usePetState";

const Details = () => {
  const { user } = useAuthContext();
  const { petId } = useParams();
  const [pet, setPet] = usePetState(petId);
  const { addNotification } = useNotificationContext();
  const navigate = useNavigate();

  useEffect(() => {
    donationService.getPetDonations(petId).then((donations) => {
      setPet((state) => ({ ...state, donations }));
    });
  }, []);

  const deleteClickHandler = () => {
    petService.remove(petId, user.accessToken).then(() => {
      addNotification("You successfully deleted pet", types.success);
      navigate("/dashboard");
    });
  };

  const donateClickHandler = async () => {
    const userId = user._id;
    const response = await donationService.hasUserDonated(petId, userId);

    if (response != 0) {
      navigate("/dashboard");
      return;
    }

    let petData = { petId, userId };
    donationService.donate(petData, user.accessToken).then(() => {
      setPet((state) => ({
        ...state,
        donation: [...state.donation, user._id],
      }));
      navigate("/dashboard");
    });
  };

  const ownerButtons = (
    <>
      <Link to={`/edit/${pet._id}`} className="edit">
        Edit
      </Link>
      <Link
        to={`/delete/${pet._id}`}
        className="remove"
        onClick={deleteClickHandler}
      >
        Delete
      </Link>
    </>
  );

  const userButtons = (
    <>
      <Link
        to={`/donate/${pet._id}`}
        className="donate"
        onClick={donateClickHandler}
      >
        Donate
      </Link>
    </>
  );

  return (
    <section id="detailsPage">
      <div className="details">
        <div className="animalPic">
          <img src={pet.image} />
        </div>
        <div>
          <div className="animalInfo">
            <h1>Name: {pet.name}</h1>
            <h3>Breed: {pet.breed}</h3>
            <h4>Age: {pet.age}</h4>
            <h4>Weight: {pet.weight}</h4>
            <h4 className="donation">Donation: {pet.donations * 100 || 0}$</h4>
          </div>
          <div className="actionBtn">
            {user._id && user._id == pet._ownerId ? ownerButtons : userButtons}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
