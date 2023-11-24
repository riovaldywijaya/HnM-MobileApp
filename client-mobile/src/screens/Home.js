import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Footer from '../components/Footer';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <ScrollView>
        <View style={[styles.container]}>
          <TouchableOpacity onPress={() => navigation.navigate('ListProduct')}>
            <Text style={{ textAlign: 'center', marginTop: 50 }}>Register & get 20% off your first purchase. Use code: NEW20</Text>
            <Image style={styles.imageLandingPage} source={require('../../assets/2.png')}></Image>
            <Image style={styles.imageLandingPage2} source={require('../../assets/3.png')}></Image>
            <Image style={styles.imageLandingPage} source={require('../../assets/4.png')}></Image>
            <Image style={styles.imageLandingPage3} source={require('../../assets/5.png')}></Image>
            <Image style={styles.imageLandingPage} source={require('../../assets/6.png')}></Image>
            <Image style={styles.imageLandingPage4} source={require('../../assets/7.png')}></Image>
            <Image style={styles.imageLandingPage} source={require('../../assets/8.png')}></Image>
          </TouchableOpacity>
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageLandingPage: {
    width: 450,
    height: 300,
    marginTop: 20,
  },
  imageLandingPage2: {
    width: 450,
    height: 150,
    marginTop: 20,
  },
  imageLandingPage3: {
    width: 450,
    height: 100,
    marginTop: 20,
  },
  imageLandingPage4: {
    width: 450,
    height: 80,
    marginTop: 20,
  },
});
