import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  itemBox: {
    flexDirection: "row",
    width: "100%",
    height: 100,
    borderColor: "#DDD",
    borderWidth: 1,
  },
  leftItem: {
    width: 100,
  },
  rightItem: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10,
  },
  description: {
    fontSize: 12,
    color: "#555",
  },
  subText: {
    fontSize: 10,
    color: "#bbb",
  },
});

const ListItem = ({ imageUrl, title, author }) => {
  return (
    <View style={styles.itemBox}>
      <View style={styles.leftItem}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{
            uri: imageUrl,
          }}
        />
      </View>
      <View style={styles.rightItem}>
        <Text numberOfLines={3} style={styles.description}>
          {title}
        </Text>
        <Text style={styles.subText}>{author}</Text>
      </View>
    </View>
  );
};

export default ListItem;
