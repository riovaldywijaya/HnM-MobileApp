import * as React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { useQuery, gql } from '@apollo/client';

const GET_PRODUCTS = gql`
  query FindProducts {
    findProducts {
      id
      name
      price
      mainImg
      categoryId
      Images {
        id
        productId
        imgUrl
      }
    }
  }
`;

export default function ListProduct() {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [category, setCategory] = useState('');
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  console.log(data, '<<<<<<<<<<<<');
  if (error) {
    return (
      <View>
        <Text style={styles.errorText}>Something went wrong :(</Text>
      </View>
    );
  }

  return (
    <View>
      {loading ? (
        <View style={{ marginTop: 300 }}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <ScrollView>
          <View style={{ padding: 20 }}>
            <Text style={styles.title}>List Product</Text>
            <Text style={styles.categoriesText}>CATEGORIES</Text>
            <Picker selectedValue={category} style={{ width: 220 }} onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}>
              <Picker.Item label="All" value="" />
              <Picker.Item label="Shirts" value="Shirts" />
              <Picker.Item label="Shorts" value="Shorts" />
              <Picker.Item label="Trousers" value="Trousers" />
              <Picker.Item label="Hoodies & Sweatshirt" value="Hoodies & Sweatshirt" />
            </Picker>

            <Text style={styles.filterText}>
              FILTER & SHORT <Image style={styles.filterImg} source={require('../../assets/filter.png')}></Image>
            </Text>

            <View style={styles.productCardBox}>
              {data.findProducts.map((product) => {
                return <ProductCard product={product} key={product.id} />;
              })}
            </View>
          </View>

          <Footer />
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  errorText: {
    fontSize: 24,
    color: 'red',
    textAlign: 'center',
    marginTop: 300,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 20,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  productCardBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  categoriesText: {
    paddingHorizontal: 5,
    fontSize: 23,
  },
  filterText: {
    fontSize: 23,
    marginLeft: 10,
  },
  filterImg: {
    width: 25,
    height: 25,
  },
});
