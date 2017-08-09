import React, { Component } from 'react';
import './AlbumList.css';
import AlbumItem from '../album-item/AlbumItem';

class AlbumList extends Component {
  render() {
    const children = this.props.items.map((item) => <AlbumItem {...item} />);
    return <div>{children}</div>;
  }
}

export default AlbumList;