// screens/ForgotPasswordScreen.tsx
import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import CustomButton from '../components/CustomButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'ForgotPassword'>;

const ForgotPasswordScreen: React.FC<Props> = ({navigation}) => {
  const handleReset = () => {
    Alert.alert(
      'Reset Password',
      'Password reset functionality is not implemented.',
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <CustomButton title="Reset Password" onPress={handleReset} />
      <CustomButton
        title="Back to Login"
        onPress={() => navigation.goBack()}
        style={{backgroundColor: '#6c757d'}}
      />
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
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default ForgotPasswordScreen;
