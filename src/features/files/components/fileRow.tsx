import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import styles from './styles';
import { FileItem } from '../types';
import { formatFileSize } from '../../../utilities/helper';
import { Icon } from '../../../utilities/Icons';

type Props = {
    item: FileItem;
    onPress: () => void;
};

const FileRow = ({ item, onPress }: Props) => {



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
        <TouchableOpacity onPress={onPress} style={styles.imageView}>

            {renderFilePreview()}

            <View style={styles.textContainer}>
                <Text numberOfLines={1} style={styles.fileTextStyle}>
                    {item.name}
                </Text>

              {item.type === 'file' && (
                    <Text style={styles.fileSizeStyles}>{formatFileSize(item.size)}</Text>
                )}
            </View>
            <Icon
                iconFamily="Entypo"
                size={15}
                name="dots-three-vertical"
            />

        </TouchableOpacity>
    );
};

export default React.memo(FileRow);