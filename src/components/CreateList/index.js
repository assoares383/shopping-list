import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";

import CustomCard from "../CustomCard";
import Form from "./Form";

import "./styles.css";

const CreateList = () => {
  return (
    <div className="page-container">
      <Form />

      <div className="list-items-container">
        <CustomCard link="#" containerClass="list-item">
          <div>
            <div className="list-item-header">
              <Typography variant="subtitle1" component="h2">
                Café
              </Typography>
              <Checkbox />
            </div>
            <Typography component="p">1 unidade</Typography>
            <Typography component="p">R$ 10.00</Typography>
          </div>
        </CustomCard>
      </div>
    </div>
  );
};

export default CreateList;
