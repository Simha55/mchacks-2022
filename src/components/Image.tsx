import { Image as RNImage, ImageSourcePropType, StyleSheet } from 'react-native';

interface ImageProps {
  source: ImageSourcePropType;
}

const Image = ({ source }: ImageProps) => {
  return (
    <RNImage
      style={styles.image}
      source={source}
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '50%'
  },
});

export default Image;