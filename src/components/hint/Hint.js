import React, { Component } from 'react';
import './Hint.css';

class Hint extends Component {

  render() {
    return  (
      <section className="Hint">
        {this.props.children}
      </section>
    );
  }

}

export default Hint;
