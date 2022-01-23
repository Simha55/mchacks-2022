import { TextStyle } from 'react-native';
import { COLOR_PRIMARY, FS_LARGE } from '../../constants';
import Text from './Text';

interface TitleProps {
  children: string;
}

const Title = ({ children }: TitleProps) => {
  return (
    <Text style={titleStyle}>{children}</Text>
  );
};

const titleStyle: TextStyle = {
  fontSize: FS_LARGE,
  fontWeight: '600',
  textAlign: 'center',
  color: COLOR_PRIMARY
}

export default Title;