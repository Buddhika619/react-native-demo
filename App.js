import { useState } from "react";
import { StyleSheet, View, FlatList, Button,  } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };


  const endAddGoalHandler = () => {
    setModalIsVisible(false)
  }

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((prevState) => [
      ...prevState,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setModalIsVisible(false)
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  return (
    <>
      <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button
        title="Add new Goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem data={itemData.item} onDeleteItem={deleteGoalHandler} />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />

        {/* <ScrollView >
         {courseGoals.map((goal, index) => (
          <View key={index} style = {styles.goalItem}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        ))}
        <Text >List of goals...</Text>
      </ScrollView> */}
      </View>
    </View>
    </>
  
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    flex: 1,
    paddingHorizontal: 16,
   
  },

  goalsContainer: {
    flex: 5,
  },
});
