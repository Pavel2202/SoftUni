import { useState, useEffect } from "react";

import * as petService from "../../services/petService";
import PetList from "../PetList/PetList";

const Dashboard = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    petService
      .getAll()
      .then((res) => setPets(res))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section id="dashboard">
      <h2 className="dashboard-title">Services for every animal</h2>
      <div className="animals-dashboard">
        <PetList pets={pets} />
      </div>
    </section>
  );
};

export default Dashboard;
