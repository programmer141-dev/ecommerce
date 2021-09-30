import React,{useState} from 'react'
import {StyleSheet, TouchableOpacity, View, Text, FlatList, Image} from 'react-native'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function WishListItems(){
  const [data, setData] = useState([]);
  
  
  fetch('https://jsonplaceholder.typicode.com/photos?_limit=3')
  .then(res => res.json())
  .then((data) => setData(data))
  
  return(
    <FlatList
      data={data}
      renderItem={({item, index}) => (
        <TouchableOpacity style={styles.card}>
          <Image source={{
            uri: 'https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=3',
            }} style={styles.productImage} />
          <View style={styles.info}>
             <Text style={styles.productname}>{item.title}</Text> 
             <Text style={styles.price}>Price : 200/-</Text>
         </View>
          <ProductMenu />
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id.toString()}
    />
    )
}




const ProductMenu = () => (
  <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    <Menu>
      <MenuTrigger>
          <MaterialCommunityIcons name="dots-vertical" color={'black'} size={22} />
      </MenuTrigger>
      <MenuOptions customStyles={{optionWrapper:styles.menubtn}}>
        <MenuOption>
          <View>
            <Text style={styles.menuText}>Add to Cart</Text>
          </View>
        </MenuOption>
        <MenuOption>
          <View>
            <Text style={styles.menuText}>Remove</Text>
          </View>
        </MenuOption>
      </MenuOptions>
    </Menu>
  </View>
);







const styles = StyleSheet.create({
  card:{
    width:350,
    height:90,
    backgroundColor:'white',
    borderRadius:20,
    marginVertical:10,
    overflow:'hidden',
    flexDirection:'row',
    alignItems:'center'
  },
  productname:{
    fontFamily:'Poppins',
    fontSize:13,
  },
  productImage:{
    width:60,
    height:70,
    marginHorizontal:15,
    borderRadius:5
  },
  price:{
    fontFamily:'Poppins',
    fontSize:10,
    paddingHorizontal:0,
    color:'grey',
  },
  info:{
    flexShrink: 1,
    width:200,
    justifyContent:'flex-start',
  },
  menubtn:{
    height:40,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f0f0f0',
    borderBottomWidth:1,
    borderBottomColor:'white'
  },
  menuText:{
    fontFamily:'Poppins',
    fontSize:12
  }
})