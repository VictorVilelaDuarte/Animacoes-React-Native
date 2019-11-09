import React, { Component } from 'react';
import { StyleSheet, View, Animated } from 'react-native';

// Animated-> Animated.View, Animated.Text, Animated.Image, Animated.ScrollView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  ball: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#F00',
  },
});

export default class App extends Component {
  state = {
    ballY: new Animated.Value(0),
  };

  componentDidMount() {
    const { ballY } = this.state;
    Animated.timing(ballY, {
      toValue: 500,
      duration: 1000,
    }).start();
  }

  render() {
    const { ballY } = this.state;
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.ball, { top: ballY }]} />
      </View>
    );
  }
}
