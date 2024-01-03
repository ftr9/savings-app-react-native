import React from 'react';

import {
  Circle,
  LinearGradient,
  Canvas,
  vec,
} from '@shopify/react-native-skia';

import { SharedValue, useDerivedValue } from 'react-native-reanimated';
import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT } from '../constants/Dimensions';

interface IGradientCircleProps {
  color1SharedValue: SharedValue<string>;
  color2SharedValue: SharedValue<string>;
  color3SharedValue: SharedValue<string>;
}

const GradientCircle = ({
  color1SharedValue,
  color2SharedValue,
  color3SharedValue,
}: IGradientCircleProps) => {
  const derivedGradientColors = useDerivedValue(() => {
    return [
      color1SharedValue.value,
      color2SharedValue.value,
      color3SharedValue.value,
    ];
  });

  return (
    <Canvas style={styles.gradientContainer}>
      <Circle
        r={SCREEN_HEIGHT / 4}
        cx={SCREEN_HEIGHT / 4}
        cy={SCREEN_HEIGHT / 4}
      >
        <LinearGradient
          colors={derivedGradientColors}
          start={vec(0, 0)}
          end={vec(SCREEN_HEIGHT / 2, SCREEN_HEIGHT / 2)}
        />
      </Circle>
    </Canvas>
  );
};

export default GradientCircle;

const styles = StyleSheet.create({
  gradientContainer: {
    height: SCREEN_HEIGHT / 2,
    width: SCREEN_HEIGHT / 2,
    position: 'absolute',
    top: '12%',
    left: '-25%',
    borderRadius: 1000,
  },
});
