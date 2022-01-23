import { View, GestureResponderEvent, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

import FlatIconButton from './FlatIconButton';
import { COLOR_PRIMARY, SP_SM } from '../constants';

interface BackButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  color?: string;
}

const BackButton = ({ onPress, color = COLOR_PRIMARY }: BackButtonProps) => {
  return (
    <FlatIconButton onPress={onPress}>
      <View style={styles.backButton}>
        <Ionicons name="chevron-back" size={40} color={color} />
      </View>
    </FlatIconButton>
  );
};

const styles = StyleSheet.create({
  backButton: {
    marginLeft: -SP_SM
  }
});

export default BackButton;