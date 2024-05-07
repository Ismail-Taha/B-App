import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { BookDetailsProps } from '../types/types';

const BookDetails = ({ route, navigation }: BookDetailsProps) => {
  const { book } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.author}>by {book.author}</Text>
      <Text style={styles.description}>{book.description}</Text>
      <Button title="Edit" onPress={() => navigation.navigate('BookForm', { book })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  author: {
    fontSize: 18,
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 24,
  },
});

export default BookDetails;
