import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const RootHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, color: 'white' }}>Savings</Text>
      <TouchableOpacity style={styles.addBtn}>
        <Ionicons name="add-outline" size={24} color={'white'} />
      </TouchableOpacity>
    </View>
  );
};

export default RootHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
  },
  addBtn: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1000,
    backgroundColor: '#212529',
  },
});
