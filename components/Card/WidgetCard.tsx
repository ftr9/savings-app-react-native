import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const WidgetCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <View
      style={{
        width: '50%',
        marginBottom: 20,
      }}
    >
      {children}
    </View>
  );
};

const IconContainer = ({
  children,
  iconBackground,
}: {
  children: React.ReactNode;
  iconBackground: string;
}) => {
  return (
    <View
      style={{
        height: 100,
        width: 100,
        borderRadius: 30,
        backgroundColor: '#1E1E1E',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <View
        style={{
          height: 40,
          width: 40,
          borderRadius: 1000,
          backgroundColor: iconBackground,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {children}
      </View>
    </View>
  );
};

const Type = ({ children }: { children: string }) => {
  return (
    <Text style={{ color: 'white', textAlign: 'center', marginTop: 10 }}>
      {children}
    </Text>
  );
};

WidgetCard.IconContainer = IconContainer;
WidgetCard.Type = Type;

export default WidgetCard;

const styles = StyleSheet.create({});
