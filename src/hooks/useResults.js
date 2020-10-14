import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
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

  return [ searchAPI, results, errMsg ]
};