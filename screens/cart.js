import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import NoItems from './global-components/noItems.js'
import CartItems from './global-components/cartItems.js'


function Cart({ navigation }) {
  var items = false
    return (
        <View style={styles.container}>
            <View style={styles.TopContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.btn}>
                  <View style={styles.arrow}></View>
                </TouchableOpacity>
                <Text style={styles.title}>My Cart</Text>
            </View>
            <View style={styles.mainCont}>
              {
                items ? (
                  <View style={styles.menu}>
                    <Text style={styles.total}>Your GrandTotal is : 6000/-</Text>
                    <CartItems />
                  </View>
                ) : <NoItems navigation={navigation} />
              }
            </View>
            {
              items ? (
                <TouchableOpacity style={styles.checkout}>
                  <Text style={styles.checkText}>Proceed to CheckOut</Text>
                </TouchableOpacity>
              ) : <View />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    TopContainer: {
        width: '100%',
        height: 60,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        position:'relative',
    },
    container: {
        flex: 1,
        paddingTop: 25,
        alignItems:'center'
    },
    btn: {
        width:20,
        height:20,
        backgroundColor:'white',
        marginHorizontal:20,
        position:'absolute',
        left:10,
        
    },
    arrow:{
      width:15,
      height:15,
      borderTopWidth:2,
      borderLeftWidth:2,
      borderTopColor:'black',
      borderLeftColor:'black',
      transform:[{rotate:"-45deg"}]
    },
    title: {
        fontFamily: 'Abril',
        fontSize: 20,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
    mainCont:{
      width:'100%',
      height:'100%',
      backgroundColor:'white',
    },
    menu:{
      width:'100%',
      height:'100%',
      backgroundColor:'#f0f0f0',
      marginTop:0,
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      justifyContent:'flex-start',
      alignItems:'center',
      paddingBottom:230,
    },
    checkout:{
      width:300,
      height:45,
      backgroundColor:'#0f0f0f',
      color:'white',
      position:'absolute',
      bottom:90,
      left:30,
      zIndex:10,
      borderRadius:50,
      justifyContent:'center',
      alignItems:'center'
    },
    checkText:{
      fontFamily: 'Abril',
      fontSize: 17,
      fontWeight: '500',
      letterSpacing: 1,
      color:'white'
    },
    total:{
      fontFamily: 'Poppins',
      fontSize: 15,
      fontWeight: '500',
      letterSpacing: 0.5,
      marginVertical:15
    }
    
})

export default Cart;