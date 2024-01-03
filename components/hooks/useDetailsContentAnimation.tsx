import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
} from 'react-native-reanimated';
import { SCREEN_WIDTH } from '../../constants/Dimensions';

export const useDetailsContentAnimation = () => {
  const leftContainerRotationSharedValue = useSharedValue(0);
  const leftContainerTranslationSharedValue = useSharedValue(SCREEN_WIDTH / 2);
  const leftContainerAnimatedRotation = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: leftContainerTranslationSharedValue.value },
        { rotateY: `${leftContainerRotationSharedValue.value}deg` },
      ],
    };
  });

  const rightContainerRotationSharedValue = useSharedValue(90);
  const rightContainerTranslationSharedValue = useSharedValue(-40);
  const rightContainerContentOpacitySharedValued = useSharedValue(0);

  const onMasterCardFlingHandle = () => {
    leftContainerRotationSharedValue.value = withTiming(-90, {
      duration: 1000,
    });

    leftContainerTranslationSharedValue.value = withTiming(
      -((45 / 100) * SCREEN_WIDTH),
      { duration: 1000 }
    );

    rightContainerRotationSharedValue.value = withTiming(0, {
      duration: 1000,
    });

    rightContainerTranslationSharedValue.value = withTiming(55, {
      duration: 1000,
    });

    rightContainerContentOpacitySharedValued.value = withDelay(
      1200,
      withTiming(1, {
        duration: 1000,
      })
    );
  };

  const widgetCloseHandle = () => {
    rightContainerRotationSharedValue.value = withTiming(90, {
      duration: 950,
    });

    rightContainerTranslationSharedValue.value = withTiming(-40, {
      duration: 900,
    });

    leftContainerRotationSharedValue.value = withTiming(0, {
      duration: 1000,
    });

    leftContainerTranslationSharedValue.value = withTiming(SCREEN_WIDTH / 2, {
      duration: 1000,
    });

    rightContainerContentOpacitySharedValued.value = withTiming(0);
  };

  return {
    leftContainerAnimatedRotation,
    leftContainerRotationSharedValue,
    leftContainerTranslationSharedValue,
    rightContainerContentOpacitySharedValued,
    rightContainerRotationSharedValue,
    rightContainerTranslationSharedValue,
    onMasterCardFlingHandle,
    widgetCloseHandle,
  };
};
