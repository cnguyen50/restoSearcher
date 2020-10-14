import React, { useState,useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native'
import yelp from '../api/yelp'

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null)
  const id = navigation.getParam('id')
  
  const getResult =  async (id) => {
    const res = await yelp.get(`/${id}`)
    setResult(res.data)
  };

  useEffect (() => {
    getResult(id)
  }, []);

  return (
    <View>
      <Text>Results Show</Text>
    </View>
  )
};

const styles = StyleSheet.create({

});

export default ResultsShowScreen;