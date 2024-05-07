import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Example book data
const books = [
  { id: '1', title: 'Book One', author: 'Author One', description: 'Description of Book One' },
  { id: '2', title: 'Book Two', author: 'Author Two', description: 'Description of Book Two' },
];

const BookList = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Button title="View Details" onPress={() => navigation.navigate('BookDetails', { book: item })} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BookList;
