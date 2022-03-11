import React from "react";
import {Avatar, Button, TextInput} from "react-native-paper";
import {Alert, StyleSheet, Text} from "react-native";
import styled from "styled-components";

const HomeBackground = styled.ImageBackground.attrs({ // source: require("../../assets/background.png"),
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

export const HomeScreen = ({route, navigation}) => {
    const {nama} = route.params;

    const next = () => {
        navigation.navigate("User", {nama})
    }

    return (
        <HomeBackground>

            <Text style={
                styles.welcome
            }>Welcome</Text>

            <Text style={
                styles.welcome
            }>{nama}</Text>

            <AvatarContainer>
                <Avatar.Icon style={{backgroundColor: "#ffffff00"}}
                    size={200}
                    icon={require("../../assets/image.png")}/>
            </AvatarContainer>

            <Text style={styles.text}>Select a user to show the profile</Text>


            <Button mode="contained" style={styles.btn} 
            onPress={next}>
                Choose a User
            </Button>
        </HomeBackground>
    );
};

const styles = StyleSheet.create({
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
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 25

    },

    textName: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        textAlign: 'left',
        fontSize: 30,
        marginTop: 10,
        marginLeft: 15
    },

    welcome: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        textAlign: 'left',
        fontSize: 20,
        marginTop: 10,
        marginLeft: 15
    }
});
