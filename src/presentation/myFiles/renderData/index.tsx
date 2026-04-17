
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { Icon } from "../../../utilities/Icons";


export default function RenderData({ item, navigation }) {

    const openFolder = (item: { path: any; name: any; }) => {
        navigation.navigate('InsideFolder', {
            path: item?.path,
            name: item?.name
        })
    }

    return (
        <TouchableOpacity
            style={styles.folderParent}
            onPress={() => {
                openFolder(item)
            }}>
            <Icon
                iconFamily={'Entypo'}
                size={30}
                style={styles.folderIcon}
                name={'folder'}
            />
            <Text style={styles.folderName}>{item?.name}</Text>
        </TouchableOpacity>
    )
}