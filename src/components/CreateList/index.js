import Form from "./Form";
import ListItem from "./ListItem";

import "./styles.css";

const CreateList = () => (
  <div className="page-container">
    <Form />

    <div className="list-items-container">
      <ListItem />
    </div>
  </div>
);

export default CreateList;
