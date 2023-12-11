import React from 'react';
import { StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

export default function LottieSnowMan() {
  return (
    <LottieView
      style={styles.lottieStyle}
      source={require('../../assets/lottie/snowman.json')}
      autoPlay
      loop={true}
    />
  );
}

const styles = StyleSheet.create({
  lottieStyle: {
    width: '90%',
    height: '50%',
  },
});
