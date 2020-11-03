import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ShadowView from 'react-native-simple-shadow-view'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      y: 0,
      z: 10
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        y: this.state.y + 0.1,
        z: this.state.z + 0.2
      })
    }, 10);
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <Image
          style={{ width: this.state.z, height: this.state.z, position: 'absolute', top: this.state.y }}
          source={{
            uri: 'https://p.kindpng.com/picc/s/289-2890991_doge-face-transparent-hd-png-download.png'

          }}
        /> */}

        <LinearGradient colors={['#E53430', '#FEB37E', '#f5f5f5']} style={[styles.linearGradient, styles.supercenter]}>

          <ShadowView style={{
            height: 300, width: 180, backgroundColor: 'white', borderRadius: 16, padding: 20, transform: [{ rotate: `${this.state.z}deg`, }],
            shadowColor: '#E53430',
            shadowOpacity: 1,
            shadowRadius: 100,
            shadowOffset: { width: 0, height: 0 },
            marginTop: 100
          }}>

            <View>
              <Text>$1,394</Text>
              <Text>+10% compared to</Text>
              <Text>last week</Text>
            </View>
            <View>
              <Text>weekly</Text>
              <Text>\/</Text>
            </View>

            <View>
              <Text>Table</Text>
            </View>


          </ShadowView>



          <View>
            <Text>stats</Text>
          </View>

          <View>
            <Text>$1,394</Text>
            <Text>+10% compared to</Text>
            <Text>last week</Text>
          </View>
          <View>
            <Text>$1,394</Text>
            <Text>+10% compared to</Text>
            <Text>last week</Text>
          </View>

        </LinearGradient>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  supercenter: {
    alignItems: 'center',
    justifyContent: 'center',

  },
  linearGradient: {
    flex: 1,
    borderRadius: 5,
    width: '100%',
    height: '100%'
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});