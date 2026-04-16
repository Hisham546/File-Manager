import RNFS from "react-native-fs";

export const getFiles = async () => {
  try {
    const result = await RNFS.readDir(RNFS.ExternalStorageDirectoryPath);
    return result;
  } catch (error) {
    throw error;
  }
};