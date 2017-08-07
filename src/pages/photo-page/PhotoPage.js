import React, { Component } from 'react';
import './PhotoPage.css';
import PhotoInfo from '../../components/photo-info/PhotoInfo';

class PhotoPage extends Component {

  render() {
    return  (
      <section className="PhotoPage">
        <img alt={"Mila Kunis"} src="https://scontent.xx.fbcdn.net/v/t1.0-9/72731_103639173040334_7912155_n.jpg?oh=8ed4114e4e90ef856b5e636b83e5261b&oe=5A2F0B87"/>
        <PhotoInfo
            keywords={['keywords', 'fileName', 'name', 'caption']}
            fileName="mila.jpg"
            name="Mila Kunis"
            caption="It is required to make single-page application, which through an API of one of photo service
            (Flickr, Instagram, Facebook, VK) shows the contents of the user's albums." />
      </section>
    );
  }

}

export default PhotoPage;
