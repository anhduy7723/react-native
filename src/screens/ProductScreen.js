import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import axios from 'axios';

const ProductScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:80/');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products: ', error);
      }
    };

    fetchProducts();
  }, []);

  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <Image style={styles.productImage} source={{ uri: item.product_image }} />
      <Text style={styles.productTitle}>{item.product_title}</Text>
      <Text style={styles.productPrice}>{item.product_price}</Text>
      <Text style={styles.productQuantity}>Quantity: {item.product_quantity}</Text>
      <Text style={styles.productCategory}>Category: {item.product_category}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item._id}
        renderItem={renderProductItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  productItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
  },
  productImage: {
    width: 100,
    height: 100,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: 'green',
  },
  productQuantity: {
    fontSize: 14,
  },
  productCategory: {
    fontSize: 14,
    fontStyle: 'italic',
  },
});

export default ProductScreen;
