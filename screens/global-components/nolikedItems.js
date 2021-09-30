import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'

export default function NoLikedItems(){
  return(
    <View style={styles.none}>
      <Text style={styles.introText}>Your Wishlist is Empty!</Text>
    </View>
    )
}

const styles = StyleSheet.create({
  none:{
    width:'100%',
    height:'70%',
    justifyContent:'center',
    alignItems:'center',
  },
  introText:{
    fontFamily: 'Abril',
    fontSize: 30,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
})