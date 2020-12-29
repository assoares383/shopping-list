import { faShoppingBasket, faCheck } from "@fortawesome/free-solid-svg-icons";

import CustomCard from "../../../components/CustomCard";
import ListCardItem from "../ListCardItem";
import ListFooter from "../ListFooter";

const List = () => {
  return (
    <CustomCard containerClass="list-container" footer={<ListFooter />}>
      <div>
        <p className="title">Mês</p>
        <div className="list-card-body">
          <ListCardItem icon={faShoppingBasket} text="1 Item(s) Restante" />
          <ListCardItem icon={faCheck} text="2 Item(s) Comprados" />
        </div>
      </div>
    </CustomCard>
  );
};

export default List;
