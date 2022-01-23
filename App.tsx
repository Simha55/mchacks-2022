import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LandingScreen, CameraScreen, AboutScreen, InfoScreen } from './src/screens';

import { RootStackParamList } from './src/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          header: () => null,
          contentStyle: { backgroundColor: 'white' },
        }}>
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen
          name="Info"
          component={InfoScreen}
          options={{ animation: 'none', gestureEnabled: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
