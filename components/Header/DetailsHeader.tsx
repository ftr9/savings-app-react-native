import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const AVATAR_IMG_SRC =
  'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=400';

const DetailsHeader = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="chevron-back" size={24} color={'white'} />
      <Image
        source={{
          uri: AVATAR_IMG_SRC,
        }}
        style={styles.avatar}
        resizeMode="cover"
      />
    </View>
  );
};

export default DetailsHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 1000,
  },
});
