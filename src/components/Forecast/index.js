import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

export default function Forecast({ data }) {
  return(
    <View style={styles.container}>
      
      <Text style={styles.date}>{data.date}</Text>
      
      <Ionicons name="rainy-outline" size={25} color="#1ec9ff"/> 
      
      <View style={styles.temp}>
        <Text>{data.min}°</Text>
        <Text style={{fontSize: 18, FontWeight: 'bold'}}>{data.max}°</Text>
      </View>

    </View>
  )
}