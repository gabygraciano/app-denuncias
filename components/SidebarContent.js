import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SidebarContent({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>Cidadão Colaborador</Text>

      <TouchableOpacity style={styles.botaoSair} onPress={() => alert('Deslogar')}>
        <Text style={styles.textoSair}>Sair do Aplicativo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 30,
  },
  botaoSair: {
    backgroundColor: '#D32F2F',
    padding: 14,
    borderRadius: 8,
  },
  textoSair: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
