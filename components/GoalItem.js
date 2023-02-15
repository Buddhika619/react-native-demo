import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ data,onDeleteItem }) => {
  return (
    <Pressable onPress={()=> onDeleteItem(data.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{data.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});