import { TextStyle } from 'react-native';

import Text from './Text';

import { COLOR_LIGHT, FS_MEDIUM } from '../../constants';

interface ButtonTextProps {
  children: string;
}

const ButtonText = ({ children }: ButtonTextProps) => {
  return (
    <Text style={buttonTextStyle}>{children}</Text>
  );
};

const buttonTextStyle: TextStyle = {
  color: COLOR_LIGHT,
  fontSize: FS_MEDIUM
};

export default ButtonText;