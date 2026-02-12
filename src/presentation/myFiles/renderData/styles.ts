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
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

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
    folderIcon: {
        color: '#09637E',
        paddingLeft:scale(5)
    },
    folderParent: {
        flexDirection: 'row',
        height: verticalScale(30),
        gap:scale(20)
    }

})

export default styles;