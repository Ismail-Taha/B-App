import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from '../components/LandingPage';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import BookList from '../components/BookList';
import BookForm from '../components/BookForm';
import BookDetails from '../components/BookDetails';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="LandingPage">
      {/* Define each screen and its navigation options */}
      <Stack.Screen
        name="LandingPage"
        component={LandingPage}
        options={{ title: 'Welcome to Book Haven' }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ title: 'Sign In' }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ title: 'Sign Up' }}
      />
      <Stack.Screen
        name="BookList"
        component={BookList}
        options={{ title: 'Book List' }}
      />
      <Stack.Screen
        name="BookForm"
        component={BookForm}
        options={{ title: 'Add/Edit Book' }}
      />
      <Stack.Screen
        name="BookDetails"
        component={BookDetails}
        options={({ route }) => ({ title: route.params.book.title })} // Dynamic title based on the book's title
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
