import React from 'react';
import { Text, FlatList, Button } from 'react-native';
import Styles from '../styles/FontStyles'; 

const List = ({ navigation }) => {

    // console.log(props);
    
    const familiy =[
        { role:'Father', name: 'Omar', age:'30'},
        { role:'Mother', name: 'Alexandria', age:'25'},
        { role:'Sister', name: 'Maia', age:'5'},
        { role:'Brother', name: 'Eli', age:'4'},
        { role:'Sister', name: 'Aliya', age:'1'},
    ];

    const handlePress = () => navigation.navigate( 'Home' );
    

    return (
        <>
            <Button title={'Connect'} onPress={ handlePress }/>
            <FlatList
                data={familiy}
                // horizontal
                // showsHorizontalScrollIndicator={false}
                keyExtractor={ (el, i) => el.name + i }
                renderItem={ ({item, index}) => { 
                return  (
                    <Text style={Styles.item}>
                        <Text style={Styles.title}> Name: </Text>
                        <Text style={Styles.text}> {item.name} </Text>
                        <Text style={Styles.title}> Role: </Text>
                        <Text style={Styles.text}> {item.role} </Text>
                    </Text>
                )
                }}
            />
        </>
    );
};

export default List; 