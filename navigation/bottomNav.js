import { Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { BlurView } from 'expo-blur';
import SearchStack from '../screens/search';
import profileStack from '../screens/profile';
import Cart from '../screens/cart';
import Liked from '../screens/liked';

import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../screens/home';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
    var focusColor2 = '#d49e0b';
    var focusColor = '#000';
    return (
        <Tab.Navigator
            screenOptions={
                {
                    tabBarLabelPosition: "beside-icon",

                    tabBarLabelStyle: {
                        fontWeight: "700",
                        fontSize: 14,
                        fontFamily: 'sans-serif',

                    },
                    // tabBarBackground: () => (
                    //     <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />
                    // ),
                    tabBarIconStyle: { display: "none" },
                    tabBarStyle: [
                        {
                            backgroundColor: 'white',
                            height: 70,
                            elevation: 0,
                            borderTopWidth: 0,
                            position: 'absolute',
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,
                        }
                    ]
                }}
        >
            <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <View style={{ width: 70, height: 50, borderRadius: 90, justifyContent: 'center', alignItems: 'center' }} backgroundColor={focused ? focusColor : 'transparent'}>
                            <Foundation name="home" color={focused ? 'white' : 'black'} size={22} />
                        </View>

                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen name='SearchStack'
                component={SearchStack}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <View style={{ width: 70, height: 50, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }} backgroundColor={focused ? focusColor : 'transparent'}>
                            <MaterialIcons name="search" color={focused ? 'white' : 'black'} size={22} />
                        </View>
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen name='Liked'
                component={Liked}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <View style={{ width: 70, height: 50, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }} backgroundColor={focused ? focusColor : 'transparent'}>
                            <Foundation name="heart" color={focused ? 'white' : 'black'} size={22} />
                        </View>

                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen name='profileStack'
                component={profileStack}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <View style={{ width: 70, height: 50, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }} backgroundColor={focused ? focusColor : 'transparent'}>
                            <Ionicons name="person" color={focused ? 'white' : 'black'} size={22} />
                        </View>

                    ),
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    )
}

