import React, { Component } from 'react';
import './Photo.css';

class Photo extends Component {
  render() {
    return (
      <article className="Photo">
        <div className="preview" style={{backgroundImage: `url(${'https://lh3.googleusercontent.com/-pshFYF97R_A/AAAAAAAAAAI/AAAAAAAAAAA/AMp5VUrY1wZfmN6KNLYLM4wYFyPFEp0kIA/s64-c-mo-md/photo.jpg'})`}}></div>
        <span>Select</span>
      </article>
    );
  }
}

export default Photo;