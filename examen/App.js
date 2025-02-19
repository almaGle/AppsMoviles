import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [productos, setproductos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAñadirProducto = () => {
    if (inputValue.trim()) {
      setproductos([...productos, { name: inputValue, purchased: false }]);
      setInputValue('');
    }
  };

  const handleComprado = (index) => {
    const updatedproductos = [...productos];
    updatedproductos[index].purchased = !updatedproductos[index].purchased;
    setproductos(updatedproductos);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de compras</Text>
      <View style={styles.TopContainer}>
      <StatusBar style="auto" />
      <View>
        <TextInput
          style={styles.input}
          placeholder="Ingrese un producto..."
          value={inputValue}
          onChangeText={setInputValue}
        />
        <Button
          title="Añadir Producto"
          color="#9d8189"
          onPress={handleAñadirProducto}
        />
      </View>
      </View>
      <View style={styles.BottomContainer}>
        <Text style={styles.text}>Lista de productos:</Text>
        {productos.map((product, index) => (
          <View key={index} style={styles.productItem}>
            <Text style={product.purchased ? styles.purchasedText : styles.productText}>
              {product.name}
            </Text>
            <Button
              title={product.purchased ? "Comprado" : "Marcar como comprado"}
              onPress={() => handleComprado(index)}
              color={product.purchased ? "#cdb4db" : "#83c5be"}
            />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe5d9',
    alignItems: 'center',
    
  },
  titulo:{
    backgroundColor: '#f4acb7',
    width: "100%",
    textAlign: 'center',
    paddingTop: 30,
    fontSize: 35
  },
  TopContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 20,
    borderRadius: 10,

  },
  BottomContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ''
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: 200,
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
    width: '100%',
    backgroundColor: '#f4acb7',
    padding: 10,
    borderRadius: 20
  },
  productText: {
    fontSize: 16,
  },
  purchasedText: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: 'gray',
    
  },
});
