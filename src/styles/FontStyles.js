import { Text, StyleSheet } from 'react-native';

const FontStyles = StyleSheet.create ({
    card: {
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        margin: 5,
        borderRadius: 10,
        backgroundColor: '#242428',
        display:"flex",
        // alignContent:"center",
        justifyContent:'space-between',
        flexDirection:'row'
    },
    title: {
        fontSize: 18, 
        color: '#ddd',
        fontWeight: 'bold',
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
});

export default FontStyles;