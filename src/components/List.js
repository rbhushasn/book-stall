import React, { Component } from 'react';
import {connect} from "react-redux";

import { changeQuantity, deleteProduct } from 'actions/products/';
import { updateEdit } from 'actions/edit/';

class ListItem extends Component {
  changeQuantity(product) {
    this.props.changeQuantity(product.id, 'ADD');
  };

  onEdit(product) {
    this.props.onEdit(product);
  };

  onDelete(product) {
    this.props.onDelete(product);
  };
  
  render() {
    let { product } = this.props;
    return(
      <li
        className={`list-group-item`}>
        <span
          className={'mt-1 float-left'}>
          {product.name}
          <strong
            className={'ml-2'}>
            {`Rs. ${product.price}/- Only`}
          </strong>
        </span>
        <button
          disabled={product.quantity}
          onClick={this.changeQuantity.bind(this, product)}
          className={'btn btn-primary btn-sm float-right'}
          type={'button'}>
          {'Add to Cart'}
        </button>
        <button
          onClick={this.onDelete.bind(this, product)}
          className={'btn btn-danger btn-sm float-right'}
          type={'button'}>
          {'Remove'}
        </button>
        <button
          onClick={this.onEdit.bind(this, product)}
          type={'button'}
          className={'btn btn-dark btn-sm float-right'}>
          Edit
        </button>
      </li>
    );
  };
};

class List extends Component {
  render() {
    let { products } = this.props;
    return (
      <ul
        className={'list-group mb-3'}>
        {products.map((product, k)=>
          <ListItem
            key={k}
            product={product}
            changeQuantity={this.props.changeQuantity}
            onEdit={this.props.onEdit}
            onDelete={this.props.onDelete}
          />
        )}
        {!products.length && <li className={'list-group-item font-weight-bold text-center'}>{'No Product Added!'}</li>}
      </ul>
    );
  }
}

export default connect((state) => {
    return {
      products: state.products
    }
  },
  {
    changeQuantity,
    onDelete: deleteProduct,
    onEdit: updateEdit
  }
)(List);