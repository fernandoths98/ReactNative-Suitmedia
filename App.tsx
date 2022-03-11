import {StatusBar} from "expo-status-bar";
import {Image, StyleSheet, Text, View} from "react-native";
import {HomeBackground} from "./src/components/design.styles";
import {HomeScreen} from "./src/Home/home";
import {LoginScreen} from "./src/Login/login";
import {Provider as HomeProvider} from "react-native-paper";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { UserScreen } from "./src/Users/user";
import { UserDetail } from "./src/Users/user-detail.screen";
import { WebScreen } from "./src/Webview/webview";


const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <HomeProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login"
                        component={LoginScreen}/>
                    <Stack.Screen name="Home"
                        component={HomeScreen}/>
                    <Stack.Screen name="User"
                        component={UserScreen}/>
                    <Stack.Screen name="UserDetail"
                        component={UserDetail}/>
                    <Stack.Screen name="Web"
                        component={WebScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </HomeProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },

    image: {
        flex: 1,
        justifyContent: "center",
        width: "100%",
        height: 200,
        resizeMode: "cover"
    }
});
