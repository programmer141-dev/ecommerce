import React,{useState} from 'react'
import {View, StyleSheet, Text, TextInput, TouchableOpacity, Image, CheckBox} from 'react-native'

export default function Login({navigation}) {
  const [check, setCheck] = useState(false)
  return(
    <View style={styles.container}>
      <Text style={styles.title}>~ Login ~</Text>
      <View style={styles.inputWrapper}>
        <Text style={styles.lable}>Username :</Text>
        <TextInput style={styles.Tinput} />
        <Text style={styles.lable}>Password :</Text>
        <TextInput style={styles.Tinput} />
      </View>
      <View style={styles.checkbox}>
        <CheckBox value={check} onValueChange={setCheck} style={styles.check} />
        <Text style={styles.checkText}>Remember Me</Text>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.subtext}>Forgot Password ? Try changing password</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.subtext}>New to the store ? Create an account</Text>
      </TouchableOpacity>
      <Image style={styles.img} source={require('../../assets/login.png')} />
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
  checkbox:{
    flexDirection:'row',
    marginVertical:20,
    width:'80%',
    alignItems:'center',
    marginBottom:10,
  },
  checkText:{
    fontFamily:'Poppins',
    fontSize:12
  },
  btn:{
    width:'80%',
    height:45,
    backgroundColor:'#0f0f0f',
    borderRadius:40,
    justifyContent:'center',
    alignItems:'center',
    marginVertical:20,
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
  img:{
    width:250,
    height:180,
    marginRight:20,
    marginTop:30
  }
})