import { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, FlatList } from "react-native";
import styles from "./styles";
import { PermissionsAndroid, Platform } from 'react-native';
import RNFS from 'react-native-fs';




export default function InsideFolder({ route }) {


    const item = route.params.item

    const [files, setFiles] = useState({})



console.log(item.path,'...path')

    useEffect(() => {
        const getFolderContents = async () => {
            try {
                const contents = await RNFS.readDir(item.path);

                const formatted = contents.map(file => ({
                    name: file.name,
                    path: file.path,
                    isFile: file.isFile(),
                    isDirectory: file.isDirectory(),
                    size: file.size,
                    modified: file.mtime,
                }));

                console.log(formatted, '...contents');
               // setFiles(formatted);

            } catch (error) {
                console.error('Error reading directory:', error);
            }
        };

        if (item?.path) {
            getFolderContents();
        }
    }, [item?.path]);

    //     const getFiles = async (folderPath) => {
    //         try {
    //             const items = await RNFS.readDir(folderPath);

    //             const formatted = items.map(item => ({
    //                 name: item.name,
    //                 path: item.path,
    //                 isFile: item.isFile(),
    //                 isDirectory: item.isDirectory(),
    //                 size: item.size,
    //                 modified: item.mtime,
    //             }));
    // console.log(formatted,'...formatted')
    //             setFiles(formatted);
    //         } catch (error) {
    //             console.log('Error reading folder:', error);
    //         }
    //     };

    //     useEffect(() => {
    //         getFiles(item.path);
    //     }, []);




    return (

        <View style={styles.containerStyle}>

            <Text>homescreen</Text>
            <View>

            </View>
        </View>
    )

}