import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const TeamScore = ({ teamName, score, onAdd, onSubtract }) => {
  return (
    <View style={styles.teamContainer}>
      <Text style={styles.teamName}>{teamName}</Text>
      <Text style={styles.score}>{score}</Text>
      <View style={styles.buttonRow}>
        <Button title="+" onPress={onAdd} />
        <Button title="-" onPress={onSubtract} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  teamContainer: {
    marginBottom: 30,
    alignItems: "center",
  },
  teamName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  score: {
    fontSize: 48,
    fontWeight: "bold",
    marginVertical: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 120,
  },
});

export default TeamScore;
