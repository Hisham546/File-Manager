import { Dimensions, Platform, StatusBar } from 'react-native';

export default {
  deviceWidth: Dimensions.get('window').width,
  deviceHeight: Dimensions.get('window').height,
  // statusBarHeight: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
  // screenHeight:
  //   Dimensions.get('window').height -
  //   (Platform.OS === 'ios' ? 20 : StatusBar.currentHeight),
};
