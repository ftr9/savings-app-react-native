import Animated, {
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { SCREEN_WIDTH } from '../constants/Dimensions';
import { Dimensions, View, Text, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { WIDGET_LIST_DATA } from './data/widgetsListData';
import WidgetCard from './Card/WidgetCard';

interface IRightContentProps {
  translationSharedValue: SharedValue<number>;
  rotationSharedValue: SharedValue<number>;
  opacitySharedValue: SharedValue<number>;
  widgetCloseHandle: () => void;
}

const RightContent = ({
  translationSharedValue,
  rotationSharedValue,
  widgetCloseHandle,
  opacitySharedValue,
}: IRightContentProps) => {
  const eighyPer_ScreenWidth = (80 / 100) * SCREEN_WIDTH;
  const screenHeight = Dimensions.get('window').height;

  const rightContainerAnimatedRotation = useAnimatedStyle(() => {
    return {
      right: `${translationSharedValue.value}%`,
      transform: [{ rotateY: `${rotationSharedValue.value}deg` }],
    };
  });

  const rightContainerWidgetsOpacityStyle = useAnimatedStyle(() => {
    return {
      opacity: opacitySharedValue.value,
    };
  });

  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          height: screenHeight,
          width: eighyPer_ScreenWidth,
          zIndex: 1000,
          right: '-40%',
          // backgroundColor: 'red',
          transform: [{ rotateY: '90deg' }],
        },
        rightContainerAnimatedRotation,
      ]}
    >
      <View
        style={{
          flex: 1,
          width: (95 / 100) * SCREEN_WIDTH,
          backgroundColor: '#141414',
          transform: [{ translateX: eighyPer_ScreenWidth / 2 }],
          padding: 20,
        }}
      >
        {/**Header */}
        <View style={styles.header}>
          <Text
            style={{
              color: 'white',
              fontSize: 24,
            }}
          >
            Widgets
          </Text>
          <Ionicons
            onPress={widgetCloseHandle}
            name="chevron-back"
            size={24}
            color={'white'}
          />
        </View>

        {/**Widgets content */}
        <Animated.View style={rightContainerWidgetsOpacityStyle}>
          <FlatList
            data={WIDGET_LIST_DATA}
            numColumns={2}
            renderItem={({ item }) => {
              return (
                <WidgetCard>
                  <WidgetCard.IconContainer iconBackground={item.color}>
                    {/*@ts-ignore */}
                    <Ionicons name={item.iconName} size={18} color={'white'} />
                  </WidgetCard.IconContainer>
                  <WidgetCard.Type>{item.type}</WidgetCard.Type>
                </WidgetCard>
              );
            }}
          />
        </Animated.View>
      </View>
    </Animated.View>
  );
};

export default RightContent;

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
