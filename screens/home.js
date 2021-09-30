import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TopBar from './global-components/topbar';
import Cart from './cart';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false, tabBarVisible: false }}  />
        </Stack.Navigator>
    )
}

function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <TopBar navigation={navigation} />
            <View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    }
})

export default HomeStack;