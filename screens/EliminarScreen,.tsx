import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase/Config';

export default function EliminarScreen() {
  const [nombre, setNombre] = useState('');

  async function eliminarProducto() {
    await deleteDoc(doc(db, 'productos', nombre));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eliminar Producto</Text>

      <TextInput placeholder='Nombre del producto' onChangeText={setNombre} style={styles.input} />
      <Button title='Eliminar Producto' onPress={eliminarProducto} color='red' />
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
