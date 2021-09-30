import React,{useState} from 'react'
import {View, StyleSheet, Text, TextInput, TouchableOpacity, Image} from 'react-native'

export default function Register({navigation}) {
  const [check, setCheck] = useState(false)
  return(
    <View style={styles.container}>
      <Text style={styles.title}>~ Register ~</Text>
      <View style={styles.inputWrapper}>
        <Text style={styles.lable}>Username :</Text>
        <TextInput style={styles.Tinput} />
        <Text style={styles.lable}>Email :</Text>
        <TextInput style={styles.Tinput} />
        <Text style={styles.lable}>Password :</Text>
        <TextInput style={styles.Tinput} />
        <Text style={styles.lable}>Re-Password :</Text>
        <TextInput style={styles.Tinput} />
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.subtext} onPress={() => navigation.navigate("Login")}>Already having an account ? Log in with your credintials</Text>
      </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    paddingTop:20,
    backgroundColor:'white',
  },
  title:{
    fontFamily:'Abril',
    fontSize:30,
    marginTop:50
  },
  inputWrapper:{
    width:'80%',
    alignItems:'flex-start',
    marginTop:20,
    
  },
  lable:{
    fontFamily:'Abril',
    fontSize:18,
    marginVertical:20
  },
  Tinput:{
    width:'100%',
    height:40,
    backgroundColor:'lightgrey',
    padding:10,
    borderRadius:5,
    fontFamily:'Poppins',
    fontSize:14
  },
  btn:{
    width:'80%',
    height:45,
    backgroundColor:'#0f0f0f',
    borderRadius:40,
    justifyContent:'center',
    alignItems:'center',
    marginVertical:20,
    marginTop:40
  },
  btnText:{
    fontFamily:'Abril',
    fontSize:17,
    color:'white',
    letterSpacing:1
  },
  subtext:{
    fontFamily:'Poppins',
    fontSize:12,
    color:'#282C35',
    marginTop:10,
  },
})