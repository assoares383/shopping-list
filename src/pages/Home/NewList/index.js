import CustomCard from "../../../components/CustomCard";

const NewList = () => {
  return (
    <CustomCard link="/lista" containerClass="new-list-container">
      <div>
        <p className="title">Adicionar novas listas</p>
      </div>
    </CustomCard>
  );
};

export default NewList;
