import React from 'react';
import { Text, View } from 'react-native'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';

export default function Conditions() {
  return (
    <View style={styles.container}>
      <View style={styles.condition}>
        <Feather 
          name='wind'
          size={23}
          color='#1ed6ff'
        />
        <Text>km/h</Text>
      </View>

      <View style={styles.condition}>
        <Feather 
          name='sunrise'
          size={23}
          color='#1ed6ff'
        />
        <Text>5:22 am</Text>
      </View>

      <View style={styles.condition}>
        <Feather 
          name='sunset'
          size={23}
          color='#1ed6ff'
        />
        <Text>6:00 pm</Text>
      </View>

      <View style={styles.condition}>
        <Feather 
          name='droplet'
          size={23}
          color='#1ed6ff'
        />
        <Text>65</Text>
      </View>

    </View>
  );
}