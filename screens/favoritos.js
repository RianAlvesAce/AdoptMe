import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

// Recebe "irParaAnimais" para conseguir voltar
export default function Favoritos({ listaFavoritos, irParaAnimais }) {
  return (
    <View style={styles.container}>
      {/* Botão simples de voltar no topo da tela de Favoritos */}
      <TouchableOpacity style={styles.botaoVoltar} onPress={irParaAnimais}>
        <Text style={styles.textoVoltar}>⬅ Voltar para adoção</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Meus Favoritos</Text>
      
      {listaFavoritos.length === 0 ? (
        <Text style={styles.textoVazio}>Nenhum pet favoritado ainda. 🤍</Text>
      ) : (
        <FlatList
          data={listaFavoritos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.petContainer}>
              <Image source={item.foto} style={styles.petImage} />
              <Text style={styles.petName}>{item.nome}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdfa',
    padding: 20,
    paddingTop: 50,
  },
  botaoVoltar: {
    marginBottom: 15,
    alignSelf: 'flex-start',
  },
  textoVoltar: {
    color: '#1B5E20',
    fontWeight: 'bold',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    color: 'green',
  },
  textoVazio: {
    textAlign: 'center',
    color: '#666',
    marginTop: 40,
    fontSize: 16,
  },
  petContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    padding: 10,
    borderRadius: 12,
    marginBottom: 15,
  },
  petImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  petName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
  },
});