import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, Switch, StyleSheet } from 'react-native';

export default function App() {
  const [postre, setPostre] = useState('');
  const [imagen, setImagen] = useState(require('./assets/default.jpg'));
  const [fondoClaro, setFondoClaro] = useState(true);
  const [ingrediente, setIngrediente] = useState(false);

  const cambiarImagen = () => {
    if (postre.toLowerCase() === 'pastel') {
      setImagen(require('./assets/pastel.jpg'));
    } else if (postre.toLowerCase() === 'helado') {
      setImagen(require('./assets/helado.jpg'));
    } else {
      setImagen(require('./assets/default.jpg'));
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: ingrediente ? '#9a5833' : 'fff' }]}> 
      <Text style={styles.title}>Selecciona tu postre favorito</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe un postre... (pastel, helado, etc.)"
        value={postre}
        onChangeText={setPostre}
      />
      <Button title="Mostrar Imagen" onPress={cambiarImagen} />
      <Image source={imagen} style={styles.image} />
      
      <View style={styles.switchContainer}>
        <Text>Agregar chocolate</Text>
        <Switch value={ingrediente} onValueChange={setIngrediente} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginVertical: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
});
