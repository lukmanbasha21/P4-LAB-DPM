import React, { useState } from "react";
import { View, Text, Button, Alert } from "react-native";
import TeamScore from "../components/TeamScore";
import styles from "../styles/styles";

const FutsalScoreApp = () => {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);

  const handleAddScore = (team) => {
    if (team === "A") {
      const newScore = teamAScore + 1;
      setTeamAScore(newScore);
      if (newScore === 10) Alert.alert("Congratulations!", "Team A wins!");
    } else {
      const newScore = teamBScore + 1;
      setTeamBScore(newScore);
      if (newScore === 10) Alert.alert("Congratulations!", "Team B wins!");
    }
  };

  const handleSubtractScore = (team) => {
    if (team === "A" && teamAScore > 0) {
      setTeamAScore(teamAScore - 1);
    } else if (team === "B" && teamBScore > 0) {
      setTeamBScore(teamBScore - 1);
    }
  };

  const handleReset = () => {
    setTeamAScore(0);
    setTeamBScore(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Futsal Score Manager</Text>

      <TeamScore
        teamName="Team A"
        score={teamAScore}
        onAdd={() => handleAddScore("A")}
        onSubtract={() => handleSubtractScore("A")}
      />

      <TeamScore
        teamName="Team B"
        score={teamBScore}
        onAdd={() => handleAddScore("B")}
        onSubtract={() => handleSubtractScore("B")}
      />

      <Button title="Reset Match" onPress={handleReset} color="red" />
    </View>
  );
};

export default FutsalScoreApp;
