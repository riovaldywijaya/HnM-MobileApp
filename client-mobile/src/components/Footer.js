import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Footer() {
  return (
    <View style={styles.footerBox}>
      <View style={{ marginRight: 400 }}>
        <Text style={{ marginBottom: 10 }}>SHOP</Text>
        <Text style={{ marginBottom: 10 }}>CORPORATE INFO</Text>
        <Text style={{ marginBottom: 10 }}>HELP</Text>
      </View>

      <View style={styles.titleHnmBox}>
        <Text style={styles.titleHnmText}>HENNES</Text>
        <Image source={require('../../assets/hnm.png')} style={styles.imageHnm} />
        <Text style={styles.titleHnmText}>MAURITZ</Text>
      </View>
      <Text style={styles.footerText}>
        {' '}
        H&M`s business concept is to offer fashion and quality at the best price in a sustainable way. H&M has since it was founded in 1947 grown into one of the world`s leading fashion companies. The content of this site is
        copyright-protected and is the property of H&M Hennes & Mauritz AB. Customers Complaint Service, Directorate General of Consumer Protection and Trade Compliance, Ministry of Trade of the Republic of Indonesia, 0853-1111-1010
        (WhatsApp)
      </Text>
      <View style={styles.medsosBox}>
        <AntDesign name="instagram" size={24} color="black" />
        <AntDesign name="facebook-square" size={24} color="black" style={{ marginRight: 120, marginLeft: 120 }} />
        <AntDesign name="youtube" size={24} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageHnm: {
    height: 30,
    width: 45,
    marginLeft: 20,
    marginRight: 20,
    tintColor: 'black',
  },
  titleHnmBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  titleHnmText: {
    textAlign: 'center',
    fontSize: 17,
  },
  footerBox: {
    bottom: 0,
    marginTop: 20,
    width: '100%',
    padding: 30,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    bottom: 0,
    margin: 10,
    width: 400,
    textAlign: 'center',
    fontSize: 12,
    marginBottom: 30,
  },
  medsosBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});
