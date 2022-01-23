import { View, StyleSheet, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Title, BackButton, Text, TeamMemberCard } from '../components';
import { SP_XL } from '../constants';
import { RootStackParamList, Member } from '../types';

type AboutScreenProps = NativeStackScreenProps<RootStackParamList, 'About'>;

const members: Member[] = [
  {
    name: 'kamil',
    title: 'mobile developer - designer',
    url: 'https://www.linkedin.com/in/kamilgeagea/',
    avatar: 'https://media-exp1.licdn.com/dms/image/C4D03AQGvFYk8QOEBlw/profile-displayphoto-shrink_400_400/0/1642389632489?e=1648080000&v=beta&t=xQfm8sPU_PVA0UhgNxt0jnkI-3llAExxFVFKs1JjhzM'
  },
  {
    name: 'simha',
    title: 'ai developer',
    url: 'https://www.linkedin.com/mwlite/in/manisimha'
  },
  {
    name: 'sonali',
    title: 'project manager',
    url: 'https://www.linkedin.com/in/sonalirastogi',
    avatar: 'https://media-exp1.licdn.com/dms/image/C4D03AQE2gjSxqL52FQ/profile-displayphoto-shrink_400_400/0/1591985917211?e=1648080000&v=beta&t=f0FbHGkXZpUj8WLAcW3QkvI56Awv52WNJq7XGTXz6ug'
  },
  {
    name: 'suryansham',
    title: 'business manager',
    url: 'https://www.linkedin.com/in/suryanshamtiwari',
    avatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQFgrkianxr25Q/profile-displayphoto-shrink_400_400/0/1632527531643?e=1648080000&v=beta&t=-2LcRUooyRm60BOZZL_HyXWKmFwIpkGcceZVN47ZgNc'
  }
];

const AboutScreen = ({ navigation }: AboutScreenProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.backButton}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.title}>
          <Title>about</Title>
        </View>
        <View style={styles.description}>
          <Text>
          recyclable is a project built by the Obverse team for the McHacks hackathon
          the goal of this project is to build an app that will help people recycle more
          efficiently using deep learning and image recognition
          </Text>
        </View>
        <View style={styles.title}>
          <Title>team</Title>
        </View>
        <View style={styles.members}>
          {members.map(member => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    paddingTop: '10%',
  },
  scrollView: {
    height: '100%',
    width: '100%',
    display: 'flex',
    paddingHorizontal: '10%',
  },
  title: {
    marginTop: SP_XL,
    alignSelf: 'flex-start'
  },
  description: {
    marginTop: SP_XL
  },
  members: {
    marginTop: SP_XL
  },
  backButton: {
    paddingHorizontal: '10%'
  }
});

export default AboutScreen;