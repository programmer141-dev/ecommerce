import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

export default function CartDetails() {
  return(
    <View style={styles.details}>
      <Text>Price Details</Text>
    </View>
    )
}

const styles = StyleSheet.create({
  details:{
    width:350,
    height:100,
    backgroundColor:'white',
    marginVertical:15,
    borderRadius:15
  }
})