import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderStyleInterpolators, TransitionSpecs } from '@react-navigation/stack';
import React from 'react';
import { Explore } from '..';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTab from "../../Common/BottomTab";
import { SessionDetail, Profile, CreateSession } from "..";
const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator
            tabBar={({ navigation }) => <BottomTab navigation={navigation} />}
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Explore">
            <Tab.Screen name="Explore" component={Explore} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}


const Stack = createStackNavigator();

const MyTransition = {
    gestureDirection: 'vertical',
    transitionSpec: {
        open: TransitionSpecs.TransitionIOSSpec,
        close: TransitionSpecs.TransitionIOSSpec,
    },
    headerStyleInterpolator: HeaderStyleInterpolators.forFade,
    cardStyleInterpolator: ({ current, next, layouts }) => {
        return {
            cardStyle: {
                transform: [
                    {
                        translateX: current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [layouts.screen.width, 0],
                        }),
                    },
                ],
            },
            overlayStyle: {
                opacity: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0.5],
                }),
            },
        };
    },
};

const App = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MyTabs" headerMode={'none'}>
                {/* <Stack.Screen name="Explore" component={Explore} options={MyTransition} /> */}
                <Stack.Screen name="MyTabs" component={MyTabs} />
                <Stack.Screen name="SessionDetail" component={SessionDetail} />
                <Stack.Screen name="CreateSession" component={CreateSession} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
