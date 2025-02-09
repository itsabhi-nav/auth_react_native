// screens/LoginScreen.tsx
import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Alert, Image} from 'react-native';
import CustomButton from '../components/CustomButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: React.FC<Props> = ({navigation}) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    if (username && password) {
      // Replace this with your actual authentication logic.
      navigation.replace('Home');
    } else {
      Alert.alert('Error', 'Please enter both username and password.');
    }
  };

  const handleGoogleSignIn = () => {
    // Placeholder: integrate your Google sign-in logic here.
    navigation.replace('Home');
  };

  const handleFacebookSignIn = () => {
    // Placeholder: integrate your Facebook sign-in logic here.
    navigation.replace('Home');
  };

  const handleEmailSignIn = () => {
    // Placeholder: integrate your Email sign-in logic here.
    navigation.replace('Home');
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={{
          uri: 'https://static.wixstatic.com/media/8b04fd_e61b557e1b184f0195b8c7bc52ee3bbd~mv2.png/v1/fill/w_770,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo.png',
        }}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Login Authentication</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        autoCapitalize="none"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Login Button */}
      <CustomButton title="Login" onPress={handleLogin} />

      {/* Social Sign-In Buttons */}
      <CustomButton
        title="Sign in with Google"
        onPress={handleGoogleSignIn}
        style={{backgroundColor: '#DB4437'}}
      />
      <CustomButton
        title="Sign in with Facebook"
        onPress={handleFacebookSignIn}
        style={{backgroundColor: '#4267B2'}}
      />
    

      <Text style={styles.forgotPassword} onPress={handleForgotPassword}>
        Forgot Password?
      </Text>
      <Text style={styles.registerText} onPress={handleRegister}>
        Don't have an account? Register
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 250, // Adjust size as needed
    height: 60, // Adjust size as needed
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  forgotPassword: {
    color: '#007AFF',
    marginTop: 10,
    fontSize: 16,
  },
  registerText: {
    color: '#007AFF',
    marginTop: 10,
    fontSize: 16,
  },
});

export default LoginScreen;
