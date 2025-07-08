import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/Config';

export default function EditarScreen() {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState(0);
  const [stock, setStock] = useState(0);

  async function editarProducto() {
    const precioConDescuento = precio * 0.9;

    await updateDoc(doc(db, 'productos', nombre), {
      precio,
      stock,
      precioConDescuento,
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Producto</Text>

      <TextInput placeholder='Nombre del producto' onChangeText={setNombre} style={styles.input} />
      <TextInput placeholder='Nuevo precio' onChangeText={txt => setPrecio(+txt)} keyboardType='numeric' style={styles.input} />
      <TextInput placeholder='Nuevo stock' onChangeText={txt => setStock(+txt)} keyboardType='numeric' style={styles.input} />

      <Button title='Actualizar Producto' onPress={editarProducto} color='green' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  input: {
    fontSize: 18,
    backgroundColor: '#eee',
    marginVertical: 6,
    padding: 8,
    borderRadius: 6,
  },
});
