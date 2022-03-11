import React from "react";
import {Avatar, Button, Card, TextInput} from "react-native-paper";
import {
    Alert,
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity
} from "react-native";
import styled from "styled-components";
import {useState} from "react";
import {useEffect} from "react";
import { UserInfo } from "./user-info.components";

export const UserScreen = ({navigation, route}) => {
    const {nama} = route.params;

    const [isLoading, setLoading] = useState(true);
    const [users, setUsers] = useState([])

    const getUser = async () => {
        try {
            const res = await fetch('https://reqres.in/api/users')
            const json = await res.json()
            setUsers(json.data)
            console.log("Data : " , json)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getUser();
    }, [])

    return (
    <View>
            <FlatList 
            data={users}
            keyExtractor={(data) => data.id.toString()}
            renderItem={({item}) => {
                return (
                    <TouchableOpacity
                    onPress={() =>{
                        navigation.navigate("UserDetail",{
                            user: item,
                        })
                    }}>
                        <UserInfo value={item}/>
                    </TouchableOpacity>
                )
            }}/>
       
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
        marginStart: 50,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 20,
        marginLeft: 25

    },

    textName: {
        alignItems: 'flex-start',
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

    card: {
        flex: 0.15,
        alignItems: "center",
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        backgroundColor: "white",
        borderRadius: 10
    },

    image: {
        width: 90,
        height: 90,
        borderRadius: 400 / 2,
        position: 'absolute',
        margin: 5,
        left: 0
    }

});
