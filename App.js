import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import ListItem from "./components/ListItem";
import Constants from "expo-constants";
import axios from "axios";

const URL = `http://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${Constants.manifest.extra.neeewsApiKey}`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const App = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    alert(Constants.manifest.extra.neeewsApiKey);
  }, []);

  return (
    <View style={styles.container}>
      <ListItem
        author="reactNeeews"
        imageUrl="https://reactnative.dev/img/tiny_logo.png"
        title="
        吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。
        何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。
        吾輩はここで始めて人間というものを見た。
        "
      />
    </View>
  );
};

export default App;
