import { useState, useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { PermissionsAndroid, Platform, FlatList } from 'react-native';
import styles from "./styles";
import RNFS from 'react-native-fs';

import RenderData from "./renderData";



export default function MyFiles({ navigation }) {


    const [files, setFiles] = useState([])
    // Function to request storage permission
    async function requestStoragePermission() {
        if (Platform.OS !== 'android') return true;

        try {
            if (Platform.Version >= 33) {
                // Android 13+
                const granted = await PermissionsAndroid.requestMultiple([
                    PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
                    PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
                ]);

                return (
                    granted['android.permission.READ_MEDIA_IMAGES'] === 'granted' &&
                    granted['android.permission.READ_MEDIA_VIDEO'] === 'granted'
                );
            } else {
                // Android 12 and below
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
                );

                return granted === PermissionsAndroid.RESULTS.GRANTED;
            }
        } catch (err) {
            console.warn(err);
            return false;
        }
    }




    useEffect(() => {
        const init = async () => {
            const hasPermission = await requestStoragePermission();
console.log(hasPermission,'...has')
            if (hasPermission) {
                loadFiles();
            } else {
                console.log('Permission denied');
            }
        };

        init();
    }, []);


    const loadFiles = () => {
        RNFS.readDir(RNFS.DocumentDirectoryPath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
        RNFS.readDir(RNFS.ExternalStorageDirectoryPath)
            .then((result) => {
                //  console.log('GOT RESULT', result);
                setFiles(result)
                return Promise.all([RNFS.stat(result[0].path), result[0].path]);
            })
            .then((statResult) => {
                if (statResult[0].isFile()) {
                    return RNFS.readFile(statResult[1], 'utf8');
                }
                return 'no file';
            })
            .then((contents) => {
                console.log(contents);
            })
            .catch((err) => {
                console.log(err.message, err.code);
            });

    }
    useEffect(() => {

    }, [])

    return (

        <View style={styles.containerStyle}>

            <Text>My files</Text>
            <View>
                <FlatList
                    data={files}
                    keyExtractor={(item) => item?.path}
                    renderItem={({ item }) => {

                        return <RenderData item={item} navigation={navigation} />
                    }}
                />
            </View>
        </View>
    )

}

