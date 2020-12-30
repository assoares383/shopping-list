import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";

import CustomCard from "../../CustomCard";
import ListItemFooter from "../ListItemFooter";

const ListItem = () => {
  return (
    <CustomCard link="#" containerClass="list-item" footer={<ListItemFooter />}>
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
  );
};

export default ListItem;
