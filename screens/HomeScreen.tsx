import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

export default function HomeScreen({ navigation }: any) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Gestión de Productos con Descuento</Text>
     

      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={[styles.card, styles.addCard]}
          onPress={() => navigation.navigate("Guardar")}
        >
          <Text style={styles.cardTitle}>Agregar Producto</Text>
          <Text style={styles.cardDescription}>Registra un nuevo producto con descuento</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, styles.viewCard]}
          onPress={() => navigation.navigate("Leer")}
        >
          <Text style={styles.cardTitle}>Ver Inventario</Text>
          <Text style={styles.cardDescription}>Consulta productos y el total del inventario</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, styles.editCard]}
          onPress={() => navigation.navigate("Editar")}
        >
          <Text style={styles.cardTitle}>Editar Producto</Text>
          <Text style={styles.cardDescription}>Actualiza precio o stock del producto</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, styles.deleteCard]}
          onPress={() => navigation.navigate("Eliminar")}
        >
          <Text style={styles.cardTitle}>Eliminar Producto</Text>
          <Text style={styles.cardDescription}>Borra un producto del inventario</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 20,
    marginBottom: 5,
    textAlign: 'center',
    paddingVertical: 20
  },

  cardContainer: {
    width: '100%',
    maxWidth: 400,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 18,
    marginBottom: 15,
    elevation: 3,
  },
  addCard: {
    borderLeftWidth: 5,
    borderLeftColor: '#2ecc71',
  },
  viewCard: {
    borderLeftWidth: 5,
    borderLeftColor: '#3498db',
  },
  editCard: {
    borderLeftWidth: 5,
    borderLeftColor: '#f39c12',
  },
  deleteCard: {
    borderLeftWidth: 5,
    borderLeftColor: '#e74c3c',
  },
  cardIcon: {
    fontSize: 28,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
  footer: {
    marginTop: 30,
    color: '#888',
    fontStyle: 'italic',
  },
})
