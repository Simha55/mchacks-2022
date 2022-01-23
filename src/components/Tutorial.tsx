import { useState, useRef } from 'react';
import { View, StyleSheet, GestureResponderEvent } from 'react-native';
import { BlurView } from 'expo-blur';
import Swiper from 'react-native-swiper';

import Title from './typography/Title';
import Subtitle from './typography/Subtitle';
import Image from './Image';
import Button from './Button'

import {
  BR_LG,
  BR_MD,
  COLOR_LIGHT,
  COLOR_PRIMARY,
  COLOR_PRIMARY_LIGHT,
  SHADOW_STYLE,
  SP_XL,
  SP_XS
} from '../constants';

interface TutorialProps {
  onSubmit: (event: GestureResponderEvent) => void
}

const WelcomeSlide = () => {
  return (
    <View style={styles.slide}>
      <Title>welcome to recyclable</Title>
      <Image source={require('../../assets/landing_page_image.png')} />
      <Subtitle>
      recyclable is an app designed to encourage people to take care of our planet by
      facilitating the daily recycling process
      </Subtitle>
    </View>
  );
};

const TutorialSlide = () => {
  return (
    <View style={styles.slide}>
      <Title>how to use recyclable</Title>
      <Image source={require('../../assets/tutorial_slide_image.png')} />
      <Subtitle>
      scan items to check if they are recyclable or not
      </Subtitle>
    </View>
  );
};

const ScanSlide = () => {
  return (
    <View style={styles.slide}>
      <Title>start recycling</Title>
      <Image source={require('../../assets/start_slide_image.png')} />
      <Subtitle>
      press the scan button and start saving the planet one garbage bag at a time
      </Subtitle>
    </View>
  );
};

const slides: { id: string; Slide: (() => JSX.Element) }[] = [
  { id: 'welcome', Slide: WelcomeSlide },
  { id: 'tutorial', Slide: TutorialSlide },
  { id: 'scan', Slide: ScanSlide }
];

const Tutorial = ({ onSubmit }: TutorialProps) => {
  const ref = useRef<Swiper>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isLastSlide = currentIndex === slides.length - 1;

  return (
    <BlurView style={styles.container}>
      <View style={styles.popup}>
        <Swiper
          ref={ref}
          showsPagination={false}
          loop={false}
          loadMinimal
          onIndexChanged={index => setCurrentIndex(index)}
        >
          {slides.map(({ id, Slide }) => (
            <Slide key={id} />
          ))}
        </Swiper>
        <View style={styles.pagination}>
          <View
            style={{ display: isLastSlide ? 'flex' : 'none', marginBottom: SP_XL }}
          >
            <Button onPress={onSubmit}>scan</Button>
          </View>
          {!isLastSlide && slides.map(({ id }, index) => (
            <View
              key={id}
              style={{
                ...styles.paginationElement,
                backgroundColor: index === currentIndex ? COLOR_PRIMARY : COLOR_PRIMARY_LIGHT 
              }}
            />
          ))}
        </View>
      </View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  popup: {
    width: '90%',
    height: 550,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR_LIGHT,
    borderRadius: BR_MD,
    ...SHADOW_STYLE
  },
  slide: {
    flex: 1,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '90%'
  },
  swiper: {
    width: '100%',
    height: '100%'
  },
  pagination: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80
  },
  paginationElement: {
    marginHorizontal: SP_XS,
    height: 7,
    width: 7,
    borderRadius: BR_LG
  }
});

export default Tutorial;