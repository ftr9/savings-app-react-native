import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { IUserData } from './data/userData';
import { useRouter } from 'expo-router';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../constants/Dimensions';
import Animated, { FadeInRight } from 'react-native-reanimated';

interface IUserDataCard extends IUserData {
  isInView: boolean;
}

const UserDataContent = ({ name, avatar, price, isInView }: IUserDataCard) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        router.push('/details');
      }}
      style={styles.container}
    >
      <Image source={avatar} resizeMode="contain" style={styles.image} />

      {isInView && (
        <Animated.Text entering={FadeInRight} style={styles.nameText}>
          {name}
        </Animated.Text>
      )}
      {isInView && (
        <Animated.Text
          entering={FadeInRight.delay(50)}
          style={styles.balanceText}
        >
          Account Balance
        </Animated.Text>
      )}
      {isInView && (
        <Animated.Text
          entering={FadeInRight.delay(100)}
          style={styles.priceText}
        >
          $ {price}
        </Animated.Text>
      )}
    </TouchableOpacity>
  );
};

export default UserDataContent;

const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'red',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 2,
    justifyContent: 'center',
    position: 'relative',
    paddingHorizontal: 10,
  },
  image: {
    position: 'absolute',
    right: '5%',
    height: SCREEN_HEIGHT / 2,
  },
  nameText: {
    fontSize: 35,
    color: 'white',
  },
  balanceText: {
    color: 'white',
  },
  priceText: {
    fontSize: 40,
    color: 'white',
    fontWeight: '900',
  },
});
