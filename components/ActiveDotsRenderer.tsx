import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { USER_DATA } from './data/userData';

const ActiveDotsRenderer = ({
  activeScrollIndex,
}: {
  activeScrollIndex: number;
}) => {
  return (
    <View style={styles.container}>
      {/**Generate Dots equivalent to size of USER_DATA */}
      {new Array(USER_DATA.length).fill('a').map((_, index) => {
        const isActive = activeScrollIndex === index;

        return (
          <View
            key={index}
            style={[
              styles.dots,
              { backgroundColor: isActive ? 'white' : 'gray' },
            ]}
          ></View>
        );
      })}
    </View>
  );
};

export default ActiveDotsRenderer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
  dots: {
    height: 8,
    marginHorizontal: 5,
    marginTop: 20,
    borderRadius: 1000,
    width: 8,
  },
});
