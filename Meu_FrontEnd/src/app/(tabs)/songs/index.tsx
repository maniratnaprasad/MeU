import { View, Text, TextInput, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import { defaultStyles } from "@/styles";
import axios from "axios";

const SongsScreen = () => {
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  const handleSearchSuggestionChange = async (value: string) => {
    const data = {
      query: value,
    };
    try {
      //console.log(data);
      const apiurl = "http://192.168.29.149:8000/sSuggestion";
      const response = await axios.post(apiurl, data);
      setSearchSuggestions(response.data);
    } catch (error: any) {
      console.warn(
        "Error during search request:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleSearch = async (value: string) => {
    const data = { query: value };
    try {
      //console.log(data);
      const apiurl = "http://192.168.29.149:8000/searchSongs";
      const response = await axios.post(apiurl, data);
      console.log(response.data);
      setSearchResult(response.data);
    } catch (error: any) {
      console.warn(
        "Error during search request:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <View
      style={{
        ...defaultStyles.container,
      }}
    >
      <TextInput
        style={styles.searchBar}
        placeholder="Search songs..."
        onChangeText={handleSearchSuggestionChange}
        onSubmitEditing={(value: any) => handleSearch}
      />
      <FlatList
        data={searchSuggestions}
        renderItem={(item) => (
          <View>
            <Text>{item.item}</Text>
          </View>
        )}
      />

      <FlatList
        data={searchResult}
        renderItem={(item: any) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    margin: 10,
  },
});

export default SongsScreen;
