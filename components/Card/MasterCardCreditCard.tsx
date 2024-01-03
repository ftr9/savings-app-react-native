import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { USER_DATA } from '../data/userData';

//@ts-ignore
import RetirementImage from '../../assets/images/illustrations/retirement-removebg-preview.png';
import Animated, { FadeInRight, SlideInRight } from 'react-native-reanimated';
import HalfMasterCard from './HalfMasterCard';
import FullMasterCard from './FullMasterCard';
import { useMasterCardCreditCardAnimation } from '../hooks/useMasterCardCreditCardAnimation';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
const accountBalanceAmountAnimationConfig = FadeInRight.springify()
  .mass(1.5)
  .duration(500)
  .damping(11)
  .stiffness(140)
  .restDisplacementThreshold(0.01)
  .restSpeedThreshold(4);

interface IMasterCardCreditCard {
  onMasterCardFling: () => void;
}

const MasterCardCreditCard = ({ onMasterCardFling }: IMasterCardCreditCard) => {
  const {
    animatedCreditCardHeight,
    creditCardHeightSharedValue,
    masterCardHeightSharedValue,
    animatedMasterCardHeight,
  } = useMasterCardCreditCardAnimation();
  const [isMasterCardVisible, setMasterCardVisible] = useState(false);

  return (
    <>
      <AnimatedLinearGradient
        style={[styles.creditCardStyle, animatedCreditCardHeight]}
        colors={[
          USER_DATA[0].colors[0],
          USER_DATA[0].colors[1],
          USER_DATA[0].colors[2],
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Animated.Image
          entering={SlideInRight.springify().mass(0.7)}
          source={RetirementImage}
          style={styles.creditCardHuman}
          resizeMode="contain"
        />
        <View>
          <Animated.Text
            entering={FadeInRight.duration(300)}
            style={{
              fontSize: 30,
              color: 'white',
            }}
          >
            Retirement
          </Animated.Text>

          <Animated.Text
            entering={FadeInRight.duration(500)}
            style={{
              color: 'white',
            }}
          >
            Account Balance
          </Animated.Text>

          <Animated.Text
            entering={accountBalanceAmountAnimationConfig}
            style={styles.totalAmount}
          >
            $ 12,284.00
          </Animated.Text>
        </View>

        <HalfMasterCard
          setMasterCardVisible={setMasterCardVisible}
          creditCardHeightSharedValue={creditCardHeightSharedValue}
          masterCardHeightSharedValue={masterCardHeightSharedValue}
        />
      </AnimatedLinearGradient>

      <Animated.View
        style={[
          animatedMasterCardHeight,
          {
            marginTop: 20,
          },
        ]}
      >
        {isMasterCardVisible && (
          <FullMasterCard onMasterCardFling={onMasterCardFling} />
        )}
      </Animated.View>
    </>
  );
};

export default MasterCardCreditCard;

const styles = StyleSheet.create({
  creditCardStyle: {
    height: 250,
    overflow: 'hidden',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingTop: 20,
    justifyContent: 'space-between',
  },
  creditCardHuman: {
    height: 300,
    position: 'absolute',
    top: '-10%',
    right: '-5%',
  },

  totalAmount: {
    fontSize: 35,
    color: 'white',
    fontWeight: '900',
  },
});
