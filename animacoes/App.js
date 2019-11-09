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

const ballY = new Animated.Value(0);
const ballX = Animated.divide(ballY, 2);

export default class App extends Component {
  state = {
    ballY,
    ballX,
  };

  componentDidMount() {
    Animated.decay(this.state.ballY, {
      velocity: 1.4,
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.ball,
            { top: this.state.ballY, left: this.state.ballX },
          ]}
        />
      </View>
    );
  }
}
