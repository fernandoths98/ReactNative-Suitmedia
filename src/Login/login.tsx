import React from "react";
import { Avatar, Button, TextInput } from "react-native-paper";
import { Alert, KeyboardAvoidingView, StyleSheet, Platform} from "react-native";
import styled from "styled-components";

const HomeBackground = styled.ImageBackground.attrs({
  source: require("../../assets/background.png"),
})`
  flex: 1;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
`;

const AvatarContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 200px;
  background-color: #ffffff00;
`;

export const LoginScreen = ({navigation}) => {
  const [nama, setNama] = React.useState("");
  const [palindrom, setPalindrom] = React.useState("");

  const checkPalindrom = () => {
   let palindromReverse = palindrom.split("").reverse().join("")
   if (palindrom === palindromReverse) {
     Alert.alert("is Palindrome " + palindrom)
   } else {
    Alert.alert("not Palindrome " + palindrom)
   }
  };

  return (
    <KeyboardAvoidingView 
    enabled behavior={Platform.OS === "ios" ? "padding" : null}
    style={styles.container}
    >
    <HomeBackground>
      <AvatarContainer>
        <Avatar.Icon
          style={{ backgroundColor: "#ffffff00" }}
          size={200}
          icon={require("../../assets/ic_photo.png")}
        />
      </AvatarContainer>

      <TextInput
        label="Nama"
        value={nama}
        style={styles.textInput}
        onChangeText={(nama) => setNama(nama)}
      />

      <TextInput
        label="Palindrome"
        value={palindrom}
        style={styles.textInput}
        onChangeText={(palindrom) => setPalindrom(palindrom)}
      />

      <Button mode="contained" style={styles.btnCheck} onPress={checkPalindrom}>
        Check
      </Button>
      <Button mode="contained" style={styles.btnCheck}
      onPress={() => navigation.navigate("Home", {nama})}
      >
        Next
      </Button>
    </HomeBackground>
    </KeyboardAvoidingView>
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
    paddingRight: 10,
  },

  btnCheck: {
    borderRadius: 10,
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#2B637B',
  },
});
