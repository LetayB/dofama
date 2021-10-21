import React, { Component } from 'react';
import axios from 'axios';
import Input from './Input';
import ListItem from './ListItem';

class Item extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    this.getItems();
  }

  getItems = () => {
    axios({ url: 'items', baseURL: 'http://localhost:8800/api' })
      .then((res) => {
        if (res.data) {
          this.setState({
            items: res.data,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  addItem = (id) => {
    axios
      .delete(`/api/items/${id}`)
      .then((res) => {
        if (res.data) {
          this.getItems();
        }
      })
      .catch((err) => console.log(err));
  };

  deleteItem = (name) => {
    axios
      .post(`/api/items/`,{
        name:name
      })
      .then((res) => {
        if (res.data) {
          this.getItems();
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    let { items } = this.state;

    return (
      <div>
        <h1>My Item(s)</h1>
        <Input getItems={this.getItems} />
        <ListItem items={items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default Item;