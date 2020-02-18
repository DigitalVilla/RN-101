import React from 'react'
import { View, Text, FlatList } from 'react-native'
import ContactCard from '../components/ContactCard'

const Contacts = () => {
       
    const contacts = [
        { role:'user', name:'Adam', age:'30', phone:'403-234-1234', profile:require('../../assets/adam.jpg')},
        { role:'user', name:'Adrian', age:'25', phone:'403-542-7642', profile:require('../../assets/adrian.jpg')},
        { role:'admin', name:'Alice', age:'28', phone:'403-432-6212', profile:require('../../assets/alice.jpg')},
        { role:'user', name:'Andrea', age:'31', phone:'403-764-3641', profile:require('../../assets/andrea.jpg')},
        { role:'user', name:'Eva', age:'24', phone:'403-523-6633', profile:require('../../assets/eva.jpg')},
        { role:'admin', name:'Ivan', age:'32', phone:'403-224-7742', profile:require('../../assets/ivan.jpg')},
        { role:'user', name:'Kevin', age:'27', phone:'403-232-9765', profile:require('../../assets/kevin.jpg')},
        { role:'user', name:'Scott', age:'36', phone:'403-633-7421', profile:require('../../assets/scott.jpg')},
        { role:'admin', name:'Sharon', age:'24', phone:'403-120-3641', profile:require('../../assets/sharon.jpg')},

    ];

    return (
        <View>
            <FlatList
                data={contacts}
                keyExtractor={( el, i ) => el.name + el.phone + i}
                renderItem={ ({ item, index }) => {
                    return (
                        <ContactCard
                            name={ item.name }
                            image={ item.profile }
                            phone={ item.phone }
                            status={ item.role }
                        />
                    )
                }}
            />
        </View>
    )
}

export default Contacts
