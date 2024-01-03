import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import InfoCard from './Card/InfoCard';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  measure,
  runOnJS,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const InfoCardsRenderer = () => {
  const info1CardXPosSharedValue = useSharedValue(0);
  const info1CardYPosSharedValue = useSharedValue(0);
  const info2CardRef = useAnimatedRef<Animated.View>();
  const info1CardRef = useAnimatedRef<Animated.View>();

  const [isFullInfoCardVisible, setFullInfoCardVisible] = useState(false);

  const makeFullInfoCardVisible = () => {
    setFullInfoCardVisible(true);
  };

  const animatedCardPos = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: info1CardXPosSharedValue.value },
        { translateY: info1CardYPosSharedValue.value },
      ],
    };
  });

  const panGesture = Gesture.Pan()
    .onChange(e => {
      info1CardYPosSharedValue.value = e.translationY;
      info1CardXPosSharedValue.value = e.translationX;
    })
    .onEnd(e => {
      //get position  of both info cards on the screen
      const info2CardMeasurement = measure(info2CardRef);
      const info1CardMeasurement = measure(info1CardRef);

      //detect if were are around second info card or not
      if (
        info1CardMeasurement.pageX > info2CardMeasurement.pageX &&
        info1CardMeasurement.pageY > info2CardMeasurement.pageY
      ) {
        //if we are around second infocard make fullInfoCardVisible
        runOnJS(makeFullInfoCardVisible)();
      }

      info1CardYPosSharedValue.value = withTiming(0, { duration: 500 });
      info1CardXPosSharedValue.value = withTiming(0, { duration: 500 });
    });

  return (
    <View>
      {!isFullInfoCardVisible ? (
        <View style={styles.halfInfoCardContainer}>
          <Animated.View ref={info2CardRef}>
            <InfoCard name="Spendings" amount="-10%" color="red" isHalfWidth />
          </Animated.View>

          <GestureDetector gesture={panGesture}>
            <Animated.View ref={info1CardRef} style={[animatedCardPos]}>
              <InfoCard
                name="Earnings"
                amount="+20%"
                color="green"
                isHalfWidth
              />
            </Animated.View>
          </GestureDetector>
        </View>
      ) : (
        <View
          style={{
            marginVertical: 20,
          }}
        >
          <InfoCard
            name="Earnings"
            amount="+20%"
            color="green"
            isHalfWidth={false}
          />
          <View
            style={{
              marginBottom: 20,
            }}
          ></View>

          <InfoCard
            name="Spendings"
            amount="-10%"
            color="red"
            isHalfWidth={false}
          />
        </View>
      )}
    </View>
  );
};

export default InfoCardsRenderer;

const styles = StyleSheet.create({
  halfInfoCardContainer: {
    flexDirection: 'row-reverse',
    marginVertical: 20,
    justifyContent: 'space-between',
  },
});
