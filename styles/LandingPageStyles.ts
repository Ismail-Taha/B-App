import { StyleSheet } from 'react-native';

// Define the styles for the landing page components
const LandingPageStyles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay for better contrast
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  subheading: {
    fontSize: 16,
    color: '#ddd',
    marginBottom: 40,
  },
});

export default LandingPageStyles;
