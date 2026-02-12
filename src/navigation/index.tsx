import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './bottomTabs';

import InsideFolder from '../presentation/folders/insideFolder';
const Stack = createStackNavigator();

const MainNavigation = () => {

    return (
        <NavigationContainer>

            <Stack.Navigator>
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="BottomTabs"
                    component={BottomTabs} />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="InsideFolder"
                    component={InsideFolder} />




            </Stack.Navigator>
        </NavigationContainer>
    )

}
export default MainNavigation;