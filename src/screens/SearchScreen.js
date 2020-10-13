import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp';


const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([])

  const searchAPI = async () => {
    const res = await yelp.get("/search", {
      params: {
        limit: 50,
        term,
        location: 'vancouver'
      }
    })
    setResults(res.data.businesses)
  };

  return (
    <View>
      <SearchBar 
        term={term} 
        onTermChange={setTerm}
        onTermSubmit={searchAPI}
      />
      <Text>Search Screen</Text>
      <Text>We have found {results.length} results</Text>
    </View>
  )
};

export default SearchScreen;