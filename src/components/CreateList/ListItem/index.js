import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";

import CustomCard from "../../CustomCard";
import ListItemFooter from "../ListItemFooter";

const ListItem = ({ item }) => {
  return (
    <CustomCard
      link="#"
      image=""
      containerClass="list-item"
      footer={<ListItemFooter total={item.total} />}
    >
      <div>
        <div className="list-item-header">
          <Typography variant="subtitle1" component="h2">
            {item.product}
          </Typography>
          <Checkbox />
        </div>
        <Typography component="p">
          {item.quantity} {item.unit}
        </Typography>
        <Typography component="p">R$ {item.price}</Typography>
      </div>
    </CustomCard>
  );
};

export default ListItem;
