import Animated, { ZoomIn, runOnJS } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
const MASTER_CARD_LOGO_URI =
  "'https://t4.ftcdn.net/jpg/04/85/70/37/240_F_485703743_Hq3YqS1pIW8B86uPo4dEOrtZBvzdBqEg.jpg";

interface IFullMasterCardProps {
  onMasterCardFling: () => void;
}

const FullMasterCard = ({ onMasterCardFling }: IFullMasterCardProps) => {
  const flingGesture = Gesture.Fling().onFinalize(e => {
    //indicates we flinged left only...
    if (e.state === 5) {
      runOnJS(onMasterCardFling)();
    }
  });

  return (
    <GestureDetector gesture={flingGesture}>
      <AnimatedLinearGradient
        entering={ZoomIn.springify().mass(0.5).damping(9).delay(1000)}
        colors={['#212529', '#495057', '#212529', '#495057']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.container}
      >
        {/**Top Part */}
        <View style={styles.topAndBottomPart}>
          <Text style={{ fontSize: 16, color: 'white' }}>Master Card</Text>
          <View
            style={{
              transform: [{ rotateZ: '90deg' }],
            }}
          >
            <Ionicons name="wifi" color={'white'} size={24} />
          </View>
        </View>
        {/**Middle part */}
        <Text
          style={{
            textAlign: 'right',
            color: 'white',
          }}
        >
          Debt
        </Text>

        {/**Bottom part */}
        <View style={styles.topAndBottomPart}>
          <Text style={styles.secretNumber}>****3289</Text>
          <Image
            source={{
              uri: MASTER_CARD_LOGO_URI,
            }}
            height={30}
            width={30}
            resizeMode="contain"
          />
        </View>
      </AnimatedLinearGradient>
    </GestureDetector>
  );
};

export default FullMasterCard;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: 160,
    backgroundColor: '#1E1E1E',
    borderRadius: 20,
    justifyContent: 'space-between',
  },
  topAndBottomPart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  secretNumber: {
    color: 'white',
    fontSize: 18,
    letterSpacing: 3,
    fontWeight: '700',
  },
});
