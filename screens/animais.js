import { useState } from "react";
import { User } from "lucide-react-native";
import {
  FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Button,
} from "react-native";

export default function Animais({ onFavoritar, listaFavoritos = [], navigation }) {
  const [busca, setBusca] = useState("");
  const animais = [
    {
      id: "1",
      nome: "Mel",
      idade: "2 anos",
      sexo: "fêmea",
      porte: "Médio porte",
      tipo: "Cachorro",
      foto: require("../assets/mel.png"),
    },
    {
      id: "2",
      nome: "Lunar",
      idade: "12 meses",
      sexo: "Fêmea",
      porte: "Pequeno porte",
      tipo: "Gato",
      foto: require("../assets/lunar.png"),
    },
    {
      id: "3",
      nome: "Thor",
      idade: "3 anos",
      sexo: "Macho",
      porte: "Grande porte",
      tipo: "Cachorro",
      foto: require("../assets/thor.png"),
    },
    {
      id: "4",
      nome: "Lilo",
      idade: "3 anos",
      sexo: "Fêmea",
      porte: "Pequeno porte",
      tipo: "Gato",
      foto: require("../assets/lilo.png"),
    },
    {
      id: "5",
      nome: "Anil",
      idade: "3 anos",
      sexo: "Fêmea",
      porte: "Pequeno porte",
      tipo: "Cachorro",
      foto: require("../assets/anil.png"),
    },
    {
      id: "1",
      nome: "Lulu",
      idade: "2 anos",
      sexo: "fêmea",
      porte: "Médio porte",
      tipo: "Cachorro",
      foto: require("../assets/mel.png"),
    },
    {
      id: "3",
      nome: "Bento",
      idade: "3 anos",
      sexo: "Macho",
      porte: "Grande porte",
      tipo: "Cachorro",
      foto: require("../assets/thor.png"),
    },
  ];

  const animaisFiltrados = animais.filter((animal) =>
    animal.nome.toLowerCase().includes(busca.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <View style={{ position: "absolute", right: 20, bottom: 75, backgroundColor: "#1B5E20", borderRadius: "100%", padding: 15, zIndex: 1 }}>
        <TouchableOpacity onPress={() => {navigation.navigate("ProfileScreen")}}>
          <User color="#fff" size={40} />
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <Text style={styles.titulo}>Adote amor!</Text>
        <TouchableOpacity style={styles.botaoFav} onPress={() => {navigation.navigate("Favorites")}}>
          <Text style={styles.textoBotaoFav}>❤️ Favoritos ({listaFavoritos.length})</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.subtitulo}>Encontre seu novo melhor amigo</Text>

      <View style={styles.subArea}>
        <TextInput style={styles.input} placeholder="Buscar animal..." value={busca} onChangeText={setBusca}/>

       <TouchableOpacity style={styles.botaolocal} onPress={() => {navigation.navigate("Localizacao")}}>
          <Text style={styles.textoBotaolocal}>📍 Locais </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={animaisFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => {navigation.navigate("PetProfile")}}>
            <Image source={item.foto} style={styles.imagem} />
            <View style={styles.info}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text>{item.idade} • {item.sexo}</Text>
              <Text>{item.porte}</Text>
              <Text style={styles.tipo}> {item.tipo} </Text>
            </View>

            <TouchableOpacity onPress={() => onFavoritar(item)}>
              <Text style={styles.coracao}>
                {listaFavoritos.some(fav => fav.id === item.id) ? "❤️" : "🤍"}
              </Text>
            </TouchableOpacity>

          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    paddingTop: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1B5E20",
    paddingBottom:20
  },
  botaoFav: {
    backgroundColor: '#FFE0B2',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  textoBotaoFav: {
    color: '#E65100',
    fontWeight: 'bold',
    fontSize: 14,
  },
  subtitulo: {
    fontSize: 16,
    color: "#555",
  },

  subArea:{
    flexDirection: "row",
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
    paddingLeft: 1,   
    paddingRight: 5,  
  },

  botaolocal: {
    borderColor: 'rgba(27,94,32)',
    borderWidth: 1,
    borderRadius: 20,
    padding: 12,
    marginLeft: 10
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    flex:1,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    padding: 10,
    borderRadius: 12,
    marginBottom: 15,
  },
  imagem: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  info: {
    flex: 1,
    marginLeft: 15,
  },
  nome: {
    fontSize: 20,
    fontWeight: "bold",
  },
  tipo: {
    marginTop: 5,
    color: "#1B5E20",
    fontWeight: "bold",
  },
  coracao: {
    fontSize: 24,
    color: "red",
  },
});