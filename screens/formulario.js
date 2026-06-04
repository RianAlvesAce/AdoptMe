import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform,
  Alert,
  Dimensions
} from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  // Estados para gerenciar as entradas do usuário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [motivo, setMotivo] = useState('');

  const handleEnviar = () => {
    if (!nome || !email || !telefone || !endereco || !motivo) {
      Alert.alert("Campos obrigatórios", "Por favor, preencha todos os campos antes de enviar.");
      return;
    }
    
    Alert.alert("Sucesso", "Sua solicitação de adoção foi enviada com sucesso!");
    // Limpa o formulário
    setNome('');
    setEmail('');
    setTelefone('');
    setEndereco('');
    setMotivo('');
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Caixa Branca do Formulário */}
        <View style={styles.cardContainer}>
          
          {/* Ícones Superiores de Voltar */}
          <View style={styles.navigationHeader}>
            <TouchableOpacity style={styles.backButton} activeOpacity={0.7}>
              <Ionicons name="chevron-back" size={20} color="#1C1C1C" />
            </TouchableOpacity>
          </View>

          {/* Títulos */}
          <Text style={styles.mainTitle}>Formulário de adoção</Text>
          <Text style={styles.subtitle}>
            Preencha seus dados para iniciar o processo de adoção.
          </Text>

          {/* Campo: Nome Completo */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nome completo</Text>
            <TextInput 
              style={styles.input}
              placeholder="Seu nome"
              placeholderTextColor="#A1A1A1"
              value={nome}
              onChangeText={setNome}
            />
          </View>

          {/* Campo: E-mail */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput 
              style={styles.input}
              placeholder="seu@email.com"
              placeholderTextColor="#A1A1A1"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* Campo: Telefone */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Telefone</Text>
            <TextInput 
              style={styles.input}
              placeholder="(00) 00000-0000"
              placeholderTextColor="#A1A1A1"
              keyboardType="phone-pad"
              value={telefone}
              onChangeText={setTelefone}
            />
          </View>

          {/* Campo: Endereço */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Endereço</Text>
            <TextInput 
              style={styles.input}
              placeholder="Seu endereço completo"
              placeholderTextColor="#A1A1A1"
              value={endereco}
              onChangeText={setEndereco}
            />
          </View>

          {/* Campo: Por que você quer adotar? */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Por que você quer adotar?</Text>
            <TextInput 
              style={[styles.input, styles.textArea]}
              placeholder="Conte-nos um pouco sobre você e por que deseja adotar."
              placeholderTextColor="#A1A1A1"
              multiline={true}
              numberOfLines={4}
              textAlignVertical="top"
              value={motivo}
              onChangeText={setMotivo}
            />
          </View>

          {/* Botão Enviar Solicitação */}
          <TouchableOpacity style={styles.submitButton} onPress={handleEnviar} activeOpacity={0.8}>
            <FontAwesome5 name="paper-plane" size={14} color="#FFF" style={styles.buttonIcon} />
            <Text style={styles.submitButtonText}>Enviar solicitação</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// Estilização puramente React Native (sem tags web), garantindo ampla compatibilidade
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', 
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    padding: 20,
    // Sombras tratadas para garantir visualização suave tanto em Android quanto iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 2,
  },
  navigationHeader: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
  },
  backButton: {
    paddingVertical: 8,
    paddingRight: 16,
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1B4D2F', 
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
    marginBottom: 24,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2C2C2C',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 10,
    paddingHorizontal: 16,
    height: 48,
    fontSize: 14,
    color: '#1C1C1C',
  },
  textArea: {
    height: 100,
    paddingTop: 12,
    paddingBottom: 12,
  },
  submitButton: {
    flexDirection: 'row',
    backgroundColor: '#225937', 
    borderRadius: 12,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    width: '100%', 
  },
  buttonIcon: {
    marginRight: 8,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
});
