// src/screens/DetailsScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/header'; // Importa o Header

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Tela de Detalhes" /> {/* Adiciona o Header com o título */}
      <Text style={styles.title}>Aqui estão os detalhes! teste</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
});

export default DetailsScreen;
