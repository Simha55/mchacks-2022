import { Text as RNText, TextStyle, StyleSheet } from 'react-native';
import { COLOR_SECONDARY, FS_SMALL } from '../../constants';

interface TextProps {
  style?: TextStyle;
  children: string;
}

const Text = ({ style, children }: TextProps) => {
  return (
    <RNText style={[styles.defaultTextStyle, style]}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  defaultTextStyle: {
    fontFamily: 'Futura',
    color: COLOR_SECONDARY,
    fontWeight: '600',
    fontSize: FS_SMALL
  }
});

export default Text;