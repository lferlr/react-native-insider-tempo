import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { condition } from '../../utils/condition';

import styles from './styles';

export default function Forecast({ data }) {
  let icon = condition(data.condition)

  return(
    <View style={styles.container}>
      
      <Text style={styles.date}>{data.date}</Text>
      
      <Ionicons name={icon.name} size={25} color={icon.color} /> 
      
      <View style={styles.temp}>
        <Text>{data.min}°</Text>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{data.max}°</Text>
      </View>

    </View>
  )
}