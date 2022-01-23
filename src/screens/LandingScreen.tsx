import { View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Title, Subtitle, Button, Image, FlatIconButton } from '../components';
import { SP_XL, SP_XS, SP_MD, COLOR_PRIMARY } from '../constants';
import { RootStackParamList } from '../types';

type LandingScreenProps = NativeStackScreenProps<RootStackParamList, 'Landing'>;

const LandingScreen = ({ navigation }: LandingScreenProps) => {
  return (
    <View style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.iconButton}>
          <FlatIconButton onPress={() => navigation.navigate('About')}>
            <Feather name="help-circle" size={40} color={COLOR_PRIMARY} />
          </FlatIconButton>
        </View>
        <Image
          source={require('../../assets/landing_page_image.png')}
        />
        <View style={styles.content}>
          <View style={styles.title}>
            <Title>recyclable</Title>
          </View>
          <View style={styles.subtitle}>
            <Subtitle>we all play a role in the future of our planet</Subtitle>
          </View>
          <Button
            onPress={() => navigation.navigate('Camera')}>
            get started
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    height: '85%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconButton: {
    width: '100%',
    paddingHorizontal: SP_XL,
    display: 'flex',
    alignItems: 'flex-end',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: SP_XL,
  },
  title: {
    marginBottom: SP_XS
  },
  subtitle: {
    marginBottom: SP_XL,
    marginHorizontal: SP_MD
  }
});

export default LandingScreen;