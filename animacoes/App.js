/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { StyleSheet, View, Animated, PanResponder } from 'react-native';

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
    ball: new Animated.ValueXY({ x: 0, y: 0 }),
  };

  componentWillMount() {
    const { ball } = this.state;

    this.panResponder = PanResponder.create({
      onPanResponderGrant: (e, gestureState) => {
        ball.setOffset({
          x: ball.x._value,
          y: ball.y._value,
        });
        ball.setValue({ x: 0, y: 0 });
      },
      onMoveShouldSetPanResponder: (e, gestureState) => true,
      onPanResponderMove: Animated.event([
        null,
        {
          dx: ball.x,
          dy: ball.y,
        },
      ]),

      onPanResponderRelease: () => {
        ball.flattenOffset();
      },
    });
  }

  render() {
    const { ball } = this.state;
    return (
      <View style={styles.container}>
        <Animated.View
          {...this.panResponder.panHandlers}
          style={[
            styles.ball,
            { transform: [{ translateX: ball.x }, { translateY: ball.y }] },
          ]}
        />
      </View>
    );
  }
}
