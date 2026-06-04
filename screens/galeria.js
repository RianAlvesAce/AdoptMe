import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { Camera } from 'lucide-react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

export default function Galeria() {
   const [fotos, setFotos] = useState([]);

    const abrirCamera = async () => {

    const permissao =
      await ImagePicker.requestCameraPermissionsAsync();

      if (!permissao.granted) {
        alert('Permissão negada');
      return;
    }

    const resultado =
      await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        quality: 1
      });

    if (!resultado.canceled) {
      const novaFoto = resultado.assets[0].uri;
      setFotos([...fotos, novaFoto]);
    }
  };

  const deletar = (index) => {
    const novasFotos = fotos.filter((_, i) => i !== index);
    setFotos(novasFotos);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Galeria</Text>
      
      <FlatList
        data={fotos}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.fotoContainer}>
             <TouchableOpacity style={styles.buttonDelet} onPress={() => deletar(fotos.indexOf(item))}>
              <Text style={styles.textDelet}>X</Text>
            </TouchableOpacity>

            <Image
              source={{ uri: item }}
              style={styles.imagem}
            />
          </View>
        )}
      />

      <TouchableOpacity style={styles.button} onPress={abrirCamera}>
        <Camera />
        <Text>Adicionar Foto</Text>
      </TouchableOpacity>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
  flex: 1,
  alignItems: 'center',
  backgroundColor: '#F4F6F8',
  paddingTop: 50,
},

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 50,
    marginBottom: 25
  },

  button:{
    backgroundColor: '#F4F9F9',
    padding: 12,
    borderRadius: 10,
    borderColor: 'green',
    borderWidth: 1,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 90,
    marginTop: 20,
    gap: 10
  },

  fotoContainer: {
    margin: 20,
  },

  imagem: {
    width: 150,
    height: 150,
    marginTop: 10,
    borderRadius: 10
  },

  textDelet: {
    color: 'red',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'right',
  }
});