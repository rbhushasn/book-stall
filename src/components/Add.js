import React, { Component } from 'react';
import {connect} from "react-redux";
import ReactDOM from 'react-dom';

import { updateProduct, addProduct } from 'actions/products/';
import { updateEdit } from 'actions/edit/';

class Add extends Component {
  constructor(props) {
    super(props);
    let name = '',
    author = '',
    description=''
    let { edit } = props;
    if (edit) {
      name = edit.name;
      author = edit.author;
      description= edit.description;
    }
    this.state = {
      name,
      author,
      description
    };
  };

  onChangeForm(f, { target }) {
    this.setState({
      [f]: target.value
    });
  };

  onAdd(e) {
    e.preventDefault();
    let { name, author,description } = this.state,
      { edit } = this.props;
    if (!name || !author||! description) {
      alert('Product Name,author and description are required!');
    }
    if (edit) {
      this.props.updateProduct({
        id: edit.id,
        name, author,description
      });
    } else {
      this.props.onAdd({
        name,
        author,
        description
      });
    }
    this.setState({
      name: '',
      author: '',
      description:''
    });
    ReactDOM.findDOMNode(this.refs.name).focus();
  };

  render() {
    let { name, author,description } = this.state,
      { edit } = this.props;
    return (
      <form
        onSubmit={this.onAdd.bind(this)}>
        <div
          className={'form-group'}>

          <div
            className={'form-group col-md-5'}>
            <label>Book Name </label>
            <input
              ref={'name'}
              autoFocus
              value={name}
              onChange={this.onChangeForm.bind(this,'name')}
              className={'form-control'}
              type={'text'}
              placeholder={'Product Name ..'}
            />
          </div>
          <div
            className={'form-group col-md-5'}>
            <label>Book Author </label>
            <input
            ref={'author'}
            autoFocus
              onChange={this.onChangeForm.bind(this,'author')}
              value={author}
              className={'form-control'}
              type={'text'}
              placeholder={'Book Author..'}
            />
          </div>

          <div
            className={'form-group col-md-5'}>
            <label>Book Description </label>
            <input
            ref={'description'}
            autoFocus
            onChange={this.onChangeForm.bind(this,'description')}
              value={description}
              className={'form-control'}
              type={'text'}
              placeholder={'Product description ..'}
            />
          </div>

          <div
            className={'btn-group btn-group-toggle'}>
            <button
              className={'btn btn-secondary btn-block '}
              type={'submit'}>
             Cancle
            </button>
            <button
              className={'btn btn-primary btn-block'}
              type={'submit'}>
              {edit ? 'Update' : 'Add'}
            </button>
          </div>

        </div>
      </form>
    );
  }
}

export default connect((state)=> {
    return {
      edit: state.edit
    };
  },
  {
    updateProduct,
    onAdd: addProduct,
    onEdit: updateEdit
  }
)(Add);