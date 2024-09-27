import React, { memo, useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  box: {
    height: '100%',
    display: "flex",
    justifyContent: "center",
    paddingHorizontal: "10%",
    alignItems: "center",
    gap: 10,

  },
  container: {
    width: '90%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#4C33CC'
  },
  text: {
    fontSize: 19,
    color: '#4C33CC',
    fontWeight: "500"
  }
});

const clamp = (n, min, max) => {
  if (n < min) {
    return min;
  }
  if (n > max) {
    return max;
  }
  return n;
};

const queue = (() => {
  const pending = [];

  function next() {
    const fn = pending.shift();
    if (fn) {
      fn(next);
    }
  }

  return (fn) => {
    pending.push(fn);
    if (pending.length === 1) {
      next();
    }
  };
})();

const NProgressBase = ({
  enabled = false,
  minimum = 0.8,
  trickleSpeed = 200,
  height = 6,
  backgroundColor = "#4C33CC",
  fadeOutDuration = 300,
  loadingText= "Carregando..."
}) => {
  const status = useRef();
  const [width, setWidth] = useState(0);
  const [progressAnim] = useState(new Animated.Value(0));
  const [opacityAnim] = useState(new Animated.Value(0));

  const progressStyle = {
    backgroundColor: '#4C33CC',
    height,
    opacity: opacityAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    }),
    transform: [
      {
        translateX: progressAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [width * -0.5, 0] // Alterado de width * -0.05 para width * -0.5
        })
      },
      {
        scaleX: progressAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1]
        })
      }
    ]
  };

  const start = () => {
    if (!status.current) {
      set(0);
    }

    const work = () => {
      setTimeout(() => {
        if (!status.current) {
          return;
        }
        inc();
        work();
      }, trickleSpeed);
    };

    work();
  };

  const stop = () => {
    if (!status.current) {
      return;
    }

    inc(0.3 + 0.5 * Math.random());
    set(1);
  };

  const set = (n) => {
    n = clamp(n, minimum, 1);
    status.current = n === 1 ? undefined : n;

    queue(next => {
      opacityAnim.setValue(1);
      Animated.timing(progressAnim, {
        toValue: n === 1 ? 1 : status.current || 0,
        useNativeDriver: true
      }).start(() => {
        if (n === 1) {
          Animated.timing(opacityAnim, {
            duration: fadeOutDuration,
            toValue: 0,
            useNativeDriver: true
          }).start(() => {
            progressAnim.setValue(0);
          });
        } else {
          next();
        }
      });
    });
  };

  const inc = (amount) => {
    let n = status.current;

    if (!n) {
      start();
    } else if (n <= 1) {
      if (typeof amount !== "number") {
        if (n >= 0 && n < 0.2) {
          amount = 0.1;
        } else if (n >= 0.2 && n < 0.5) {
          amount = 0.04;
        } else if (n >= 0.5 && n < 0.8) {
          amount = 0.02;
        } else if (n >= 0.8 && n < 0.99) {
          amount = 0.005;
        } else {
          amount = 0;
        }
      }

      n = clamp(n + amount, 0, 0.994);
      set(n);
    }
  };

  useEffect(() => {
    if (width) {
      if (enabled) {
        start();
      } else {
        stop();
      }
    }
  }, [enabled, width]);

  return (
    <View style={styles.box}>
      <Text style={styles.text}>{loadingText}</Text>
      <View
        style={styles.container}
        onLayout={(e) => setWidth(e.nativeEvent.layout.width)}
      >
        <Animated.View style={progressStyle} />
      </View>
    </View>
  );
};

export const NProgressCustom = memo(NProgressBase);
