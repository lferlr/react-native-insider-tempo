import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import * as Location from 'expo-location';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast';

import api, { key }from '../../services/api';
import styles from './styles';

const mylist = [
  {
    "date": "03-16",
    "weekday": "Tue",
    "max": 26,
    "min": 18,
    "description": "Thunderstorms",
    "condition": "storm"
  },
  {
    "date": "03-17",
    "weekday": "Wed",
    "max": 28,
    "min": 17,
    "description": "Thunderstorms",
    "condition": "storm"
  },
  {
    "date": "03-18",
    "weekday": "Thu",
    "max": 26,
    "min": 18,
    "description": "Thunderstorms",
    "condition": "clear_day"
  },
  {
    "date": "03-19",
    "weekday": "Fri",
    "max": 26,
    "min": 18,
    "description": "Thunderstorms",
    "condition": "storm"
  },
  {
    "date": "03-20",
    "weekday": "Sat",
    "max": 27,
    "min": 17,
    "description": "Isolated thundershowers",
    "condition": "storm"
  },
  {
    "date": "03-21",
    "weekday": "Sun",
    "max": 28,
    "min": 17,
    "description": "Day partly cloudy",
    "condition": "cloudly_day"
  },
  {
    "date": "03-22",
    "weekday": "Mon",
    "max": 28,
    "min": 18,
    "description": "Thunderstorms",
    "condition": "storm"
  },
  {
    "date": "03-23",
    "weekday": "Tue",
    "max": 23,
    "min": 19,
    "description": "Isolated thundershowers",
    "condition": "storm"
  },
  {
    "date": "03-24",
    "weekday": "Wed",
    "max": 24,
    "min": 18,
    "description": "Day mostly cloudy",
    "condition": "cloud"
  },
  {
    "date": "03-25",
    "weekday": "Thu",
    "max": 24,
    "min": 18,
    "description": "Scattered thunderstorms",
    "condition": "storm"
  }
];

export default function Home(){
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);
  const [icon, setIcon] = useState({ name: 'cloud', color: '#FFFFFF' });
  const [background, setBackground] = useState(['#1ec9ff', '#97c1ff' ]);

  useEffect(() => {
    
    (async () => {
      let { status } = await Location.requestPermissionsAsync();

      if(status !== 'granted') {
        setErrorMsg('Permissão negada para acessar localização');
        setLoading(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      //console.log(location);

      const response = await api.get(`/weather?key=${key}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`);

      console.log(response);

    })();

  }, [])

  // if(status !== 'granted') {
  //   setErrorMsg('Permissão negada para acessar localização');
  //   setLoading(false);
  //   return;
  // }
  
  // let location = await Location.getCurrentPositionAsync({});
  // console.log(location);

  // console.log(status);

  return(
    <SafeAreaView style={styles.container}>
      <Menu />
      <Header />
      <Conditions />

      <FlatList 
        horizontal={true}
        contentContainerStyle={{ paddingHorizontal: '5%' }}
        style={styles.list}
        data={mylist}
        keyExtractor={ item => item.date }
        renderItem={ ({ item }) => <Forecast data={item} /> }
      />

    </SafeAreaView>
  );
}

