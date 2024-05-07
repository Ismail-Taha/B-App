import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  LandingPage: undefined;
  SignIn: undefined;
  SignUp: undefined;
  BookList: undefined;
  BookForm: { book?: any }; // Assuming 'any' type for now, specify your book type here
  BookDetails: { book: any };
};

// Define route and navigation prop types for each screen
export type BookDetailsScreenRouteProp = RouteProp<RootStackParamList, 'BookDetails'>;
export type BookDetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'BookDetails'>;

export interface BookDetailsProps {
  route: BookDetailsScreenRouteProp;
  navigation: BookDetailsScreenNavigationProp;
}