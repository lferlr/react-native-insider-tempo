import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';

import styles from './styles';

import { Feather } from '@expo/vector-icons';

export default function Search(){
  const [input, setInput] = useState('');

  return(
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Feather 
          name="chevron-left"
          size={32}
          color="#000"
        />
        <Text style={{ fontSize: 22 }}>Voltar</Text>
      </TouchableOpacity>

        <View style={styles.searchBox}>
          <TextInput 
            value={input}
            onChangeText={ (valor) => setInput(valor) }
            placeholder="Busque uma cidade"
            style={styles.input}
          />
          <TouchableOpacity style={styles.icon}>
            <Feather
              name="search"
              size={22}
              color="#FFF"
            />
          </TouchableOpacity>
        </View>

      
    </SafeAreaView>
  );
}