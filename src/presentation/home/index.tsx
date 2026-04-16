import { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, FlatList } from "react-native";
import styles from "./styles";
import { PermissionsAndroid, Platform } from 'react-native';
import RNFS from 'react-native-fs';




export default function HomeScreen() {









  const dummyItem = ({item}) => {
    return (
      <View style={styles.dummyListParent}>
        <Text style={styles.itemTitle}>{item.title}</Text>

      </View>
    )
  }




  return (

    <View style={styles.containerStyle}>

      <Text>homescreen</Text>
      <View style={{flex:1}}>
       
      </View>
    </View>
  )

}


