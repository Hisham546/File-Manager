import { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, FlatList, Image } from "react-native";
import styles from "./styles";
import { PermissionsAndroid, Platform } from 'react-native';
import RNFS from 'react-native-fs';
import { formatFileSize } from "../../../utilities/helper";
import ImageViewerModal from "../../../components/imageViewer";




export default function InsideFolder({ route }) {


    const item = route.params.item

    const [files, setFiles] = useState([])
    const [viewerVisible, setViewerVisible] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    console.log(item.path, '...path')

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
                setFiles(formatted);

            } catch (error) {
                console.error('Error reading directory:', error);
            }
        };

        if (item?.path) {
            getFolderContents();
        }
    }, [item?.path]);


    const imageFiles = files
        ?.filter(file => file.isFile && file.name.match(/\.(jpg|jpeg|png)$/i))
        .map(file => ({
            uri: `file://${file.path}`,
        }));

    return (

        <View style={styles.containerStyle}>
            <View style={styles.topView}></View>

            <View style={styles.contentView}>
                <FlatList
                    data={files}
                    keyExtractor={(item) => item.path}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            onPress={() => {
                                setSelectedIndex(index);
                                setViewerVisible(true);
                            }}
                            style={styles.imageView}>
                            {item.isFile && (
                                <Image
                                    source={{ uri: `file://${item.path}` }}
                                    style={styles.image}
                                    resizeMode="contain"
                                />
                            )}

                            <View>
                                <Text>{item.name}</Text>
                                {item.isFile && (
                                    <Text>{formatFileSize(item.size)}</Text>
                                )}
                            </View>
                        </TouchableOpacity>
                    )}
                    ListEmptyComponent={
                        <Text style={{ textAlign: 'center', marginTop: 20 }}>
                            No files found
                        </Text>
                    }
                />
            </View>
            <ImageViewerModal
                visible={viewerVisible}
                images={imageFiles}
                initialIndex={selectedIndex}
                onClose={() => setViewerVisible(false)}
            />

        </View>
    )

}