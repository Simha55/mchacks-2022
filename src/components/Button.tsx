import { TouchableOpacity, StyleSheet, GestureResponderEvent } from 'react-native';
import { BR_MD, COLOR_PRIMARY, SHADOW_STYLE, SP_SM, SP_XL } from '../constants';

import { ButtonText } from './typography';

interface ButtonProps {
  children: string;
  onPress: (event: GestureResponderEvent) => void;
}

const Button = ({ children, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <ButtonText>{children}</ButtonText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR_PRIMARY,
    paddingHorizontal: SP_XL,
    paddingVertical: SP_SM,
    borderRadius: BR_MD,
    ...SHADOW_STYLE
  }
});

export default Button;