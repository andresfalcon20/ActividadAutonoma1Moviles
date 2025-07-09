import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/Config';

export default function LeerScreen() {
  const [productos, setProductos] = useState([]);
  const [totalInventario, setTotalInventario] = useState(0);

  async function leerDatos() {
    let lista: any[] = [];
    let total = 0;

    const querySnapshot = await getDocs(collection(db, 'productos'));
    querySnapshot.forEach((doc) => {
      const producto = doc.data();
      lista.push(producto);
      total += producto.precio * producto.stock;
    });

    setProductos(lista);
    setTotalInventario(total);
  }

  useEffect(() => {
    leerDatos();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inventario</Text>
      <FlatList
        data={productos}
        renderItem={({ item }: any) => (
          <View style={styles.card}>
            <Text>PRODUCTO:   {item.nombre}</Text>
            <Text>Precio: ${item.precio}</Text>
            <Text>Descuento: ${item.precioConDescuento}</Text>
            <Text>Categoría: {item.categoria}</Text>
            <Text>Stock: {item.stock}</Text>
          </View>
        )}
      />
      <Text style={styles.total}>Total Inventario: ${totalInventario.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  card: {
    backgroundColor: '#ddd',
    marginBottom: 10,
    padding: 10,
    borderRadius: 6,
  },
  total: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
