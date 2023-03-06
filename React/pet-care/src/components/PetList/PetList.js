import PetCard from "./PetCard/PetCard";

const PetList = ({ pets }) => {
  return (
    <>
      {pets.length > 0 ? (
        pets.map((x) => <PetCard key={x._id} pet={x} />)
      ) : (
        <div>
          <p className="no-pets">No pets in dashboard</p>
        </div>
      )}
    </>
  );
};

export default PetList;
