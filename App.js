import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Circle } from "react-native-svg";
import { Button } from "react-native-web";

export default function App() {
  return (
    <View style={styles.container}>
        <LinearGradient
        colors={["rgba(0, 204, 249, 0.36)", "#C7F4F6"]}
        style={styles.background}
      ></LinearGradient>
      <StatusBar style="auto" />
      <View style={styles.view1}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="140"
          height="140"
          viewBox="0 0 140 140"
          fill="none"
        >
          <circle cx="70" cy="70" r="62.5" stroke="black" strokeWidth="15" />
        </svg>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text1}>GROW {"\n"} YOUR BUSINESS</Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text2}>We will help you to grow your business using online server</Text>
      </View>
      <View style={styles.view4}>
        <button role="button" style={styles.buttonLogin}>
          LOGIN
        </button>
        <button role="button" style={styles.buttonSignUp}>
          SIGN UP
        </button>
      </View>
      <View style={styles.view5}>
        <Text style={styles.text3}>HOW WE WORK?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  background: {
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },

  view1: {
    position: 'absolute',
    width: 142,
    height: 142,
    top: 69,
    left: 109,
    border: 15
  },

  view2: {
    position: 'absolute',
    top: 280,
  },

  text1: {
    fontFamily: 'Roboto',
    fontSize: 25,
    fontWeight: 700,
    lineHeight: 29,
    letterSpacing: 0,
    textAlign: "center",
  },

  view3: {
    position: 'absolute',
    bottom: 200,
  },

  text2: {
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: 700,
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: "center",
  },

  view4: {
    position: 'absolute',
    bottom: 110,
    flexDirection: 'row',
  },

  buttonLogin: {
    backgroundColor: '#E3C000',
    width: 125,
    height: 45,
    marginRight: 75,
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 700,
    textAlign: "center",
  },

  buttonSignUp: {
    backgroundColor: '#E3C000',
    width: 125,
    height: 45,
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 700,
    textAlign: "center",
  },

  view5: {
    position: 'absolute',
    bottom: 65,
  },

  text3: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 700,
    textAlign: "center",
  },
});
