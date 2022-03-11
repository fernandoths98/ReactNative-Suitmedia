import React from "react";
import {Avatar, Button, TextInput} from "react-native-paper";
import {Alert, StyleSheet, Text, Image} from "react-native";
import styled from "styled-components";

const HomeBackground = styled.ImageBackground.attrs({
})`
  flex: 1;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  background-color: #E5E5E5;
`;

const AvatarContainer = styled.View `
  align-items: center;
  justify-content: center;
  margin-top: 200px;
  background-color: #ffffff00;
`;

export const UserDetail = ({navigation, route}) => {
   const {user} = route.params
   const {nama} = route.params

    return (
        <HomeBackground>

            <Text style={
                styles.welcome
            }>Welcome</Text>

            <Text style={
                styles.welcome
            }>{user.first_name} {user.first_name}</Text>

            <AvatarContainer>
            <Image 
                source={{
                    uri: user.avatar}} 
                    style={styles.image}/>
                    
            </AvatarContainer>
            <Text style={styles.textName}>{user.first_name} {user.first_name}</Text>
            <Text style={styles.text}>{user.email}</Text>
            <Text style={styles.web}
            onPress={() => navigation.navigate("Web")}
            >Website</Text>
            <Button mode="contained" style={styles.btn}>
                Choose a User
            </Button>
        </HomeBackground>
    );
};

const styles = StyleSheet.create({

    cover:{
        marginTop: 10,
        flex: 1,
        justifyContent: "center",
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
        top: '20%',
        textAlign: 'center',
        fontSize: 25,
    },

    web: {
        top: '20%',
        textAlign: 'center',
        fontSize: 25,
        color: 'blue',
    },

    textName: {
        top: '20%',
        textAlign: 'center',
        fontSize: 35,
    },

    welcome: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        textAlign: 'left',
        fontSize: 20,
        marginTop: 10,
        marginLeft: 15
    },

    image: {
        width: 300,
        height: 300,
        borderRadius: 400 / 2,
        position: 'absolute',
        margin: 5,
        
    }
});
