import { Types } from "../../actions/List";

const initialState = {
  list: null,
  items: [],
};

export default function list(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_PRODUCT:
      return {
        list: action.list,
        items: [
          ...state.items,
          { ...action.product, total: getItemTotal(action.product) },
        ],
      };
    default:
      return state;
  }
}

const getItemTotal = (product) => {
  return product.price * product.quantity;
};
