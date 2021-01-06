import { faShoppingBasket, faCheck } from "@fortawesome/free-solid-svg-icons";

import CustomCard from "../../../components/CustomCard";
import ListCardItem from "../ListCardItem";
import ListFooter from "../ListFooter";

const List = (props) => {
  return (
    <CustomCard
      containerClass="list-container"
      link="/lista"
      footer={<ListFooter total={props.total} />}
    >
      <div>
        <p className="title">{props.list}</p>
        <div className="list-card-body">
          <ListCardItem
            icon={faShoppingBasket}
            text={`${props.openedItems} Item(s) Restante`}
          />
          <ListCardItem
            icon={faCheck}
            text={`${props.closedItems} Item(s) Comprados`}
          />
        </div>
      </div>
    </CustomCard>
  );
};

export default List;
