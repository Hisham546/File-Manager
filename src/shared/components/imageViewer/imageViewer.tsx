import React from 'react';
import { Modal, View, StyleSheet, TouchableOpacity, Text, FlatList, Image } from 'react-native';
import deviceProps from '../../../utilities/deviceProps';
const { deviceHeight, deviceWidth } = deviceProps
export const ImageViewerModal = ({
    visible,
    images = [],
    initialIndex = 0,
    onClose,
}) => {
    return (
        <Modal visible={visible} transparent animationType="fade">
            <View style={styles.container}>
                {/* <Gallery
                    data={images}
                    initialIndex={initialIndex}
                    style={{ flex: 1 }}
                /> */}
                <FlatList
                    data={images}
                    horizontal
                    pagingEnabled
                    keyExtractor={(_, i) => i.toString()}
                    renderItem={({ item }) => (
                        <Image source={{ uri: item.uri }} style={{ width: deviceWidth, height: deviceHeight }} />
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
});
