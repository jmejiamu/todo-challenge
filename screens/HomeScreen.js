import React, { useState } from "react";
import { StyleSheet, View, Text, Button, FlatList } from "react-native";

export const todoItem = [
  {
    id: 1,
    text: "clean",
  },
  {
    id: 2,
    text: "pay bills",
  },
];
export default function HomeScreen({ navigation }) {
  const [data, setData] = useState(todoItem);
  const onHandleDelete = (id) => {
    setData(todoItem.filter((item) => item.id !== id));
  };
  return (
    <View style={styles.container}>
      {/* Here add your Code for Task List and button to navigate to add new tasks, also remember todo's should be able to be deleted. */}
      <FlatList
        data={data}
        renderItem={(item) => {
          return (
            <View style={{}}>
              <Text>{item.item.text}</Text>
              <Button
                title="Delete"
                onPress={() => onHandleDelete(item.item.id)}
              />
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
      <Button
        title="Add new Task"
        onPress={() => navigation.navigate("AddTask")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
