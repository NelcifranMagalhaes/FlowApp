import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './pages/Main';
import Project from './pages/Project';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Main}
          options={{
            title: 'AppSecFlowApp',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#DFB42B',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Details"
          component={Project}
          options={{
            title: 'Detalhes da Análise',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#DFB42B',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
