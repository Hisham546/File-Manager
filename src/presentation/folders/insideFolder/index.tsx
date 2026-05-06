import { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, FlatList, Image } from "react-native";
import styles from "./styles";
import { PermissionsAndroid, Platform } from 'react-native';
import RNFS from 'react-native-fs';
import { formatFileSize, reduceTextLength } from "../../../utilities/helper";

import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from "../../../navigation/types";
import { FileItem } from "../../../features/files/types";
import ImageViewerModal from "../../../shared/components/imageViewer/imageViewer";
import { Icon } from "../../../utilities/Icons";
import FileRow from "../../../features/files/components/fileRow";

type Props = NativeStackScreenProps<
    RootStackParamList,
    'InsideFolder'
>;


export default function InsideFolder({ route, navigation }: Props) {

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


    const renderItem = ({ item, index }: { item: FileItem; index: number }) => {
        return (
            <FileRow
                item={item}
                onPress={() => handleOpen(item, index)}
            />
        );
    };

    const EmptyState = () => (
        <Text style={{ textAlign: 'center', marginTop: 20 }}>
            No files found
        </Text>
    );

    const handleOpen = (item: FileItem, index: number) => {
        if (item.type === 'folder') {
            handleOpenFolder(item);
            return;
        }

        if (item.type === 'file') {
            handleOpenFile(item, index);
            return;
        }
    };
    const handleOpenFolder = (item: FileItem) => {
        navigation.push('InsideFolder', {
            path: item.path,
            name: item.name,
        });
    };
    const handleOpenFile = (item: FileItem, index: number) => {
        const isImage = /\.(jpg|jpeg|png)$/i.test(item.name);

        if (isImage) {
            setSelectedIndex(index);
            setViewerVisible(true);
        } else {
            // optional: handle other file types later
            console.log('Unsupported file type');
        }
    };

    const imageFiles = files
        ?.filter(file => file.isFile && file.name.match(/\.(jpg|jpeg|png)$/i))
        .map(file => ({
            uri: `file://${file.path}`,
        }));

    return (

        <View style={styles.containerStyle}>
            <View style={styles.topView}>
            </View>
            <View style={styles.contentView}>
                <FlatList
                    data={files}
                    keyExtractor={(item) => item.path}
                    renderItem={renderItem}
                    contentContainerStyle={styles.flatlist}
                    showsVerticalScrollIndicator={false}
                    initialNumToRender={10}
                    windowSize={5}
                    removeClippedSubviews
                    ListEmptyComponent={<EmptyState />}
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