import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import styles from './styles';

export default function Home(){
  return(
    <SafeAreaView style={styles.container}>
      <Menu />
      <Header />
    </SafeAreaView>
  );
}

