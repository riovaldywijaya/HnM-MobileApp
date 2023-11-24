import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProductCard({ product }) {
  const navigation = useNavigation();

  function formatRupiah(price) {
    let formatPrice = price.toLocaleString('id-ID', {
      style: 'currency',
      currency: 'IDR',
    });

    let result = formatPrice.replace('.', ',');

    return result;
  }

  return (
    <View>
      <View style={styles.productBox}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('DetailProduct', {
              productId: product.id,
            })
          }
        >
          <Image source={{ uri: product.mainImg }} style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.marginBot5}>{product.name}</Text>
        <Text style={styles.marginBot5}>{formatRupiah(product.price)}</Text>
        <View style={styles.colorBox}>
          <View style={styles.circle1}></View>
          <View style={styles.circle2}></View>
          <View style={styles.circle3}></View>
        </View>
        <Text style={styles.marginBot5}>New Arrivals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productBox: {
    marginRight: 20,
    marginTop: 30,
  },
  colorBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 5,
  },
  circle1: {
    width: 10,
    height: 10,
    borderRadius: 25,
    backgroundColor: 'maroon',
    marginRight: 3,
  },
  circle2: {
    width: 10,
    height: 10,
    borderRadius: 25,
    backgroundColor: 'green',
    marginRight: 3,
  },
  circle3: {
    width: 10,
    height: 10,
    borderRadius: 25,
    backgroundColor: 'skyblue',
    marginRight: 3,
  },
  image: {
    width: 260,
    height: 480,
    marginBottom: 20,
  },
  marginBot5: {
    marginBottom: 5,
  },
});
