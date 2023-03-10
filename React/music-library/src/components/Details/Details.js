import { Link, useParams, useNavigate } from "react-router-dom";
import useMusicState from "../../hooks/useMusicState";

import * as musicService from "../../services/musicService";
import { useAuthContext } from "../../contexts/AuthContext";

const Details = () => {
  const { user } = useAuthContext();
  const { musicId } = useParams();
  const [music, setMusic] = useMusicState(musicId);
  const navigate = useNavigate();

  const onDeleteHandler = () => {
    musicService.remove(musicId, user.accessToken).then(() => {
      navigate("/dashboard");
    });
  };

  return (
    <section id="details">
      <div id="details-wrapper">
        <p id="details-title">Album Details</p>
        <div id="img-wrapper">
          <img src={music.imageUrl} alt="example1" />
        </div>
        <div id="info-wrapper">
          <p>
            <strong>Band:</strong>
            <span id="details-singer">{music.singer}</span>
          </p>
          <p>
            <strong>Album name:</strong>
            <span id="details-album">{music.album}</span>
          </p>
          <p>
            <strong>Release date:</strong>
            <span id="details-release">{music.release}</span>
          </p>
          <p>
            <strong>Label:</strong>
            <span id="details-label">{music.label}</span>
          </p>
          <p>
            <strong>Sales:</strong>
            <span id="details-sales">{music.sales}</span>
          </p>
        </div>
        <div id="likes">
          Likes: <span id="likes-count">{music.likes}</span>
        </div>

        <div id="action-buttons">
          <Link to={`/like/${music._id}`} id="like-btn">
            Like
          </Link>
          <Link to={`/edit/${music._id}`} id="edit-btn">
            Edit
          </Link>
          <Link
            to={`/delete/${music._id}`}
            id="delete-btn"
            onClick={onDeleteHandler}
          >
            Delete
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Details;
