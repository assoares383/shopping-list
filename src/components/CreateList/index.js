import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Form from "./Form";
import ListItem from "./ListItem";
import { Creators as ListAction } from "../../store/actions/List";

import "./styles.css";

class CreateList extends Component {
  addProduct = (product, list) => {
    this.props.addProduct(product, list);
  };

  render() {
    return (
      <div className="page-container">
        <Form addProduct={this.addProduct} />

        <div className="list-items-container">
          {this.props.list.items.map((item) => (
            <ListItem
              item={item}
              toggleProduct={this.props.toggleProduct}
              deleteProduct={this.props.deleteProduct}
              key={item.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapsStateToProps = (state) => ({
  list: state.list,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(ListAction, dispatch);

export default connect(mapsStateToProps, mapDispatchToProps)(CreateList);
