import { FlatList, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{ useEffect, useState } from 'react';

import { items } from '../data/data';

const Home = () => {
    const [search,setSearch]=useState(false)
    const [filteredDataSource, setFilteredDataSource] = useState(items);
    const [masterDataSource, setMasterDataSource] = useState(items);
    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
          // Inserted text is not blank
          // Filter the masterDataSource
          // Update FilteredDataSource
          const newData = masterDataSource.filter(
            function (item) {
              const itemData = item.name
                ? item.name.toUpperCase()
                : ''.toUpperCase();
              const textData = text.toUpperCase();
              return itemData.indexOf(textData) > -1;
          });
          console.log(newData)
          setFilteredDataSource(newData);
          setSearch(text);
        } else {
          // Inserted text is blank
          // Update FilteredDataSource with masterDataSource
          setFilteredDataSource(masterDataSource);
          setSearch(text);
        }
      };
    return(<SafeAreaView style={{backgroundColor:'#000000'}}>
        {!search ?<View style={{flexDirection:'row',marginTop:20,justifyContent:'space-between',width:'90%',alignItems:'center'}}>
            <Image style={{width:30,height:30,marginLeft:15}} source={require('../images/Back.png')}/>
            <Text style={{color:'#ffffff',fontSize:25}}>Romantic Comedy</Text>
            <TouchableOpacity onPress={() => setSearch(true)}>
            <Image style={{width:30,height:30}} source={require('../images/search.png')}/>
            </TouchableOpacity>
        </View>
        :<View style={{flexDirection:'row',marginTop:20,justifyContent:'space-between',width:'95%'}}>
            <TextInput    onChangeText={(text) => searchFilterFunction(text)} placeholder='Enter text' placeholderTextColor="#ffffff" style={{paddingLeft:15,marginLeft:5,width:'85%',borderWidth:1,borderColor:'#ffffff',color:'#ffffff'}}/>
        <TouchableOpacity onPress={() => setSearch(false)}>
            <Image style={{width:40,height:40,tintColor:'#ffffff',marginTop:5}} source={require('../images/close.png')}/>
            </TouchableOpacity>
        </View>}

        <View style={{margin:30,height:1000}}>
        <FlatList
        data={filteredDataSource}
        numColumns={3}
        extraData={filteredDataSource}
        keyExtractor={(item, index) => String(index)}
        renderItem={(item) =>  
        <View style={{justifyContent:'space-between',flex:1,marginBottom:60,marginTop:10}}>
        <Image style={{width:100,height:150}} source={item.item.posterimage}/>
        <Text style={{width:100,color:'#ffffff',marginTop:10}}>{item.item.name}</Text></View>}   
/>
</View></SafeAreaView>)
}




export default Home;