import { Feather, FontAwesome } from '@expo/vector-icons';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import React, { forwardRef, useMemo } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const NovaDenunciaSheet = forwardRef(({ tipo }, ref) => {
  const snapPoints = useMemo(() => ['60%'], []);

  return (
    <BottomSheetModal
      ref={ref}
      index={0}
      snapPoints={snapPoints}
      backgroundStyle={{ borderRadius: 20 }}
    >
      <View style={styles.container}>
        <Text style={styles.titulo}>Nova Denúncia</Text>

        <Text style={styles.label}>Tipo de Ocorrência</Text>
        <TextInput style={styles.inputDisabled} value={tipo} editable={false} />

        <Text style={styles.label}>Descrição</Text>
        <TextInput
          multiline
          numberOfLines={4}
          placeholder="Descreva a situação encontrada..."
          style={[styles.input, { height: 100 }]}
        />

        <Text style={styles.label}>Localização</Text>
        <View style={styles.locationBox}>
          <Feather name="map-pin" size={18} color="#D32F2F" />
          <Text style={styles.locationText}> Localização será capturada automaticamente</Text>
        </View>

        <TouchableOpacity style={styles.imageBox}>
          <FontAwesome name="camera" size={20} color="#555" />
          <Text style={styles.imageText}>  Adicionar foto (opcional)</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.cancelar}>
            <Text style={styles.cancelarText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.enviar}>
            <Text style={styles.enviarText}>Enviar Denúncia</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BottomSheetModal>
  );
});

export default NovaDenunciaSheet;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    color: '#444',
    marginTop: 10,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    backgroundColor: '#fff',
  },
  inputDisabled: {
    backgroundColor: '#eee',
    borderRadius: 6,
    padding: 10,
  },
  locationBox: {
    backgroundColor: '#F5F5F5',
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  locationText: {
    fontSize: 13,
    color: '#555',
  },
  imageBox: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 6,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  imageText: {
    color: '#555',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  cancelar: {
    backgroundColor: '#B0BEC5',
    padding: 12,
    borderRadius: 6,
    width: '48%',
  },
  cancelarText: {
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
  },
  enviar: {
    backgroundColor: '#D32F2F',
    padding: 12,
    borderRadius: 6,
    width: '48%',
  },
  enviarText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});
