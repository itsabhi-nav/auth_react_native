// screens/HomeScreen.tsx
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import CustomButton from '../components/CustomButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const handleLogout = () => {
    navigation.replace('Login');
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

      {/* Header Text */}
      <Text style={styles.header}>ARGENBRIGHT INNOVATION LABS</Text>

      {/* Logout Button */}
      <CustomButton title="Logout" onPress={handleLogout} />
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
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default HomeScreen;
