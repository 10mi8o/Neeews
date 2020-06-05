import React from "react";
import { useDispatch } from "react-redux";
import { StyleSheet, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { WebView } from "react-native-webview";

import { addClip, deleteClip } from "../store/actions/user";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefefe",
  },
});

export default Article = ({ route }) => {
  const dispatch = useDispatch();
  const { article } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          dispatch(addClip({ clip: article }));
        }}
      >
        <Text style={{ margin: 10, fontSize: 30 }}>ADDCLIP</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          dispatch(deleteClip({ clip: article }));
        }}
      >
        <Text style={{ margin: 10, fontSize: 30 }}>DELETECLIP</Text>
      </TouchableOpacity>

      <WebView source={{ uri: article.url }} />
    </SafeAreaView>
  );
};
