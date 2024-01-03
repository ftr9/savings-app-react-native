import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { SCREEN_WIDTH } from '../../constants/Dimensions';

interface IInfoCard {
  name: string;
  amount: string;
  color: string;
  isHalfWidth: boolean;
}

const InfoCard = ({ name, amount, color, isHalfWidth }: IInfoCard) => {
  return (
    <Animated.View
      entering={FadeInDown.duration(200).delay(200).springify()}
      style={[
        {
          ...styles.halfWidthcontainer,
          width: isHalfWidth ? SCREEN_WIDTH / 2 - 20 : '100%',
        },
        !isHalfWidth && styles.fullWidthContainer,
      ]}
    >
      <View
        style={!isHalfWidth && { flexDirection: 'row', alignItems: 'center' }}
      >
        <View style={[{ ...styles.iconContainer, backgroundColor: color }]}>
          <Ionicons color={'white'} size={18} name="arrow-up" />
        </View>
        <Text
          style={{
            color: 'white',
            marginLeft: !isHalfWidth ? 20 : 0,
          }}
        >
          {name}
        </Text>
      </View>

      <View>
        <Text
          style={{
            fontSize: 28,
            fontWeight: '600',
            color: 'white',
          }}
        >
          {amount}
        </Text>
      </View>
    </Animated.View>
  );
};

export default InfoCard;

const styles = StyleSheet.create({
  halfWidthcontainer: {
    backgroundColor: '#1E1E1E',
    padding: 25,
    borderRadius: 20,
  },
  fullWidthContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    height: 35,
    width: 35,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});
