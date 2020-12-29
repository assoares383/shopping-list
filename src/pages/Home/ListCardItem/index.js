import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListCardItem = (props) => {
  return (
    <>
      <div className="list-card-item">
        <FontAwesomeIcon icon={props.icon} size="sm" />
        <p>{props.text}</p>
      </div>
    </>
  );
};

export default ListCardItem;