import React,{useState} from 'react'
import {StyleSheet, TouchableOpacity, View, Text, FlatList, Image} from 'react-native'

export default function CartItems(){
  const [data, setData] = useState([]);
  let [value ,setValue] = useState(1)
  
  fetch('https://jsonplaceholder.typicode.com/photos?_limit=8')
  .then(res => res.json())
  .then((data) => setData(data))
  
  
  const increment = () => {
    value++
    setValue(value)
  }

  const decrement = () => {
    value--
    setValue(value)
  }
  
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
         <View style={styles.addmore}>
           <TouchableOpacity onPress={() => increment()} style={styles.addText}>
            <Text>+</Text>
           </TouchableOpacity>
           <Text>{value}</Text>
           <TouchableOpacity onPress={() => decrement()} style={styles.addText}>
             <Text>-</Text>
           </TouchableOpacity>
         </View>
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id.toString()}
    />
    )
}

const styles = StyleSheet.create({
  card:{
    width:350,
    height:90,
    backgroundColor:'white',
    borderRadius:20,
    marginBottom:20,
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
  addmore:{
    flexDirection:'row',
    width:70,
    height:50,
    justifyContent:'space-around',
    alignItems:'center',
    marginHorizontal:10,
  },
  addText:{
    width:15,
    height:15,
    borderWidth:1,
    borderColor:'black',
    justifyContent:'center',
    alignItems:'center',
  }
})