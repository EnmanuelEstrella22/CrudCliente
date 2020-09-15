import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Home from './src/components/views/Home';
import NewCliente from './src/components/views/NewCliente';
import DetallesCliente from './src/components/views/DetallesCliente';
import BarraSuperior from './src/components/UI/Barra';

import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

// Definir temas
const theme = {
  ...DefaultTheme,
  colors: {
    //modificando el color primario que trae por defecto
    ...DefaultTheme.colors,
    primary: '#1774f2',
    accent: '#0655BF',
  },
};

const App = () => {
  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: theme.colors.primary,
              },
              headerTintColor: theme.colors.surface,
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
                textTransform: 'uppercase',
              },
            }}>
            <Stack.Screen
              name="Home"
              component={Home}
              options={({navigation, route}) => ({
                // title = 'Inicio',
                headerTitle: 'INICIO',
                headerTitleAlign: 'center',
                headerLeft: props => (
                  <BarraSuperior
                    {...props}
                    navigation={navigation}
                    route={route}
                  />
                ),
              })}
            />
            <Stack.Screen
              name="NewCliente"
              component={NewCliente}
              options={{
                title: 'Nuevo Cliente',
              }}
            />
            <Stack.Screen
              name="DetallesCliente"
              component={DetallesCliente}
              options={{
                title: 'Detalles Cliente',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
