import { useState, useEffect, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Subtitle,
  Title,
  Image,
  Button,
  BackButton,
  FlatIconButton,
  Tutorial
} from '../components';
import { SP_LG, SP_SM, SP_XL, COLOR_LIGHT } from '../constants';
import { RootStackParamList } from '../types';

type CameraScreenProps = NativeStackScreenProps<RootStackParamList, 'Camera'>;

const CameraScreen = ({ navigation }: CameraScreenProps) => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [showTutorial, setShowTutorial] = useState(true);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef<Camera>(null);

  useEffect(() => {
    (async () => {
      setLoading(true);

      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');

      const first = await AsyncStorage.getItem('first');

      if (first === 'false') {
        setShowTutorial(false);
      } else {
        setShowTutorial(true);
      }

      setLoading(false);
    })();
  }, []);

  if (hasPermission === null || loading) {
    return (
      <View style={styles.pendingPermissionScreen} />
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.noPermissionScreen}>
        <Image source={require('../../assets/no_camera_permission_image.png')} />
        <View style={styles.content}>
          <View style={styles.title}>
            <Title>camera access denied</Title>
          </View>
          <View style={styles.subtitle}>
            <Subtitle>you need to enable camera access in your settings</Subtitle>
          </View>
          <Button onPress={() => navigation.goBack()}>back</Button>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
        {showTutorial && <Tutorial onSubmit={async () => {
          setShowTutorial(false);
          await AsyncStorage.setItem('first', 'false');
        }} />}
        <Camera
          style={styles.camera}
          type={type}
          ref={cameraRef}
        >
          <View style={styles.cameraContent}>
            <View style={styles.buttons}>
              <BackButton
                onPress={() => navigation.goBack()}
                color={COLOR_LIGHT}
              />
              <View style={styles.rightButtons}>
                <FlatIconButton onPress={() => setShowTutorial(true)}>
                  <FontAwesome5
                    name="question"
                    size={24}
                    color={COLOR_LIGHT}
                  />
                </FlatIconButton>
                <View style={styles.separator} />
                <FlatIconButton onPress={() => {
                  if (type === Camera.Constants.Type.front) {
                    setType(Camera.Constants.Type.back);
                  } else {
                    setType(Camera.Constants.Type.front);
                  }
                }}>
                  <Feather name="camera" size={30} color={COLOR_LIGHT} />
                </FlatIconButton>
              </View>
            </View>
            <View style={styles.takePictureButton}>
              <FlatIconButton onPress={async () => {
                if (cameraRef.current) {
                  const photo = await cameraRef.current.takePictureAsync();
                  navigation.navigate('Info', { uri: photo.uri });
                }
              }}>
                <Ionicons
                  name="radio-button-on"
                  size={80}
                  color={COLOR_LIGHT}
                />
              </FlatIconButton>
            </View>
          </View>
        </Camera>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  pendingPermissionScreen: {
    height: '100%',
    width: '100%',
    backgroundColor: 'black'
  },
  noPermissionScreen: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  camera: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    margin: SP_LG,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    marginBottom: SP_SM
  },
  subtitle: {
    marginBottom: SP_XL
  },
  buttons: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cameraContent: {
    height: '90%',
    width: '90%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  takePictureButton: {
    display: 'flex',
    alignItems: 'center'
  },
  rightButtons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  separator: {
    width: SP_XL
  }
});

export default CameraScreen;