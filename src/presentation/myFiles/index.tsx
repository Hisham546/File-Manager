import { useState, useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { PermissionsAndroid, Platform, FlatList } from 'react-native';
import styles from "./styles";
import RNFS from 'react-native-fs';

import RenderData from "./renderData";
import { requestStoragePermission } from "../../utilities/helper";
import { useFiles } from "../../features/files/hooks/useFiles";
import { LoaderComponent } from "../../shared/components/loader";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from "../../navigation/types";

type Props = NativeStackScreenProps<
  RootStackParamList,
  'MyFiles'
>;

export default function MyFiles({ navigation }:Props) {
    const { files, loading, error } = useFiles()

    if (loading) return <LoaderComponent loaderColor={"gray"} LoaderTypeName={"BallRotate"} />

    return (

        <View style={styles.containerStyle}>
            <Text>My files</Text>
            <View>
                <FlatList
                    data={files}
                    keyExtractor={(item) => item?.path}
                    renderItem={({ item }) => {
                        return <RenderData item={item} navigation={navigation} />
                    }}
                />
            </View>

        </View>
    )

}

