// src/screens/HomeScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao SBCPA!</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Details')}
        >
          <Text style={styles.buttonText}>Acesse SBCPA</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('ProfileScreen')}
        >
          <Text style={styles.buttonText}>Perfil</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('SettingsScreen')}
        >
          <Text style={styles.buttonText}>Configurações</Text>
        </TouchableOpacity>


        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('SettingsScreen')}
        >
          <Text style={styles.buttonText}>Configurações</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#363839',
  },
  image: {
    width: '80%',
    height: 200,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '90%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#7AB730',
    borderRadius: 5,
    padding: 15,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
