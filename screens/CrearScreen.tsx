import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../firebase/Config'

export default function CrearScreen() {
  const [nombre, setNombre] = useState("")
  const [precio, setPrecio] = useState(0)
  const [categoria, setCategoria] = useState("")
  const [stock, setStock] = useState(0)

  async function guardarProducto() {
    const precioConDescuento = precio * 0.9

    await setDoc(doc(db, "productos", nombre), {
  
      precio,
      precioConDescuento,
      categoria,
      stock
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Producto</Text>

      <TextInput placeholder='Nombre' onChangeText={setNombre} style={styles.input} />
      <TextInput placeholder='Precio' onChangeText={txt => setPrecio(+txt)} keyboardType='numeric' style={styles.input} />
      <TextInput placeholder='Categoría' onChangeText={setCategoria} style={styles.input} />
      <TextInput placeholder='Stock' onChangeText={txt => setStock(+txt)} keyboardType='numeric' style={styles.input} />

      <Button title='Guardar Producto' onPress={guardarProducto} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  input: {
    fontSize: 18,
    backgroundColor: '#eee',
    marginVertical: 6,
    padding: 8,
    borderRadius: 6
  }
})
