import React, {Component} from 'react';
import './Photo.css';
import Hint from '../hint/Hint';
import PhotoInfo from '../photo-info/PhotoInfo';

class Photo extends Component {
  render() {
    return (
      <article className="Photo">
        <div className="preview"
             style={{backgroundImage: `url(${'https://lh3.googleusercontent.com/-pshFYF97R_A/AAAAAAAAAAI/AAAAAAAAAAA/AMp5VUrY1wZfmN6KNLYLM4wYFyPFEp0kIA/s64-c-mo-md/photo.jpg'})`}}></div>
        <span>Select</span>
        <Hint>
          <PhotoInfo
            keywords={['keywords', 'fileName', 'name', 'caption']}
            fileName="mila.jpg"
            name="Mila Kunis"
            caption="It is required to make single-page application, which through an API of one of photo service
            (Flickr, Instagram, Facebook, VK) shows the contents of the user's albums." />
        </Hint>
      </article>
    );
  }
}

export default Photo;