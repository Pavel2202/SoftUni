import { useState, useEffect } from "react";

import * as musicService from "../../services/musicService";
import MusicList from "../MusicList/MusicList";

const Dashboard = () => {
  const [musics, setMusics] = useState([]);

  useEffect(() => {
    musicService.getAll().then((res) => {
      setMusics(res);
    });
  }, []);

  return (
    <section id="dashboard">
      <h2>Albums</h2>
      <ul className="card-wrapper">
        <MusicList musics={musics} />
      </ul>
    </section>
  );
};

export default Dashboard;
