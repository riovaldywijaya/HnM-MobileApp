import * as React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View, StyleSheet, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Footer from '../components/Footer';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useQuery, gql } from '@apollo/client';

const GET_PRODUCT = gql`
  query FindDetailProduct($findDetailProductId: ID!) {
    findDetailProduct(id: $findDetailProductId) {
      product {
        id
        name
        slug
        description
        price
        mainImg
        categoryId
        UserMongoId
        createdAt
        updatedAt
        Images {
          id
          productId
          imgUrl
        }
        Category {
          id
          name
        }
      }
      user {
        _id
        username
        email
        role
        phoneNumber
        address
      }
    }
  }
`;

export default function DetailProduct({ route }) {
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: {
      findDetailProductId: route.params.productId,
    },
  });

  function formatRupiah(price) {
    let formatPrice = price.toLocaleString('id-ID', {
      style: 'currency',
      currency: 'IDR',
    });

    let result = formatPrice.replace('.', ',');

    return result;
  }

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
            <View style={styles.mainImageBox}>
              <Image source={{ uri: data.findDetailProduct.product.mainImg, width: 400, height: 700 }} />
            </View>
            <View style={styles.sizeBox}>
              <Text style={styles.productTitle}>{data.findDetailProduct.product.name}</Text>
              <Text style={styles.detailEntityText}>Category : {data.findDetailProduct.product.Category.name}</Text>
              <Text style={styles.detailEntityText}>User : {data.findDetailProduct.user.username}</Text>
              <Text style={styles.detailEntityText}>Email : {data.findDetailProduct.user.email}</Text>
              <Text style={styles.detailEntityText}>{formatRupiah(data.findDetailProduct.product.price)}</Text>
              <Text style={styles.detailEntityText}>Select size</Text>
              <Picker selectedValue={''} style={{ width: 220 }}>
                <Picker.Item label="XS" value="" />
                <Picker.Item label="S" value="s" />
                <Picker.Item label="M" value="m" />
                <Picker.Item label="L" value="l" />
                <Picker.Item label="XL" value="xl" />
                <Picker.Item label="XXL" value="xxl" />
              </Picker>
              <TouchableOpacity style={styles.touchableAdd}>
                <SimpleLineIcons name="handbag" size={20} color={'white'} />
                <Text style={styles.addText}>ADD</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.descriptionBox}>
              <Text style={styles.descriptionText}>{data.findDetailProduct.product.description}</Text>
            </View>
            <View style={styles.imgAddBox}>
              <Image source={{ uri: data.findDetailProduct.product.Images[0].imgUrl, width: 260, height: 450 }} />
              <Image source={{ uri: data.findDetailProduct.product.Images[1].imgUrl, width: 260, height: 450 }} />
              <Image source={{ uri: data.findDetailProduct.product.Images[2].imgUrl, width: 260, height: 450 }} />
              <Image source={{ uri: data.findDetailProduct.product.Images[3].imgUrl, width: 260, height: 450 }} />
              <View style={{ marginLeft: '20%' }}>
                <Image source={{ uri: data.findDetailProduct.product.Images[4].imgUrl, width: 300, height: 450 }} />
              </View>
            </View>
            <Text style={styles.detailsDelivery}>DETAILS</Text>
            <Text style={styles.detailsDelivery}>DELIVERY AND PAYMENT</Text>
            <Text style={styles.othersText}>Others Also Bought</Text>

            <View style={styles.productCardBox}>
              <View>
                <Image source={{ uri: 'https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/cea4d97c227447590126f2861d6f12918269f73a_xxl-1.jpg' }} style={[styles.image, { marginRight: 20 }]} />
                <Text style={styles.marginBot5}>Patterned Poplin Top</Text>
                <Text style={styles.marginBot5}>Rp1,299,000</Text>
                <View style={styles.colorBox}>
                  <View style={styles.circle1}></View>
                  <View style={styles.circle2}></View>
                  <View style={styles.circle3}></View>
                </View>
                <Text style={styles.marginBot5}>New Arrivals</Text>
              </View>
              <View>
                <Image source={{ uri: 'https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/6cad9a2307d3c64fabe4f64f6f02f569fbe1ff7e_xxl-1.jpg' }} style={styles.image} />
                <Text style={styles.marginBot5}>Sequin-disc Top</Text>
                <Text style={styles.marginBot5}>Rp3,799,000</Text>
                <View style={styles.colorBox}>
                  <View style={styles.circle1}></View>
                  <View style={styles.circle2}></View>
                  <View style={styles.circle3}></View>
                </View>
                <Text style={styles.marginBot5}>New Arrivals</Text>
              </View>
            </View>
          </View>

          <Footer />
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  detailEntityText: {
    fontSize: 22,
    marginBottom: 10,
  },
  errorText: {
    fontSize: 24,
    color: 'red',
    textAlign: 'center',
    marginTop: 300,
  },
  mainImageBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsDelivery: {
    textAlign: 'center',
    marginTop: 30,
    fontWeight: '700',
  },
  othersText: {
    fontSize: 19,
    marginTop: 50,
  },
  productCardBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 30,
  },
  sizeBox: {
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 30,
    padding: 30,
  },
  descriptionBox: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 30,
    marginTop: 30,
    marginBottom: 30,
  },
  descriptionText: {
    fontSize: 20,
    textAlign: 'center',
  },
  imgAddBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  productTitle: {
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 10,
  },
  touchableAdd: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    padding: 10,
    width: '50%',
    marginTop: 10,
  },
  addText: {
    color: 'white',
    marginLeft: 5,
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
    width: 265,
    height: 390,
    marginBottom: 20,
  },
  marginBot5: {
    marginBottom: 5,
  },
});
