// src/components/Footer.js

import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footercontent}>
    <View style={styles.footer}>
      <View style={styles.footerSection}>
        <View style={styles.verticalLine} /> {/* Linha vertical */}
        <Text style={styles.footerText}>SBCPA</Text>
      </View>
      <Text style={styles.footerText}>Sai/Sul Área 04 Lote 09 - Via de Ligação ERS/EI</Text>
      <Text style={styles.footerText}>Cep.: 70.602-900 - Brasil - Brasília/DF</Text>
      <Text style={styles.footerText}>
        
        <Text style={styles.link} onPress={() => Linking.openURL('mailto:sbcpa.secretaria@gmail.com')}> sbcpa.secretaria@gmail.com</Text>
      </Text>

      <View style={styles.footerSection}>
        <View style={styles.verticalLine} /> {/* Linha vertical */}
        <Text style={styles.footerText}>NAS REDES SOCIAIS:</Text>
      </View>
      <View style={styles.socialLinks}>
        <Text style={styles.link} onPress={() => Linking.openURL('https://www.facebook.com')}>Facebook</Text>
        <Text style={styles.link} onPress={() => Linking.openURL('https://www.instagram.com')}>Instagram</Text>
        <Text style={styles.link} onPress={() => Linking.openURL('https://www.youtube.com')}>YouTube</Text>
      </View>

      <Text style={styles.footerText}>(81) 9 9988-1437</Text>
      
      <View style={styles.footerSection}>
        <View style={styles.verticalLine} /> 
        <Text style={styles.footerText}>Links Populares:</Text>
      </View>
      <View style={styles.popularLinks}>
        <Text style={styles.link}>Cães</Text>
        <Text style={styles.link}>Exposições</Text>
        <Text style={styles.link}>Laudos Radiológicos</Text>
        <Text style={styles.link}>Próximos Eventos</Text>
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
    footercontent: {
        height: 80,
    },
  footer: {
    backgroundColor: '#363839',
    padding: 20,
    alignItems: 'flex-start',
  },
  footerText: {
    color: '#fff',
    marginVertical: 5,
    textAlign: 'left',
  },
  footerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  verticalLine: {
    width: 1,
    height: 30, 
    backgroundColor: '#7AB730', 
    marginRight: 10, 
  },
  link: {
    color: '#fff',
    textDecorationLine: 'underline',
  },
  socialLinks: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 5,
  },
  popularLinks: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 10,
  },
});

export default Footer;
