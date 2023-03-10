import { useParams, useNavigate, Form } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

import * as musicService from "../../services/musicService";
import useMusicState from "../../hooks/useMusicState";

const Edit = () => {
  const { user } = useAuthContext();
  const { musicId } = useParams();
  const [music, setMusic] = useMusicState(musicId);
  const navigate = useNavigate();

  const onEditHandler = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);

    const singer = formData.get("singer");
    const album = formData.get("album");
    const imageUrl = formData.get("imageUrl");
    const release = formData.get("release");
    const label = formData.get("label");
    const sales = formData.get("sales");

    musicService
      .update(
        musicId,
        { singer, album, imageUrl, release, label, sales },
        user.accessToken
      )
      .then((res) => {
        navigate("/dashboard");
      });
  };

  return (
    <section id="edit">
      <div className="form">
        <h2>Edit Album</h2>
        <form className="edit-form" method="POST" onSubmit={onEditHandler}>
          <input
            type="text"
            name="singer"
            id="album-singer"
            placeholder="Singer/Band"
            defaultValue={music.singer}
          />
          <input
            type="text"
            name="album"
            id="album-album"
            placeholder="Album"
            defaultValue={music.album}
          />
          <input
            type="text"
            name="imageUrl"
            id="album-img"
            placeholder="Image url"
            defaultValue={music.imageUrl}
          />
          <input
            type="text"
            name="release"
            id="album-release"
            placeholder="Release date"
            defaultValue={music.release}
          />
          <input
            type="text"
            name="label"
            id="album-label"
            placeholder="Label"
            defaultValue={music.label}
          />
          <input
            type="text"
            name="sales"
            id="album-sales"
            placeholder="Sales"
            defaultValue={music.sales}
          />

          <button type="submit">post</button>
        </form>
      </div>
    </section>
  );
};

export default Edit;
