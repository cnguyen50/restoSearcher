import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'


const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchAPI, results, errMsg ] = useResults();

  return (
    <View>
      <SearchBar 
        term={term} 
        onTermChange={setTerm}
        onTermSubmit={() => searchAPI(term)}
      />
      {errMsg ? <Text>{errMsg}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList/>
      <ResultsList/>
      <ResultsList/>
    </View>
  )
};

export default SearchScreen;