import React, { Component } from 'react';
import './Keywords.css';

class Keywords extends Component {

  render() {
    return  (
      <section className="Keywords">
        {this.props.items.map((keyword, index) => (<span key={index}>{keyword}</span>))}
      </section>
    );
  }

}

export default Keywords;
