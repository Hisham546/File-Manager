
import { StyleSheet } from "react-native";
import deviceProps from "../../utilities/deviceProps";
const { deviceHeight, deviceWidth } = deviceProps
const styles = StyleSheet.create({

    tabBarIconStyle: {
        marginTop: 1

    },
    tabContainerStyle: {

        // backgroundColor: colors.DARK_SLATE_GREEN,


        minHeight: 2,
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

})

export default styles;