import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import { ThemeContext } from 'react-navigation';


const SearchBar = () => {
  return (
    <View style={styles.backgroundStyle}>
      <FontAwesome name="search" size={30}/>
      <TextInput style={styles.inputStyle} placeholder="Search" />
    </View>
  )
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row'
  },
  inputStyle: {
    borderColor: 'black',
    borderWidth: 1,
    flex: 1
  }
})

export default SearchBar;