import React, { Component } from 'react';
import {connect} from "react-redux";

import { deleteProduct } from 'actions/products/';
import { updateEdit } from 'actions/edit/';


class CartItem extends Component {
  
  onEdit(product) {
    this.props.onEdit(product);
  };

  onDelete(product) {
    this.props.onDelete(product);
  };
  render() {
    let { product } = this.props,
      { id, name, author, description } = product;
    return(
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{author}</td>
        <td>{description}</td>
        <td>
        <button
          onClick={this.onDelete.bind(this)}
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
        </td>
      </tr>
    );
  };
};

class Cart extends Component {
  render() {
    let { products } = this.props;
    products = products.filter((p)=> { return p.description; });
   
    return (
      <table
        className={'table table-bordered mb-3'}>
        <thead>
          <tr>
            <th>{'#Id'}</th>
            <th>{'Name'}</th>
            <th>{'Author'}</th>
            <th>{'Description'}</th>
            <th>{'Action'}</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, k)=>
            <CartItem
              key={k}
              product={product}
              onEdit={this.props.onEdit}
            onDelete={this.props.onDelete}
            />
          )}
          {products.length ?
            <tr>
            </tr>
            :
            <tr>
              <th
                className={'text-center'}
                colSpan={'5'}>
                {'Cart is Empty!'}
              </th>
            </tr>
          }
        </tbody>
      </table>
    );
  }
}

export default connect((state) => {
  return {
      products: state.products
    }
  },
  {
    onDelete: deleteProduct,
    onEdit: updateEdit
  }
)(Cart);