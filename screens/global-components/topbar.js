import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


function TopBar({ navigation }) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>
                    Sid's Candy Shop
                </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.push('Cart')}>
                <MaterialCommunityIcons name="cart" style={styles.icon} color={'black'} size={23} />
            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    title: {
        marginLeft: 20,
        fontFamily: 'Abril',
        fontSize: 20,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
    icon: {
        marginRight: 20,
        fontWeight: '700',
    }
})

export default TopBar;