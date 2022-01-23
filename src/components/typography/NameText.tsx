import { TextStyle } from 'react-native';

import Text from './Text';

import { COLOR_PRIMARY, FS_MEDIUM_LARGE } from '../../constants';

interface NameTextProps {
  children: string;
}

const NameText = ({ children }: NameTextProps) => {
  return (
    <Text style={nameTextStyle}>{children}</Text>
  );
};

const nameTextStyle: TextStyle = {
  color: COLOR_PRIMARY,
  fontSize: FS_MEDIUM_LARGE
};

export default NameText;