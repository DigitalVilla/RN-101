import React from 'react';
import { Text, Image, Button, View } from 'react-native';
import Styles from '../styles/FontStyles'; 

const ContactCard = ({ name, phone, status, image }) => {
    return (
        <View style={Styles.card}>
            <Image style={Styles.image} source={ image } />
            <View>
                <Text style={Styles.title}>Name: { name } </Text>
                <Text style={Styles.title}>Phone: { phone } </Text>
                <Text style={Styles.title}>Status: { status } </Text>
            </View>
        </View>
    );
};

export default ContactCard; 