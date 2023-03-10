import { Link } from "react-router-dom";

const MusicCard = ({ music }) => {
  return (
    <li className="card">
      <img src={music.imageUrl} alt="travis" />
      <p>
        <strong>Singer/Band: </strong>
        <span className="singer">{music.singer}</span>
      </p>
      <p>
        <strong>Album name: </strong>
        <span className="album">{music.album}</span>
      </p>
      <p>
        <strong>Sales:</strong>
        <span className="sales">
          {music.sales}
        </span>
      </p>
      <Link className="details-btn" to={`details/${music._id}`}>
        Details
      </Link>
    </li>
  );
};

export default MusicCard;
