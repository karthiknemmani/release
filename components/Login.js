// LoginScreen.js
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#008000" // Green placeholder text
        autoCapitalize="none"
        required
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#008000" // Green placeholder text
        secureTextEntry
        required
      />
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF', // White background
      },
      title: {
        fontSize: 24,
        color: '#008000', // Green text
        marginBottom: 20,
      },
      input: {
        width: '80%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#008000', // Green border
        marginBottom: 10,
      },
      loginButton: {
        backgroundColor: '#008000', // Green button
        padding: 15,
        borderRadius: 5,
      },
      loginButtonText: {
        color: '#FFFFFF', // White text
        fontSize: 16,
        textAlign: 'center',
      },
  });

  export default LoginScreen;
