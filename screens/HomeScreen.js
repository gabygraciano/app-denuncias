import { Entypo, Feather, FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';

export default function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTipo, setSelectedTipo] = useState('');
  const [descricao, setDescricao] = useState('');

  const abrirModalDenuncia = (tipo) => {
    setSelectedTipo(tipo);
    setModalVisible(true);
  };

  const enviarDenuncia = () => {
    console.log('Tipo:', selectedTipo);
    console.log('Descrição:', descricao);
    setModalVisible(false);
    setDescricao('');
  };

  return (
    <>
      <LinearGradient colors={['#000', '#4C4C4D']} style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Entypo name="menu" size={32} color="gold" />
        </TouchableOpacity>
        <Text style={styles.logo}>LOGOTIPO</Text>
      </LinearGradient>

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.alertBox}>
          <Ionicons name="warning" size={20} color="#000" />
          <Text style={styles.alertText}>
            Você está entrando em uma área com maior incidência de ocorrências. Mantenha-se atento.
          </Text>
        </View>

        <Text style={styles.emergencyText}>APERTE NO BOTÃO ABAIXO EM SITUAÇÃO DE EMERGÊNCIA</Text>

        <TouchableOpacity style={styles.dangerButton}>
          <LinearGradient colors={['#B22222', '#800000']} style={styles.dangerGradient}>
            <Entypo name="warning" size={24} color="#fff" style={{ marginRight: 8 }} />
            <Text style={styles.dangerButtonText}>SINTO-ME INSEGURO</Text>
          </LinearGradient>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Nova Denúncia</Text>

        <View style={styles.cardList}>
          <ReportCard
            icon={<MaterialIcons name="delete" size={24} color="#333" />}
            title="Lixo acumulado"
            subtitle="Denunciar acúmulo de lixo na via pública"
            onPress={() => abrirModalDenuncia('Lixo acumulado')}
          />
          <ReportCard
            icon={<Feather name="sun" size={24} color="orange" />}
            title="Iluminação precária"
            subtitle="Reportar problemas de iluminação pública"
            onPress={() => abrirModalDenuncia('Iluminação precária')}
          />
          <ReportCard
            icon={<Feather name="eye" size={24} color="blue" />}
            title="Movimentação suspeita"
            subtitle="Informar atividade suspeita na região"
            onPress={() => abrirModalDenuncia('Movimentação suspeita')}
          />
          <ReportCard
            icon={<FontAwesome5 name="house-damage" size={24} color="crimson" />}
            title="Área degradada"
            subtitle="Reportar locais abandonados ou degradados"
            onPress={() => abrirModalDenuncia('Área degradada')}
          />
          <ReportCard
            icon={<FontAwesome5 name="tools" size={24} color="sienna" />}
            title="Construção irregular"
            subtitle="Denunciar obras irregulares ou invasões"
            onPress={() => abrirModalDenuncia('Construção irregular')}
          />
        </View>
      </ScrollView>

      <Modal
        isVisible={modalVisible}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="down"
        onBackdropPress={() => setModalVisible(false)}
        style={styles.modalStyle}
        propagateSwipe
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.modalContent}
        >
          <Text style={styles.modalTitle}>Nova Denúncia</Text>
          <Text style={styles.modalLabel}>Tipo de Ocorrência:</Text>
          <Text style={styles.modalTipo}>{selectedTipo}</Text>

          <Text style={styles.modalLabel}>Descrição</Text>
          <TextInput
            style={styles.input}
            placeholder="Descreva a situação..."
            multiline
            numberOfLines={4}
            value={descricao}
            onChangeText={setDescricao}
          />

          <Text style={styles.modalInfo}>📍 Localização atual será capturada automaticamente</Text>

          <TouchableOpacity style={styles.photoButton}>
            <Text style={styles.photoButtonText}>+ Adicionar Foto (opcional)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.sendButton} onPress={enviarDenuncia}>
            <Text style={styles.sendButtonText}>Enviar Denúncia</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setModalVisible(false)} style={{ marginTop: 12 }}>
            <Text style={{ textAlign: 'center', color: '#800000' }}>Cancelar</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </Modal>
    </>
  );
}

const ReportCard = ({ icon, title, subtitle, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <View style={styles.icon}>{icon}</View>
    <View>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardSubtitle}>{subtitle}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: 48,
  },
  logo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gold',
  },
  container: {
    padding: 16,
  },
  alertBox: {
    flexDirection: 'row',
    backgroundColor: '#fff3cd',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  alertText: {
    marginLeft: 10,
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  emergencyText: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  dangerButton: {
    alignItems: 'center',
    marginBottom: 24,
  },
  dangerGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: 28,
  },
  dangerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardList: {
    gap: 12,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
    elevation: 3,
  },
  icon: {
    marginRight: 12,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#666',
  },
  modalStyle: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 20,
    minHeight: '50%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modalLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 10,
  },
  modalTipo: {
    fontSize: 16,
    color: '#444',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 10,
    height: 80,
    textAlignVertical: 'top',
  },
  modalInfo: {
    marginTop: 10,
    fontSize: 12,
    color: '#777',
  },
  photoButton: {
    marginTop: 12,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
  },
  photoButtonText: {
    color: '#333',
    fontSize: 14,
  },
  sendButton: {
    marginTop: 16,
    backgroundColor: '#4C4C4D',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
