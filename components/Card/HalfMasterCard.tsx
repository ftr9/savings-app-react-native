import { View, Text, StyleSheet } from 'react-native';
import { FadeInUp, SharedValue, SlideInDown } from 'react-native-reanimated';
import { useState } from 'react';
import Animated, {
  withSpring,
  runOnJS,
  FadeInDown,
  withDelay,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

interface IHalfMasterCard {
  creditCardHeightSharedValue: SharedValue<number>;
  masterCardHeightSharedValue: SharedValue<number>;
  setMasterCardVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const HalfMasterCard = ({
  creditCardHeightSharedValue,
  setMasterCardVisible,
  masterCardHeightSharedValue,
}: IHalfMasterCard) => {
  const [isVisible, setVisible] = useState(true);

  const setHalfAndFullMasterCardVisibility = () => {
    setVisible(false);
    //set FullMaster Card  visible to true as well
    setMasterCardVisible(true);
  };

  const flingGesture = Gesture.Fling().onFinalize(e => {
    //if it is flinged up direction
    if (e.state === 1) {
      //set credit card to its original height
      creditCardHeightSharedValue.value = withSpring(160, { duration: 1500 });
      //set master card container height
      masterCardHeightSharedValue.value = withDelay(
        500,
        withSpring(160, { duration: 1000 })
      );
      //make master card visible
      runOnJS(setHalfAndFullMasterCardVisibility)();
    }
  });

  return (
    <GestureDetector gesture={flingGesture}>
      <View>
        {isVisible && (
          <Animated.View
            entering={FadeInDown.mass(0.5).delay(100)}
            style={styles.container}
          >
            <Text style={{ fontSize: 16, color: 'white' }}>Master Card</Text>
            <View
              style={{
                transform: [{ rotateZ: '90deg' }],
              }}
            >
              <Ionicons name="wifi" color={'white'} size={24} />
            </View>
          </Animated.View>
        )}
      </View>
    </GestureDetector>
  );
};

export default HalfMasterCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'flex-start',
    height: 100,
    backgroundColor: '#1E1E1E',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
