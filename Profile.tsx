import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

interface Props {
  name: string;
  isActive?: boolean;
  image?: string;
  children: React.ReactNode;
}

function Profile({name, isActive, image = 'sdfsdf', children}: Props) {
  return (
    <View style={isActive && styles.active}>
      <Image source={{uri: image}} />
      <Text>{name}</Text>
      <View>{children}</View>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  active: {},
});
