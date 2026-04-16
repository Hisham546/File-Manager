import { PermissionsAndroid, Platform } from "react-native";

export const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 B';

    const kb = bytes / 1024;
    const mb = kb / 1024;

    if (mb >= 1) {
        return `${mb.toFixed(2)} MB`;
    } else {
        return `${kb.toFixed(2)} KB`;
    }
};

// Function to request storage permission
export async function requestStoragePermission() {
    if (Platform.OS !== 'android') return true;

    try {
        if (Platform.Version >= 33) {
            // Android 13+
            const granted = await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
                PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
            ]);

            return (
                granted['android.permission.READ_MEDIA_IMAGES'] === 'granted' &&
                granted['android.permission.READ_MEDIA_VIDEO'] === 'granted'
            );
        } else {
            // Android 12 and below
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
            );

            return granted === PermissionsAndroid.RESULTS.GRANTED;
        }
    } catch (err) {
        console.warn(err);
        return false;
    }
}
