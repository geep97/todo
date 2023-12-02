import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';

export default function Page() {
  const [customChallenge, setCustomChallenge] = useState('');
  const [challenges, setChallenges] = useState([]);

  const addCustomChallenge = () => {
    if (customChallenge.trim() !== '') {
      setChallenges((prevChallenges) => [
        ...prevChallenges,
        {
          id: challenges.length + 1,
          title: `Challenge ${challenges.length + 1}`,
          description: customChallenge,
        },
      ]);
      setCustomChallenge('');
    }
  };

  const deleteChallenge = (id) => {
    setChallenges((prevChallenges) => prevChallenges.filter((challenge) => challenge.id !== id));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          <Text style={styles.title}>Hello Godman 😇</Text>
          <Text style={styles.subtitle}>Welcome</Text>
        </View>

        <View style={styles.challengesSection}>
          <Text style={styles.sectionTitle}>Monthly Challenges</Text>

          {challenges.map((challenge) => (
            <View key={challenge.id} style={styles.challengeItem}>
              <View style={styles.challengeTextContainer}>
                <Text style={styles.challengeTitle}>{challenge.title}</Text>
                <Text style={styles.challengeDescription}>{challenge.description}</Text>
              </View>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => deleteChallenge(challenge.id)}
              >
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          ))}

          <View style={styles.addChallengeContainer}>
            <TextInput
              style={styles.input}
              placeholder="Add your custom challenge"
              value={customChallenge}
              onChangeText={(text) => setCustomChallenge(text)}
            />
            <TouchableOpacity style={styles.addButton} onPress={addCustomChallenge}>
              <Text style={styles.buttonText}>Add Challenge</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#C4A484',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  main: {
    borderColor: '#38434D',
    borderWidth: 2,
    padding: 16,
    borderRadius: 31,
    marginBottom: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    color: '#38434D',
  },
  challengesSection: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  challengeItem: {
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  challengeTextContainer: {
    flex: 1,
    marginRight: 10,
  },
  challengeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  challengeDescription: {
    fontSize: 16,
    color: '#38434D',
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addChallengeContainer: {
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#38434D',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
