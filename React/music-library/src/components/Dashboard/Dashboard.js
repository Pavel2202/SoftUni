import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <section id="dashboard">
      <h2>Albums</h2>
      <ul className="card-wrapper">
        <li className="card">
          <img src="./images/BackinBlack.jpeg" alt="travis" />
          <p>
            <strong>Singer/Band: </strong>
            <span className="singer">AC/DC</span>
          </p>
          <p>
            <strong>Album name: </strong>
            <span className="album">Back in Black</span>
          </p>
          <p>
            <strong>Sales:</strong>
            <span className="sales">26 million (50 million claimed)</span>
          </p>
          <Link className="details-btn" to="">
            Details
          </Link>
        </li>
      </ul>

      <h2>There are no albums added yet.</h2>
    </section>
  );
};

export default Dashboard;
