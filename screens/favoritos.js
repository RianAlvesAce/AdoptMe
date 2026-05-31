import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useState } from 'react';

export default function Favoritos() {
  const [favoritos, setfavoritos] = useState([]);

  const adicionarFavorito = (pet) => {
    setfavoritos([...favoritos, pet]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favoritos</Text>
      
      <FlatList
        data={favoritos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
         
         <View style={styles.petContainer}>
            <Image source={{ uri: item.imagem }} style={styles.petImage} />
            <Text style={styles.petName}>{item.nome}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fffdfa',
      paddingTop: 50,
    },

   title : {
      textAlign: 'center',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 50,
      marginBottom: 25,
      color: 'green'
   },

    petContainer :{
        width: 150,
        height: 150
    },

    petName :{
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5
    }
});