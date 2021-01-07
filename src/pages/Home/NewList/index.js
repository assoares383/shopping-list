import CustomCard from "../../../components/CustomCard";

const NewList = (props) => {
  return (
    <CustomCard
      action={props.newList}
      link="/lista/novo"
      containerClass="new-list-container"
    >
      <div>
        <p className="title">Adicionar novas listas</p>
      </div>
    </CustomCard>
  );
};

export default NewList;
