import {
  Dimensions,
  StyleSheet,
  View,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import React, { useState } from 'react';

import UserDataRenderer from '../components/UserDataRenderer';
import AnimatedGradientCircle from '../components/GradientCircle';
import ActiveDotsRenderer from '../components/ActiveDotsRenderer';
import { useSharedValue, withTiming } from 'react-native-reanimated';
import { USER_DATA } from '../components/data/userData';
import RootHeader from '../components/Header/RootHeader';

const MainPage = () => {
  const [activeScrollIndex, setActiveScrollIndex] = useState(0);

  //This is for animating gradient circle
  const color1SharedValue = useSharedValue(USER_DATA[0].colors[0]);
  const color2SharedValue = useSharedValue(USER_DATA[0].colors[1]);
  const color3SharedValue = useSharedValue(USER_DATA[0].colors[2]);

  //invoked when user has finished scrolling each individual flatlist content
  const momentumScrollEndHandle = (
    e: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const currentScrollIndex = Math.floor(
      e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width
    );

    color1SharedValue.value = withTiming(
      USER_DATA[currentScrollIndex].colors[0]
    );
    color2SharedValue.value = withTiming(
      USER_DATA[currentScrollIndex].colors[1]
    );
    color3SharedValue.value = withTiming(
      USER_DATA[currentScrollIndex].colors[2]
    );

    setActiveScrollIndex(currentScrollIndex);
  };

  return (
    <View style={styles.container}>
      <RootHeader />
      <View style={styles.secondaryContainer}>
        <AnimatedGradientCircle
          color1SharedValue={color1SharedValue}
          color2SharedValue={color2SharedValue}
          color3SharedValue={color3SharedValue}
        />

        <UserDataRenderer
          activeScrollIndex={activeScrollIndex}
          momentumScrollHandle={momentumScrollEndHandle}
        />

        <ActiveDotsRenderer activeScrollIndex={activeScrollIndex} />
      </View>
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
  },
  secondaryContainer: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
  },
});
