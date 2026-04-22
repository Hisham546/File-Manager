import React from 'react';
import { Modal, View, StyleSheet, TouchableOpacity, Text, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import deviceProps from '../../../utilities/deviceProps';
const { deviceHeight, deviceWidth } = deviceProps
export const ImageViewerModal = ({
    visible,
    images = [],
    initialIndex = 0,
    onClose,
}) => {
    const [currentIndex, setCurrentIndex] = React.useState(initialIndex);
    if (!images.length) return null;
    return (
        <Modal visible={visible} transparent animationType="fade">
            <View style={styles.container}>
                <FlatList
                    data={images}
                    horizontal
                    pagingEnabled
                    keyExtractor={(_, i) => i.toString()}
                    initialScrollIndex={initialIndex}
                    getItemLayout={(_, index) => ({
                        length: deviceWidth,
                        offset: deviceWidth * index,
                        index,
                    })}
                    onMomentumScrollEnd={(e) => {
                        const index = Math.round(
                            e.nativeEvent.contentOffset.x / deviceWidth
                        );
                        setCurrentIndex(index);
                    }}
                    renderItem={({ item }) => (
                        <Image resizeMode='contain' source={{ uri: item.uri }}
                            style={styles.imageStyle} />
                    )}
                />

                <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                    <Text style={styles.closeText}>Close</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

export default ImageViewerModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    closeButton: {
        position: 'absolute',
        top: 50,
        right: 20,
        padding: 10,
    },
    closeText: {
        color: 'white',
        fontSize: 16,
    },
    imageStyle: {
        width: deviceWidth,
        height: deviceHeight
    }
});
