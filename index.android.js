//Index file for android

//Import a library
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//create a Component
//what is a Component?
// A component is something that produces some amount of text or content
// that we can render on the screen of our device
// A component is a JS function that returns some amount of JSX.

const App = () => (
    <View style={{ flex: 1 }} >
      <Header headerText={'Albums'} />
      < AlbumList />
    </View>
);


//Render it to the screen
AppRegistry.registerComponent('Albums', () => App);
