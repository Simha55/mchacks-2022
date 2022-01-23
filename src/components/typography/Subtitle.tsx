import { TextStyle } from 'react-native';
import { COLOR_PRIMARY_LIGHT } from '../../constants';

import Text from './Text';

interface SubtitleProps {
  children: string;
}

const Subtitle = ({ children }: SubtitleProps) => {
  return (
    <Text style={subtitleStyle}>{children}</Text>
  );
};

const subtitleStyle: TextStyle = {
  color: COLOR_PRIMARY_LIGHT,
  textAlign: 'center',
};

export default Subtitle