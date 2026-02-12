




import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Text, View, ToastAndroid, TouchableOpacity } from 'react-native';
import HomeScreen from '../../presentation/home';
import MyFiles from '../../presentation/myFiles';
import styles from './styles';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

export default function BottomTabs({ }) {




  return (
    <Tab.Navigator initialRouteName="Home" backBehavior="initialRoute"
      screenOptions={{

        tabBarShowLabel: true,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarIconStyle: styles.tabBarIconStyle,
        tabBarStyle: styles.tabContainerStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen}

        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              {focused && <View style={styles.activeLine} />}
              <MaterialIcon name={focused ? "home" : "home-outline"} size={23} color={focused ? 'gray' : 'black'} />
              {/* <Icon

                iconFamily={'MaterialCommunityIcons'}
                size={23}
                style={{ color: focused ? '#FFFE96' : '#D2F6E3' }}
                name={focused ? 'home-minus-outline' : 'home-minus-outline'}
              /> */}

            </View>
          ),
          tabBarLabel: ({ focused }) => focused ? <Text style={styles.tabBarLabelStyle}>Home</Text> : null,
        }} />







      <Tab.Screen name="MyFiles" component={MyFiles}

        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              {focused && <View style={styles.activeLine} />}
              <MaterialIcon name={focused ? "folder-outline" : "folder"} size={23} color={focused ? 'gray' : 'black'} />
              {/* <Icon

        iconFamily={'MaterialCommunityIcons'}
        size={23}
        style={{ color: focused ? '#FFFE96' : '#D2F6E3' }}
        name={focused ? 'home-minus-outline' : 'home-minus-outline'}
      /> */}

            </View>
          ),
          tabBarLabel: ({ focused }) => focused ? <Text style={styles.tabBarLabelStyle}>MyFiles</Text> : null,
        }} />

    </Tab.Navigator>
  );
}