
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

    tabBarIconStyle: {
        marginTop: 1
    },
    containerStyle: {
        flex: 1,
    },
    tabBarLabelStyle: {
    },
    iconContainer: {
        alignItems: 'center',
    },
    activeLine: {
        position: 'absolute',
        top: -5,
        width: '50%',
        height: 2,
        backgroundColor: '#626262',
    },
    dataView: {
        width: deviceWidth,
        height: deviceHeight * 0.50
    },
    folderName: {
        color: 'black'
    },
    image: {
        height: scale(40),
        width: scale(50),
        borderRadius: 8
    },
    contentView: {
        flex: 1
    },
    imageView: {
        flexDirection: 'row',
        width: deviceProps.deviceWidth,
        height: verticalScale(50),
        gap: scale(6),
        paddingRight: scale(15)
    },
    textContainer: {
        flex: 1,
        marginHorizontal: 10,
    },
    topView: {
        width: deviceProps.deviceWidth,
        height: verticalScale(80),
    },
    fileTextStyle: {
        fontFamily: FONTS.medium
    },
    flatlist: {
        flexGrow: 1
    },
    emptyText: {
        fontFamily: FONTS.regular
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },


})

export default styles;