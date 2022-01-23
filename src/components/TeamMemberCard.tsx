import { TouchableOpacity, View, StyleSheet, Linking, Image } from 'react-native';

import NameText from './typography/NameText';
import Text from './typography/Text';

import { BR_LG, COLOR_SECONDARY, SP_LG, SP_MD } from '../constants';
import { Member } from '../types';

const TeamMemberCard = ({ name, avatar, title, url }: Member) => {
  return (
    <TouchableOpacity
      onPress={() => Linking.openURL(url)}
      style={styles.container}
    >
      {avatar ? <Image
        style={styles.avatar}
        source={{ uri: avatar }}
        resizeMode="stretch"
      /> : <View style={styles.avatar} />}
      <View style={styles.info}>
        <NameText>{name}</NameText>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SP_MD
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: BR_LG,
    backgroundColor: COLOR_SECONDARY,
    marginRight: SP_LG,
  },
  info: {
    display: 'flex'
  }
});

export default TeamMemberCard;