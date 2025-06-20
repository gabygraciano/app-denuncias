// navigation/CustomDrawerContent.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

export default function CustomDrawerContent(props) {
  const handleLogout = () => {
    // Aqui você pode colocar a lógica real de logout
    console.log('Usuário saiu');
    props.navigation.closeDrawer();
  };

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      <Text style={styles.username}>Cidadão Colaborador</Text>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Ionicons name="exit-outline" size={20} color="#fff" />
        <Text style={styles.logoutText}>Sair do App</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#1c1c1e',
  },
  username: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 30,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d32f2f',
    padding: 12,
    borderRadius: 8,
  },
  logoutText: {
    color: '#fff',
    marginLeft: 10,
    fontWeight: '500',
  },
});
