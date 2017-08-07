import React, { Component } from 'react';
import './AlbumItem.css';

class AlbumItem extends Component {
  
  render() {
    return  (
      <article className="AlbumItem">
        <div className="preview" style={{backgroundImage: `url(${this.props.img})`}}></div>
        <div className="info">
          <h4>{this.props.title}</h4>
          <span>{this.props.countItems}</span>
          <span>{this.props.changed}</span>
        </div>
        <div className="action">
          <span>>></span>
        </div>
      </article>
    );
  }

}

export default AlbumItem;