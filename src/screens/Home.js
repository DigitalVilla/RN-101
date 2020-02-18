import React from 'react';
import { Text, TouchableOpacity, Button } from 'react-native';
import Styles from '../styles/FontStyles'; 

const HomeScreen = ({ navigation }) => {

  const handlePress = () => navigation.navigate( 'Contacts' );

  return (
      <>
        <Text style={Styles.title}>Home</Text>
        <TouchableOpacity onPress={ handlePress }>
          <Text> CONNECT </Text>
        </TouchableOpacity>
      </>
    );
};

export default HomeScreen;
