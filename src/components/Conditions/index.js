import React from 'react';
import { Text, View } from 'react-native'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';

export default function Conditions({ weather }) {
  return (
    <View style={styles.container}>
      <View style={styles.condition}>
        <Feather 
          name='wind'
          size={23}
          color='#1ed6ff'
        />
        <Text>{weather.results.wind_speedy}</Text>
      </View>

      <View style={styles.condition}>
        <Feather 
          name='sunrise'
          size={23}
          color='#1ed6ff'
        />
        <Text>{weather.results.sunrise}</Text>
      </View>

      <View style={styles.condition}>
        <Feather 
          name='sunset'
          size={23}
          color='#1ed6ff'
        />
        <Text>{weather.results.sunset}</Text>
      </View>

      <View style={styles.condition}>
        <Feather 
          name='droplet'
          size={23}
          color='#1ed6ff'
        />
        <Text>{weather.results.humidity}</Text>
      </View>

    </View>
  );
}