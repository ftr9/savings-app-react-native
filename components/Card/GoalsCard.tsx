import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import React from 'react';
import { Skia, Path, Canvas } from '@shopify/react-native-skia';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';

const AnimatedImageBackground =
  Animated.createAnimatedComponent(ImageBackground);

const WAVE_BG_URI =
  'https://img.freepik.com/free-vector/gradient-black-background-with-wavy-lines_23-2149159607.jpg?size=626&ext=jpg&ga=GA1.1.1764983867.1704076007&semt=ais';

const GoalsCard = () => {
  const path = Skia.Path.Make();
  path.addCircle(50, 50, 35);

  return (
    <AnimatedImageBackground
      entering={FadeInDown.delay(300).duration(400).springify()}
      source={{
        uri: WAVE_BG_URI,
      }}
      resizeMode="cover"
      style={styles.container}
    >
      <View style={styles.doughNutContainer}>
        <View style={styles.doughNutTextContainer}>
          <Text style={styles.doughNutText}>75%</Text>
        </View>
        <Canvas
          style={{
            flex: 1,
          }}
        >
          <Path
            path={path}
            color={'#98E0E1'}
            style={'stroke'}
            strokeWidth={3}
            start={0}
            end={0.8}
            strokeCap={'round'}
          />
        </Canvas>
      </View>

      <View
        style={{
          flex: 1,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            color: 'white',
            marginBottom: 6,
          }}
        >
          Goal
        </Text>
        <Text style={{ color: 'white' }}>$12,284.32 of $20,232.00</Text>
      </View>
      <TouchableOpacity style={styles.rightContentIcon}>
        <Ionicons name="arrow-forward" size={14} color={'white'} />
      </TouchableOpacity>
    </AnimatedImageBackground>
  );
};

export default GoalsCard;

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 20,
    paddingVertical: 10,
    paddingRight: 20,
    backgroundColor: '#1E1E1E',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  doughNutContainer: {
    height: 100,
    width: 100,
  },
  doughNutTextContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doughNutText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 18,
  },
  rightContentIcon: {
    height: 30,
    width: 30,
    borderRadius: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#212529',
  },
});
