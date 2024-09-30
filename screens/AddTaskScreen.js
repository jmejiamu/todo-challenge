import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";
import { todoItem } from "./HomeScreen";

export default function AddTaskScreen({ route, navigation }) {
  const [newTask, setNewTack] = useState("");

  const onHandleSubmit = () => {
    const id = new Date();
    todoItem.push([{ id: id, text: newTask }]);
    navigation.navigate("Home");
  };
  console.log(todoItem);
  return (
    <View style={styles.container}>
      {/* Here Add your Code to add Tasks */}
      <TextInput
        placeholder="Enter new task"
        value={newTask}
        onChangeText={setNewTack}
      />
      <Button title="Add Task" onPress={onHandleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
