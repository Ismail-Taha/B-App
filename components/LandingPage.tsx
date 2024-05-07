import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LandingPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Book Haven!</Text>
      <Button title="Sign In" onPress={() => navigation.navigate('SignIn')} />
      <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
      <Button title="View Books" onPress={() => navigation.navigate('BookList')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default LandingPage;
