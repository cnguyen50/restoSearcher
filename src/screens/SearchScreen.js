import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp';


const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([])
  const [errMsg, setErrMsg] = useState('')

  const searchAPI = async () => {
    try {
      const res = await yelp.get("/search", {
        params: {
          limit: 50,
          term,
          location: 'vancouver'
        }
      })
      setResults(res.data.businesses)
    } catch (err) {
      setErrMsg("Something went wrong")
    }
  };

  return (
    <View>
      <SearchBar 
        term={term} 
        onTermChange={setTerm}
        onTermSubmit={searchAPI}
      />
      {errMsg ? <Text>{errMsg}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>
  )
};

export default SearchScreen;