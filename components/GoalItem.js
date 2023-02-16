import { StyleSheet, View, Text, Pressable,  } from "react-native";

const GoalItem = ({ data, onDeleteItem }) => {
  return (
   
      <View style={styles.goalItem}>
        <Pressable
          android_ripple={{ color: "#dddddd" }}
          onPress={() => onDeleteItem(data.id)}
        >
          <Text style={styles.goalText}>{data.text}</Text>
        </Pressable>
      </View>
    
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,

    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
