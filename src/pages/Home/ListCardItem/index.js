import PropTypes from "prop-types";
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

ListCardItem.propTypes = {
  icon: PropTypes.object.isRequired,
  text: PropTypes.object.isRequired,
};

export default ListCardItem;
