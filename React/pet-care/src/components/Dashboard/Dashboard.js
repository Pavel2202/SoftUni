const Dashboard = () => {
  return (
    <section id="dashboard">
      <h2 className="dashboard-title">Services for every animal</h2>
      <div className="animals-dashboard">
        <div className="animals-board">
          <article className="service-img">
            <img className="animal-image-cover" src="./images/cat2.jpg" />
          </article>
          <h2 className="name">Athena</h2>
          <h3 className="breed">American Curl</h3>
          <div className="action">
            <a className="btn" href="#">
              Details
            </a>
          </div>
        </div>
        <div>
          <p className="no-pets">No pets in dashboard</p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
