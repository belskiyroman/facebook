import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AlbumItem from './components/album-item/AlbumItem';
import AlbumList from './components/album-list/AlbumList';
import Photo from './components/photo/Photo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Photo />
        <AlbumList items={[{
          title: 'Company Brochures',
          countItems: '1856 files',
          changed: '2 hours ago',
          img: 'https://lh3.googleusercontent.com/-pshFYF97R_A/AAAAAAAAAAI/AAAAAAAAAAA/AMp5VUrY1wZfmN6KNLYLM4wYFyPFEp0kIA/s64-c-mo-md/photo.jpg'
        }, {
          title: 'Company Brochures',
          countItems: '1856 files',
          changed: '2 hours ago',
          img: 'https://lh3.googleusercontent.com/-pshFYF97R_A/AAAAAAAAAAI/AAAAAAAAAAA/AMp5VUrY1wZfmN6KNLYLM4wYFyPFEp0kIA/s64-c-mo-md/photo.jpg'
        }, {
          title: 'Company Brochures',
          countItems: '1856 files',
          changed: '2 hours ago',
          img: 'https://lh3.googleusercontent.com/-pshFYF97R_A/AAAAAAAAAAI/AAAAAAAAAAA/AMp5VUrY1wZfmN6KNLYLM4wYFyPFEp0kIA/s64-c-mo-md/photo.jpg'
        }, {
          title: 'Company Brochures',
          countItems: '1856 files',
          changed: '2 hours ago',
          img: 'https://lh3.googleusercontent.com/-pshFYF97R_A/AAAAAAAAAAI/AAAAAAAAAAA/AMp5VUrY1wZfmN6KNLYLM4wYFyPFEp0kIA/s64-c-mo-md/photo.jpg'
        }]} />
      </div>
    );
  }
}

export default App;
