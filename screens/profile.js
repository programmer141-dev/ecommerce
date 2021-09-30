import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EditProfile from './editprofile.js'

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


function profileStack(){
  return(
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}


function Profile({navigation}) {
    return (
        <View style={styles.profile}>
            <View style={styles.avatarsec}>
              <View style={styles.avatar}>
                <View style={styles.ring}>
                    <Image source={{
                    uri: 'https://assets.imgix.net/tutorials/forest4.webp',
                    }} style={styles.avatarimg}/>
                </View>
              </View>
              <Text style={styles.username}>Sidhu</Text>
              <Text style={styles.title}>Customer</Text>
              <Text style={styles.title}>sid@sidmail.com</Text>
            </View>
            <View style={styles.menu}>
              <TouchableOpacity onPress={() => navigation.navigate('EditProfile')} style={styles.item}>
                <MaterialIcons name="mode-edit" color={'#0f0f0f'} style={{marginHorizontal:20}} size={22} />
                <Text style={styles.itemTitle}>Edit Profile</Text>
                <View style={styles.arrow} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.item}>
                <MaterialIcons name="location-history" color={'#0f0f0f'} style={{marginHorizontal:20}} size={22} />
                <Text style={styles.itemTitle}>Shipping Address</Text>
                <View style={styles.arrow} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.item}>
                <FontAwesome name="truck" color={'#0f0f0f'} style={{marginHorizontal:20}} size={22} />
                <Text style={styles.itemTitle}>Your Orders</Text>
                <View style={styles.arrow} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.item}>
                <MaterialCommunityIcons name="bell" color={'#0f0f0f'} style={{marginHorizontal:20}} size={22} />
                <Text style={styles.itemTitle}>Notifications</Text>
                <View style={styles.arrow} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.item}>
                <FontAwesome name="credit-card" color={'#0f0f0f'} style={{marginHorizontal:20}} size={22} />
                <Text style={styles.itemTitle}>Cards</Text>
                <View style={styles.arrow} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.item}>
                <FontAwesome name="gear" color={'#0f0f0f'} style={{marginHorizontal:20}} size={22} />
                <Text style={styles.itemTitle}>Settings</Text>
                <View style={styles.arrow} />
              </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  profile:{
    width:'100%',
    height:'100%',
    backgroundColor:'white',
  },
  avatarsec:{
    width:'100%',
    height:'40%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'transparent'
  },
  avatar:{
    width:130,
    height:130,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:100,
    borderWidth:3,
    borderColor:'#f0f0f0'
  },
  ring:{
    width:110,
    height:110,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:100,
    borderWidth:4,
    borderColor:'lightgrey'
    
  },
  avatarimg:{
    width:90,
    height:90,
    borderRadius:100,
  },
  username:{
    marginTop:10,
    fontFamily:'Poppins',
    fontSize:17,
  },
  title:{
    fontFamily:'Poppins',
    fontSize:13,
    color:'grey'
  },
  menu:{
    width:'100%',
    height:'70%',
    backgroundColor:'#f0f0f0',
    borderRadius:30
  },
  item:{
    width:'100%',
    height:65,
    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection:'row',
    position:'relative',
  },
  itemTitle:{
    fontFamily:'Poppins',
    fontSize:14
  },
  arrow:{
    width:9,
      height:9,
      borderTopWidth:2,
      borderLeftWidth:2,
      borderBottomColor:'black',
      borderRightColor:'black',
      transform:[{rotate:"135deg"}],
      position:'absolute',
      right:25
  }
})

export default profileStack;