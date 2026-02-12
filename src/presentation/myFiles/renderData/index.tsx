
import { useState, useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { PermissionsAndroid, Platform, FlatList } from 'react-native';


import styles from "./styles";
import { Icon } from "../../../utilities/Icons";





export default function RenderData({ item, navigation }) {
    const openFolder = (item) => {

        navigation.navigate('InsideFolder', { item })
    }

    return (
        <TouchableOpacity
            style={styles.folderParent}
            onPress={() => {
                openFolder(item)
            }}>
            {/* <Text style={styles.folderName}>{item.isDirectory() ? `📁 ${item.name}` : `📄 ${item.name}`}</Text> */}
             <Icon
                iconFamily={'Entypo'}
                size={30}
                style={styles.folderIcon}
                name={'folder'}
            />
            <Text style={styles.folderName}>{item?.name}</Text>
           
        </TouchableOpacity>
    )



}