import React from "react";
import {Avatar, Button, Card, TextInput} from "react-native-paper";
import {
    Alert,
    StyleSheet,
    Text,
    View,
    Image,
    FlatList
} from "react-native";

export const UserInfo = ({value}) => {
    return (
        <View style={styles.cover}>
    
    <View style={styles.card}>
        <Image 
        source={{
            uri: value.avatar}} 
            style={styles.image}/>
        <Text style={styles.textName}>{value.first_name} {value.last_name}</Text>
        <Text style={styles.text}>{value.email}</Text>
    </View>
            
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textInput: {
        borderRadius: 10,
        margin: 10,
        paddingLeft: 10,
        paddingRight: 10
    },

    btn: {
        margin: 10,
        bottom: 0,
        position: 'absolute',
        width: '95%',
        backgroundColor: '#2B637B'
    },

    text: {
        marginTop: 10,
        justifyContent: 'center',
        textAlign: 'left',
        fontSize: 20,
        marginBottom: 20,

    },

    textName: {
        justifyContent: 'center',
        textAlign: 'left',
        fontSize: 30,
        marginTop: 10,
    },

    welcome: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        textAlign: 'left',
        fontSize: 20,
        marginTop: 10,
        marginLeft: 15
    },

    cover:{
        marginTop: 10,
        flex: 1,
        justifyContent: "center",
    },

    card: {
        flex: 1.15,
        alignItems: "center",
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        backgroundColor: "white",
        borderRadius: 10
    },

    image: {
        width: 85,
        height: 85,
        borderRadius: 400 / 2,
        position: 'absolute',
        margin: 5,
        left: 0
    }

});
