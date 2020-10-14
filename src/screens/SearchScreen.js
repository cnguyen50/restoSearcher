import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp';


const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([])
  const [errMsg, setErrMsg] = useState('')

  const searchAPI = async (searchTerm) => {
    console.log("testing")
    try {
      const res = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'vancouver'
        }
      })
      setResults(res.data.businesses)
    } catch (err) {
      setErrMsg("Something went wrong")
    }
  };

  useEffect(() => {
    searchAPI("pasta")
  }, [])

  return (
    <View>
      <SearchBar 
        term={term} 
        onTermChange={setTerm}
        onTermSubmit={() => searchAPI(term)}
      />
      {errMsg ? <Text>{errMsg}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>
  )
};

export default SearchScreen;