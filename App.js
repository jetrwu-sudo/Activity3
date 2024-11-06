import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/icon.png')} 
        style={styles.logo}
      />
      <Text style={styles.brandName}>BetterStreets</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.buttonLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.dontHaveAccount}>Don't have an account yet?</Text>

      <TouchableOpacity style={styles.buttonRegister}>
        <Text style={styles.buttonText}>Register Here</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.footerText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  brandName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1e90ff',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  buttonLogin: {
    width: '100%',
    padding: 15,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonRegister: {
    width: '100%',
    padding: 15,
    backgroundColor: '#ff6347', 
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dontHaveAccount: {
    fontSize: 16,
    color: '#555',
    marginTop: 30,
  },
  footerText: {
    color: '#1e90ff',
    textDecorationLine: 'underline',
    fontSize: 16,
    marginVertical: 30,
  },
});

export default LoginPage;
