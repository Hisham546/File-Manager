import { useState, useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { PermissionsAndroid, Platform, FlatList } from 'react-native';
import styles from "./styles";
import RNFS from 'react-native-fs';

import RenderData from "./renderData";
import { requestStoragePermission } from "../../utilities/helper";
import { useFiles } from "../../features/files/hooks/useFiles";
import {
    LoaderKitView,
} from 'react-native-loader-kit';


export default function MyFiles({ navigation }) {
    const { files, loading, error } = useFiles()



    return (

        <View style={styles.containerStyle}>

            {/* <Text>My files</Text>
            <View>
                <FlatList
                    data={files}
                    keyExtractor={(item) => item?.path}
                    renderItem={({ item }) => {

                        return <RenderData item={item} navigation={navigation} />
                    }}
                />
            </View> */}
            <LoaderKitView
                style={{ width: 50, height: 50 }}
                name={'BallPulse'}
                animationSpeedMultiplier={1.0} // speed up/slow down animation, default: 1.0, larger is faster
                color={'red'} // Optional: color can be: 'red', 'green',... or '#ddd', '#ffffff',...
            />
        </View>
    )

}

