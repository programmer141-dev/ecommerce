import React from 'react';
import { View, Text, TextInput, StyleSheet, Image,TouchableOpacity } from 'react-native';

export default function EditProfile({navigation}){
  return(
      <View style={styles.container}>
        <View style={styles.topbar}>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")} style={styles.btn}>
                  <View style={styles.arrow}></View>
          </TouchableOpacity>
          <Text style={styles.title}>Edit Profile</Text>
        </View>
        <View style={styles.ChangeAvatar}>
          <Image source={{
              uri: 'https://assets.imgix.net/tutorials/forest4.webp',
            }} style={styles.avatarimg} />
          <TouchableOpacity style={{marginVertical:10}}>
            <Text style={styles.changeText}>Change profile pic</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.lable}>Username :</Text>
          <TextInput style={styles.Tinput} />
          <Text style={styles.lable}>Email :</Text>
          <TextInput style={styles.Tinput} />
          <TouchableOpacity style={styles.btn2}>
            <Text style={styles.btnText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:25,
    alignItems:'center'
  },
  topbar:{
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position:'relative',
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
  ChangeAvatar:{
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:30,
  },
  avatarimg:{
    width:90,
    height:90,
    borderRadius:100,
    marginVertical:10,
    borderWidth:6,
    borderColor:'white'
  },
  changeText:{
    fontFamily:'Poppins',
    fontSize:14,
    color:'black',
    letterSpacing:0.5
  },
  inputWrapper:{
    width:'80%',
    alignItems:'flex-start'
    
  },
  lable:{
    fontFamily:'Poppins',
    fontSize:14,
    marginTop:20
  },
  Tinput:{
    width:'100%',
    height:30,
    backgroundColor:'transparent',
    padding:5,
    fontFamily:'Poppins',
    fontSize:13,
    borderBottomColor:'lightgrey',
    borderBottomWidth:1,
    marginBottom:10
  },
  btn2:{
    width:'100%',
    height:45,
    backgroundColor:'#0f0f0f',
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
    marginTop:30,
  },
  btnText:{
    fontFamily:'Abril',
    fontSize:17,
    color:'white',
    letterSpacing:1
  },
})