import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import TopBar from './global-components/topbar';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()

function SearchStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}


function Search() {
    return (
        <View style={styles.container}>
            <View style={styles.searchC}>
              <View style={styles.search}>
                <TextInput style={styles.inputT} 
                  placeholder="Search  your  Products..."
                />
                <MaterialIcons name="search" color={ 'black'} size={22} style={{position:"absolute", right:30, backgroundColor:'#f0f0f0'}} />
              </View>
              <View style={styles.searchTags}>
              <Text style={{fontFamily:'Poppins', fontSize:17, marginLeft:15}}>Popular Tags :</Text>
               <View style={styles.tagCont}>
                <TouchableOpacity style={styles.tag}>
                  <Text style={styles.tagtext}>Men's Wear</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tag}>
                  <Text style={styles.tagtext}>Shoes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tag}>
                  <Text style={styles.tagtext}>Kurtha's</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tag}>
                  <Text style={styles.tagtext}>Sports Wear</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tag}>
                  <Text style={styles.tagtext}>Watche's</Text>
                </TouchableOpacity>
               </View>
              <View style={styles.recent}>
                <Text style={{fontFamily:'Poppins', fontSize:17, marginLeft:15, marginVertical:15 }}>Recently Searched :</Text>
                <TouchableOpacity style={styles.recentSearch}>
                  <Entypo name="back-in-time" color={ 'black'} size={22} style={{marginHorizontal:15}}/>
                  <Text style={styles.searchQuery}>Headphones</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.recentSearch}>
                  <Entypo name="back-in-time" color={ 'black'} size={22} style={{marginHorizontal:15}}/>
                  <Text style={styles.searchQuery}>Shoes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.recentSearch}>
                  <Entypo name="back-in-time" color={ 'black'} size={22} style={{marginHorizontal:15}}/>
                  <Text style={styles.searchQuery}>Hard Disks</Text>
                </TouchableOpacity>
              </View>
              </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        justifyContent:'flex-start',
        alignItems:'center'
    },
    searchC:{
      width:'100%',
      height:'100%',
      justifyContent:'flex-start',
      alignItems:'center',
      backgroundColor:'white',
    },
    search:{
      flexDirection:'row',
      width:'100%',
      height:80,
      justifyContent:'center',
      alignItems:'center',
      marginTop:10,
    },
    inputT: {
      width:'95%',
      height: 50,
      paddingHorizontal: 15,
      backgroundColor:'#f0f0f0',
      borderRadius:5,
      fontFamily:'Poppins',
      color:'black',
      position:'relative',
      borderWidth:1,
      borderColor:'lightgrey'
    },
    recent:{
      width:'100%',
      height:'100%',
      borderRadius:5,
      backgroundColor:'#f0f0f0',
      
    },
    recentSearch:{
      width:'100%',
      height:45,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'flex-start',
      marginTop:10
    },
    searchQuery:{
      fontFamily:'Poppins',
      fontSize:12.5,
      letterSpacing:0.5
    },
    searchTags:{
      width:'100%',
      marginHorizontal:15,
    },
    tagCont:{
      width:'100%',
      flexDirection:'row',
      flexWrap:'wrap',
      justifyContent:'flex-start',
      alignItems:'flex-start',
      marginVertical:10,
    },
    tag:{
      paddingHorizontal:15,
      height:30,
      backgroundColor:'#f0f0f0',
      borderRadius:50,
      justifyContent:'center',
      alignItems:'center',
      marginVertical:10,
      marginLeft:10,
      borderWidth:1,
      borderColor:'lightgrey'
    },
    tagtext:{
      fontFamily:'Poppins',
      fontSize:11,
    },
})


export default SearchStack;