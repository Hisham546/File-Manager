import { useState, useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { PermissionsAndroid, Platform, FlatList } from 'react-native';
import styles from "./styles";
import RNFS from 'react-native-fs';

import RenderData from "./renderData";
import { requestStoragePermission } from "../../utilities/helper";
import { useFiles } from "../../features/files/hooks/useFiles";
import { LoaderComponent } from "../../shared/components/loader";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from "../../navigation/types";
import { FileItem } from "../../features/files/types";
import ImageViewerModal from "../../shared/components/imageViewer/imageViewer";
import { getFileAction } from "../../features/files/utils/fileHandlers";

type Props = NativeStackScreenProps<
    RootStackParamList,
    'MyFiles'
>;

export default function MyFiles({ navigation }: Props) {
    const { files, loading, error } = useFiles()


    const [viewerVisible, setViewerVisible] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);




    if (loading) return <LoaderComponent loaderColor={"gray"} LoaderTypeName={"BallRotate"} />


    const sortFiles = (files: FileItem[]) => {

        return [...files].sort((a, b) => {
            // folders first
            if (a.type !== b.type) {
                return a.type === 'folder' ? -1 : 1;
            }

            // then sort by name
            return a.name.localeCompare(b.name);
        });
    };

    const onItemPress = (item: FileItem, index: number) => {
        const action = getFileAction(item);

        if (action === 'folder') {
            navigation.push('InsideFolder', {
                path: item.path,
                name: item.name,
            });
            return;
        }

        if (action === 'image') {
            const imgIndex = imageFiles.findIndex(
                img => img.uri === `file://${item.path}`
            );

            setSelectedIndex(imgIndex);
            setViewerVisible(true);
            return;
        }

        console.log('Unsupported file');
    };

    const imageFiles = files
        ?.filter(file => file.isFile && file.name.match(/\.(jpg|jpeg|png)$/i))
        .map(file => ({
            uri: `file://${file.path}`,
        }));

    return (

        <View style={styles.containerStyle}>
            <Text>My files</Text>
            <View>
                <FlatList
                    data={sortFiles(files)}
                    keyExtractor={(item) => item?.path}
                    renderItem={({ item, index }) => {
                        return <RenderData item={item} navigation={navigation}
                            onPress={() => {
                                onItemPress(item, index)
                            }} />
                    }}
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

