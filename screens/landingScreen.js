import React from 'react'
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Login from './Auth/login.js'
import Register from './Auth/register.js'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


export default function AuthStack(){
  return(
       <Stack.Navigator>
            <Stack.Screen name="Landscreen" component={LandingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false, tabBarVisible: false }}  />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false, tabBarVisible: false }}  />
        </Stack.Navigator>
    )
}

function LandingScreen({navigation}) {
  return(
    <View style={styles.container}>
      <Image style={styles.heroimg} source={require('../assets/hero.png')} />
      <Text style={styles.head}>~ Sid's Shop ~</Text>
      <Text style={styles.subHead}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</Text>
      <View style={styles.btns}>
        <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.btn}>
          <Text style={styles.btnText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.btn2}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
    )
}

var bg = '#fff'
var color = '#000'
var bg2 = '#f0f0f0'

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:20,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:bg
  },
  heroimg:{
    width:250,
    height:200,
    marginBottom:30,
  },
  head:{
    fontFamily:'Abril',
    fontSize:30,
    color:color,
    marginVertical:5
  },
  subHead:{
    fontFamily:'Poppins',
    fontSize:12,
    textAlign:'center',
    width:'87%',
    marginBottom:15,
    color:color,
  },
  btns:{
    width:'90%',
    height:50,
    backgroundColor:bg2,
    borderRadius:100,
    justifyContent:'space-evenly',
    alignItems:'center',
    flexDirection:'row',
    marginTop:20
  },
  btn:{
    width:'45%',
    height:'85%',
    backgroundColor:bg,
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center',
  },
  btn2:{
    width:'50%',
    height:'85%',
    justifyContent:'center',
    alignItems:'center',
  },
  btnText:{
    fontFamily:'Poppins',
    fontSize:15,
    color:color,
  }
})