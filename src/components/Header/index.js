import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

export default function Header() {
  return(
    <LinearGradient
      style={styles.header}
      colors={['#1ed6ff', '#97c1ff']}
    >
      <Text style={styles.date}>16/03/2021</Text>
      <Text style={styles.city}>Brasília</Text>

      <Ionicons 
        name="cloud"
        color="#FFF"
        size={150}
      />

      <Text style={styles.temp}>30°</Text>
    </LinearGradient>
  );
}