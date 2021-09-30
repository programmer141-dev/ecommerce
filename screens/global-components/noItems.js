import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'

export default function NoItems({navigation}){
  return(
    <View style={styles.none}>
      <Text style={styles.introText}>No Items in your Cart!</Text>
      <Text style={styles.subintro}>Go grab some products and enjoy shopping!!!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.checkout}>
        <Text style={styles.checkText}>Shop now</Text>
      </TouchableOpacity>
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
  subintro:{
    fontFamily:'Poppins',
    fontSize:12,
    marginTop:5
  },
  checkout:{
      width:170,
      height:45,
      backgroundColor:'#0f0f0f',
      color:'white',
      borderRadius:50,
      justifyContent:'center',
      alignItems:'center',
      marginTop:20
    },
    checkText:{
      fontFamily: 'Abril',
      fontSize: 17,
      fontWeight: '500',
      letterSpacing: 0.5,
      color:'white'
    },
})