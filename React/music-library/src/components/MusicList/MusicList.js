import MusicCard from "./MusicCard/MusicCard";

const MusicList = ({ musics }) => {
  return (
    <>
      {musics.length > 0 ? (
        musics.map((x) => <MusicCard key={x._id} music={x} />)
      ) : (
        <h2>There are no albums added yet.</h2>
      )}
    </>
  );
};

export default MusicList;
