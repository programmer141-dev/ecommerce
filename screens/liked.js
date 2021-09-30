import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native';
import NoLikedItems from './global-components/nolikedItems.js'
import WishListItems from './global-components/wishlistItems.js'

function Liked() {
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
              <Text style={styles.title}>Your Wishlist</Text>
            </View>
            <WishListItems />
        </View>
    )
}

export default Liked;

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:20
  },
  topBar:{
    width:'100%',
    height:60,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center'
  },
  title:{
    fontFamily:'Abril',
    fontSize:20,
    letterSpacing:0.5
  }
})
