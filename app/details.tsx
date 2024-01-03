import { StyleSheet, View, Text, Dimensions, FlatList } from 'react-native';
import React from 'react';
import DetailsHeader from '../components/Header/DetailsHeader';

import GoalsCard from '../components/Card/GoalsCard';
import MasterCardCreditCard from '../components/Card/MasterCardCreditCard';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants/Dimensions';
import Animated from 'react-native-reanimated';
import InfoCardsRenderer from '../components/InfoCardsRenderer';
import { useDetailsContentAnimation } from '../components/hooks/useDetailsContentAnimation';
import RightContent from '../components/RightContent';

const Details = () => {
  const {
    leftContainerAnimatedRotation,
    rightContainerContentOpacitySharedValued,
    rightContainerRotationSharedValue,
    rightContainerTranslationSharedValue,
    onMasterCardFlingHandle,
    widgetCloseHandle,
  } = useDetailsContentAnimation();

  return (
    <View style={styles.container}>
      <RightContent
        translationSharedValue={rightContainerTranslationSharedValue}
        rotationSharedValue={rightContainerRotationSharedValue}
        opacitySharedValue={rightContainerContentOpacitySharedValued}
        widgetCloseHandle={widgetCloseHandle}
      />

      <Animated.View
        style={[
          {
            //backgroundColor: 'red',
            flex: 1,
          },
          leftContainerAnimatedRotation,
        ]}
      >
        <View
          style={{
            transform: [{ translateX: -SCREEN_WIDTH / 2 }],
          }}
        >
          <DetailsHeader />
          <MasterCardCreditCard onMasterCardFling={onMasterCardFlingHandle} />
          <InfoCardsRenderer />
          <GoalsCard />
        </View>
      </Animated.View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    position: 'relative',
    height: SCREEN_HEIGHT,
  },
});
