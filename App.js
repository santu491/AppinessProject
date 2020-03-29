import React, { Component } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import commonStyles from './components/CommonStyles'
import LoginScreen from './components/LoginScreen'
import DashBoard from './components/DashBoard'
import { Provider } from 'react-redux'
import store from './Redux/Store'

const Stack = createStackNavigator()

export default function App(props) {
  return (
    <View style={commonStyles.container}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              initialRouteName="LoginScreen"
              name="LoginScreen"
              component={LoginScreen}
              options={{

                headerShown: false
              }}


            />
            <Stack.Screen name="DashBoard" component={DashBoard}
              options={{
                headerShown: false
              }}


            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </View>
  );
}



