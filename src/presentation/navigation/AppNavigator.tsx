// src/navigation/AppNavigator.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet, SafeAreaView } from 'react-native'; 
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import Header from '../components/header'; // Certifique-se de que o nome está correto
import Footer from '../components/Footer'; 

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Header navigation={undefined} /> {/* Header universal */}
        <View style={styles.content}>
          <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </View>
        <Footer /> {/* Rodapé universal */}
      </SafeAreaView>
    </NavigationContainer>
  );
};

// Estilos para garantir que o footer fique na parte inferior
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1, // O conteúdo deve ocupar o espaço restante
    justifyContent: 'flex-start', // Certifique-se de que o conteúdo começa no topo
  },
});

export default AppNavigator;
