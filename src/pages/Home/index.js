import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import Menu from '../../components/Menu';
import styles from './styles';

export default function Home(){
  return(
    <SafeAreaView style={styles.container}>
      <Menu />
    </SafeAreaView>
  );
}

