import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import * as Location from "expo-location";

export default function ONGsRecife() {
  const [localizacao, setLocalizacao] = useState(null);

  const ongs = [
    {
      nome: "Instituto Focinho Feliz",
      endereco: "Recife - PE"
    },
    {
      nome: "SOS Animais Recife",
      endereco: "Recife - PE"
    },
    {
      nome: "Mundo do Marley",
      endereco: "Olinda - PE"
    },
    {
      nome: "ABTPet",
      endereco: "Recife - PE"
    }
  ];

  async function obterLocalizacao() {
    const { status } =
      await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      alert("Permissão de localização negada!");
      return;
    }

    const location =
      await Location.getCurrentPositionAsync({});

    setLocalizacao(location.coords);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>
        🐾 ONGs Próximas
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={obterLocalizacao}
      >
        <Text style={styles.textoBotao}>
          Obter Minha Localização
        </Text>
      </TouchableOpacity>

      {localizacao && (
        <View style={styles.card}>
          <Text style={styles.subtitulo}>
            Minha Localização
          </Text>

          <Text>
            Latitude: {localizacao.latitude}
          </Text>

          <Text>
            Longitude: {localizacao.longitude}
          </Text>
        </View>
      )}

      <Text style={styles.subtitulo}>
        ONGs da Região
      </Text>

      {ongs.map((ong, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.nome}>
            {ong.nome}
          </Text>

          <Text>
            {ong.endereco}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 50
  },

  subtitulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },

  botao: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },

  card: {
    width: "100%",
    backgroundColor: "#f2f2f2",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },

  nome: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
