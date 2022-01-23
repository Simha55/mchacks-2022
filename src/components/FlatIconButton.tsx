import { ReactNode } from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';

interface FlatIconButtonProps {
  children: ReactNode;
  onPress: (event: GestureResponderEvent) => void;
}

const FlatIconButton = ({ children, onPress }: FlatIconButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default FlatIconButton;