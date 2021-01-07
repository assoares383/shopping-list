import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Form from "./Form";
import ListItem from "./ListItem";
import NewItem from "./NewItem";

import { Creators as ListAction } from "../../store/actions/List";

import "./styles.css";

class CreateList extends Component {
  addProduct = (product, list) => {
    this.props.addProduct(product, list);
  };

  render() {
    return (
      <div className="page-container">
        <Form
          addProduct={this.addProduct}
          updateProduct={this.props.updateProduct}
          url={this.props.match.params.action}
        />

        <div className="list-items-container">
          {this.props.list.items.map((item) => (
            <ListItem
              list={this.props.list.list}
              item={item}
              toggleProduct={this.props.toggleProduct}
              deleteProduct={this.props.deleteProduct}
              key={item.id}
            />
          ))}

          {this.props.match.params.action === "edicao" && (
            <NewItem list={this.props.list.list} />
          )}
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
