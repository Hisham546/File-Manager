
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
const { deviceHeight, deviceWidth } = deviceProps
const styles = StyleSheet.create({

    tabBarIconStyle: {
        marginTop: 1

    },
    containerStyle: {
        flex: 1,


    },
    tabBarLabelStyle: {
        // fontFamily: fontFamily.P_REGULAR,
        // fontSize: fontSize.small,

        // color:colors.LIGHT_GOLDEN_YELLOW
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
        width: scale(60),
        borderRadius: 10
    },
    contentView: {

    },
    imageView: {
        flexDirection:'row',
        width: deviceProps.deviceWidth,
        height: verticalScale(50)
    },
    topView: {
        width: deviceProps.deviceWidth,
        height: verticalScale(80),

    }

})

export default styles;