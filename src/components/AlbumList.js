import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {
  //Initial state
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(a =>
      <AlbumDetail key={a.title} data={a} />
    );
  }

  render() {
    console.log(this.state);

    return (
      <ScrollView>
        {
          // ref to javascript var/function within JSX
          this.renderAlbums()
        }
      </ScrollView>
    );
  }
}

export default AlbumList;
