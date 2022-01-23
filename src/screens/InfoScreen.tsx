import { useState, useRef, useMemo } from 'react';
import { View, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FontAwesome5 } from '@expo/vector-icons';
import BottomSheet from '@gorhom/bottom-sheet';

import { FlatIconButton, Subtitle, Title, Text, Button } from '../components';
import { RootStackParamList } from '../types';
import { COLOR_DANGER, COLOR_LIGHT, COLOR_PRIMARY, COLOR_SECONDARY, SP_LG, SP_MD, SP_XL } from '../constants';

interface Item {
  title: string;
  recyclable: boolean;
  image: string;
  description: string;
}

const items: Item[] = [
  {
    title: 'plastic bottle',
    recyclable: true,
    image: '../../assets/plastic_bottle_image.png',
    description: `
    Plastic recycling is the reprocessing of plastic waste into new and useful
    products. When performed correctly, this can reduce dependence on landfill,
    conserve resources and protect the environment from plastic pollution and
    greenhouse gas emissions. Although recycling rates are increasing, they lag
    behind those of other recoverable materials, such as aluminium, glass and
    paper.
    `
  },
  {
    title: 'chips bag',
    recyclable: false,
    image: '../../assets/chips_bag_image.png',
    description: `
    Chip bags are made of a mix of plastic/foil/paper that has been laminated together.
    These layers cannot be separated which is why chip bags belong in the garbage.
    Film plastic packaging or soft plastics are not accepted in curbside recycling because
    they become tangled in sorting machinery. Film plastic materials can be brought to Recycling
    Centres, local drop-off depots and return to retail locations. 
    `
  }
];

type LandingScreenProps = NativeStackScreenProps<RootStackParamList, 'Info'>;

const InfoScreen = ({ route, navigation }: LandingScreenProps) => {
  const { uri } = route.params;
  
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => [150, '90%'], []);
  const [index, setIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri }}
        style={styles.image}
      />
      <View style={styles.content}>
        <View style={styles.header}>
          <FlatIconButton onPress={() => navigation.goBack()}>
            <FontAwesome5 name="check" size={30} color={COLOR_LIGHT} />
          </FlatIconButton>
        </View>
      </View>
      {index > -1 && (
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          handleIndicatorStyle={{ backgroundColor: COLOR_SECONDARY }}
        >
          <ScrollView style={styles.bottomSheetContent}>
            <View style={styles.title}>
              <Title>{items[index].title}</Title>
            </View>
            <View style={styles.subtitle}>
              <Text
                style={{ color: items[index].recyclable ? COLOR_PRIMARY : COLOR_DANGER }}
              >{items[index].title + ` is ${!items[index].recyclable ? 'not ' : ''}recyclable`}</Text>
            </View>
            <Image
              style={styles.infoImage}
              source={require('../../assets/plastic_bottle_image.png')}
              resizeMode="contain"
            />
            <View style={styles.description}>
            <Text>
              Plastic recycling is the reprocessing of plastic waste into new and useful
              products. When performed correctly, this can reduce dependence on landfill,
              conserve resources and protect the environment from plastic pollution and
              greenhouse gas emissions. Although recycling rates are increasing, they lag
              behind those of other recoverable materials, such as aluminium, glass and
              paper.
            </Text>
            </View>
            <View style={styles.button}>
              <Button onPress={() => navigation.goBack()}>back</Button>
            </View>
          </ScrollView>
        </BottomSheet>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1
  },
  content: {
    height: '90%',
    width: '90%'
  },
  header: {
    display: 'flex',
    alignItems: 'flex-end'
  },
  bottomSheetContent: {
    paddingHorizontal: '5%',
  },
  title: {
    alignSelf: 'flex-start',
    marginTop: SP_LG
  },
  subtitle: {
    alignSelf: 'flex-start',
    marginVertical: SP_MD
  },
  description: {
    marginTop: SP_MD
  },
  button: {
    marginVertical: SP_XL,
    alignSelf: 'center'
  },
  infoImage: {
    width: '100%',
    height: Dimensions.get('window').width * 0.7
  }
});

export default InfoScreen;