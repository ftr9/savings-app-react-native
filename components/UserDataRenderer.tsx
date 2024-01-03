import {
  StyleSheet,
  View,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import React from 'react';
import { USER_DATA } from './data/userData';

import UserDataContent from './UserDataContent';
import { generateUserDataSnapOffsets } from '../utils/generateUserDataSnapOffsets';

interface IuserDataRenderer {
  momentumScrollHandle: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
  activeScrollIndex: number;
}

const UserDataRenderer = ({
  momentumScrollHandle,
  activeScrollIndex,
}: IuserDataRenderer) => {
  return (
    <View>
      <FlatList
        horizontal
        onMomentumScrollEnd={momentumScrollHandle}
        snapToOffsets={generateUserDataSnapOffsets(USER_DATA.length)}
        decelerationRate={'normal'}
        keyExtractor={(_, index) => `${index}`}
        data={USER_DATA}
        renderItem={({ item }) => {
          return (
            <UserDataContent
              {...item}
              isInView={item.id === activeScrollIndex}
            />
          );
        }}
      />
    </View>
  );
};

export default UserDataRenderer;

const styles = StyleSheet.create({});
