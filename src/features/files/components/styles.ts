
import {
    View,
    Image,
    Text, Button,
    StyleSheet, TouchableOpacity, FlatList,
    TextInput
}
    from "react-native";
import { Dimensions, Platform, StatusBar } from 'react-native';

import deviceProps from "../../../utilities/deviceProps";
import { scale, verticalScale } from "react-native-size-matters";
import { FONTS } from "../../../shared/constants/fonts";
const { deviceHeight, deviceWidth } = deviceProps
const styles = StyleSheet.create({

    image: {
        height: scale(40),
        width: scale(50),
        borderRadius: 8
    },
    imageView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: deviceProps.deviceWidth,
        height: verticalScale(50),
        gap: scale(6),
        paddingHorizontal:  scale(10),
    },
    textContainer: {
        flex: 1,
        marginHorizontal: 10,
    },
    fileTextStyle: {
        fontSize: scale(12),
        lineHeight: scale(16),
        color: '#646766',
        fontFamily: FONTS.medium
    },
    flatlist: {
        paddingLeft: scale(5)
    },
    fileSizeStyles: {
        fontSize: scale(10),
        lineHeight: scale(14),
        color: '#8b8d8c',
        fontFamily: FONTS.regular
    },
    folderIcon: {

    },
    folderIconWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        height: scale(40),
        width: scale(50),
    }

})

export default styles;