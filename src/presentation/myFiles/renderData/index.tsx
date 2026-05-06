
import { View, TouchableOpacity, Text, Image } from "react-native";
import styles from "./styles";
import { Icon } from "../../../utilities/Icons";
import ImageViewerModal from "../../../shared/components/imageViewer/imageViewer";
import { useState } from "react";
import { FileItem } from "../../../features/files/types";


export default function RenderData({ item,onPress, navigation }) {








    const isImage = (name: string) =>
        /\.(jpg|jpeg|png)$/i.test(name);

  
    const renderFilePreview = () => {
        if (item.type === 'folder') {
            return <View style={styles.folderIconWrapper}>

                <Icon
                    iconFamily={'Entypo'}
                    size={30}
                    style={styles.folderIcon}
                    name={'folder'}
                />
            </View>
        }
        if (isImage(item.name)) {
            return (
                <Image
                    source={{ uri: `file://${item.path}` }}
                    style={styles.image}
                    resizeMode="cover"
                />
            );
        }
        return (
            <Icon
                iconFamily="Entypo"
                size={30}
                name="text-document"
            />
        );
    };
    return (
        <>
            <TouchableOpacity
                style={styles.folderParent}
                onPress={() => onPress(item)}
                // onPress={() => {
                //     openFolder(item)
                // }}
                >
                {renderFilePreview()}
                <Text style={styles.folderName}>{item?.name}</Text>
            </TouchableOpacity>

        </>
    )
}

