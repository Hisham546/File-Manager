import { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, FlatList, Image } from "react-native";
import styles from "./styles";
import { PermissionsAndroid, Platform } from 'react-native';
import RNFS from 'react-native-fs';
import { formatFileSize } from "../../../utilities/helper";

import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from "../../../navigation/types";
import { FileItem } from "../../../features/files/types";
import ImageViewerModal from "../../../shared/components/imageViewer/imageViewer";

type Props = NativeStackScreenProps<
    RootStackParamList,
    'InsideFolder'
>;


export default function InsideFolder({ route }: Props) {

    const { name, path } = route.params

    const [files, setFiles] = useState<FileItem[]>([])
    const [viewerVisible, setViewerVisible] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);



    useEffect(() => {
        const getFolderContents = async () => {
            try {
                const contents = await RNFS.readDir(path);

                const formatted: FileItem[] = contents.map(file => ({
                    name: file?.name,
                    path: file.path,
                    isFile: file.isFile(),
                    type: file.isFile() ? 'file' : 'folder',
                    isDirectory: file.isDirectory(),
                    size: file.size,
                    modified: file?.mtime,
                }));
                setFiles(formatted);

            } catch (error) {
                console.error('Error reading directory:', error);
            }
        };

        if (path) {
            getFolderContents();
        }
    }, [path]);


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