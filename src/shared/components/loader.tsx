import { StyleSheet, View } from 'react-native';
import {
    LoaderKitView,
} from 'react-native-loader-kit';


export const LoaderComponent = (props: { loaderColor: string; LoaderTypeName: string; }) => {

    const { loaderColor, LoaderTypeName } = props

    return (
        <View style={styles.container} >
            <LoaderKitView
                style={{ width: 50, height: 50 }}
                name={LoaderTypeName}
                animationSpeedMultiplier={1.0} // speed up/slow down animation, default: 1.0, larger is faster
                color={loaderColor} // Optional: color can be: 'red', 'green',... or '#ddd', '#ffffff',...
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
       // backgroundColor: 'black',
    },
});
