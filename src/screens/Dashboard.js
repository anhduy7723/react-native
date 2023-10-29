import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = ({ navigation }) => {
  const handleViewProducts = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'ProductScreen' }],
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>DANH SÁCH YÊU THÍCH</Text>
      <Text style={styles.regularText}>
        Chưa có mặt hàng yêu thích. Nhấp vào biểu tượng yêu thích để lưu mặt hàng.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleViewProducts}>
        <Text style={styles.buttonText}>Xem sản phẩm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Arial', // Your custom font here
  },
  regularText: {
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
