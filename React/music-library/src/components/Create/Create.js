import { useAuthContext } from "../../contexts/AuthContext";
import * as musicService from "../../services/musicService";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const onCreateHandler = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    const singer = formData.get("singer");
    const album = formData.get("album");
    const imageUrl = formData.get("imageUrl");
    const release = formData.get("release");
    const label = formData.get("label");
    const sales = formData.get("sales");

    musicService
      .createMusic(
        {
          singer,
          album,
          imageUrl,
          release,
          label,
          sales,
        },
        user.accessToken
      )
      .then((res) => {
        navigate("/dashboard");
      });
  };

  return (
    <section id="create">
      <div className="form">
        <h2>Add Album</h2>
        <form className="create-form" method="POST" onSubmit={onCreateHandler}>
          <input
            type="text"
            name="singer"
            id="album-singer"
            placeholder="Singer/Band"
          />
          <input
            type="text"
            name="album"
            id="album-album"
            placeholder="Album"
          />
          <input
            type="text"
            name="imageUrl"
            id="album-img"
            placeholder="Image url"
          />
          <input
            type="text"
            name="release"
            id="album-release"
            placeholder="Release date"
          />
          <input
            type="text"
            name="label"
            id="album-label"
            placeholder="Label"
          />
          <input
            type="text"
            name="sales"
            id="album-sales"
            placeholder="Sales"
          />

          <button type="submit">post</button>
        </form>
      </div>
    </section>
  );
};

export default Create;
