import { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';

export const useMasterCardCreditCardAnimation = () => {
  const creditCardHeightSharedValue = useSharedValue(250);
  const masterCardHeightSharedValue = useSharedValue(0);
  const animatedCreditCardHeight = useAnimatedStyle(() => {
    return {
      height: creditCardHeightSharedValue.value,
    };
  });

  const animatedMasterCardHeight = useAnimatedStyle(() => {
    return {
      height: masterCardHeightSharedValue.value,
    };
  });

  return {
    creditCardHeightSharedValue,
    masterCardHeightSharedValue,
    animatedCreditCardHeight,
    animatedMasterCardHeight,
  };
};
