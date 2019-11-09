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
    ballX: new Animated.Value(0),
  };

  componentDidMount() {
    const { ballX, ballY } = this.state;
    Animated.loop(
      Animated.sequence([
        Animated.timing(ballY, {
          duration: 500,
          toValue: 200,
        }),

        Animated.delay(200),

        Animated.timing(ballX, {
          duration: 500,
          toValue: 200,
        }),

        Animated.delay(200),

        Animated.timing(ballY, {
          duration: 500,
          toValue: 0,
        }),

        Animated.delay(200),

        Animated.timing(ballX, {
          duration: 500,
          toValue: 0,
        }),

        Animated.delay(200),
      ]),
      {
        iterations: 2,
      }
    ).start();
  }

  render() {
    const { ballX, ballY } = this.state;
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.ball, { top: ballY, left: ballX }]} />
      </View>
    );
  }
}
