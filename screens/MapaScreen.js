import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function MapaScreen({ navigation }) {
  const zonas = [
    { id: 1, tipo: 'Alto Risco', cor: 'red', latitude: -15.7941, longitude: -47.8825 },
    { id: 2, tipo: 'Atenção', cor: 'orange', latitude: -15.7935, longitude: -47.8855 },
    { id: 3, tipo: 'Segura', cor: 'green', latitude: -15.7920, longitude: -47.8810 },
  ];

  return (
    <>
      <LinearGradient colors={['#000', '#4C4C4D']} style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Entypo name="menu" size={32} color="gold" />
        </TouchableOpacity>
        <Image source={require('../assets/images/logo.png')} style={styles.logoImage} />
      </LinearGradient>

      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -15.7941,
            longitude: -47.8825,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          {zonas.map((zona) => (
            <Marker
              key={zona.id}
              coordinate={{ latitude: zona.latitude, longitude: zona.longitude }}
              pinColor={zona.cor}
              title={`Zona de ${zona.tipo}`}
            />
          ))}
        </MapView>

        <View style={styles.legendContainer}>
          <LegendItem color="red" text="Zona de Alto Risco" />
          <LegendItem color="orange" text="Zona de Atenção" />
          <LegendItem color="green" text="Zona Segura" />
        </View>
      </View>
    </>
  );
}

const LegendItem = ({ color, text }) => (
  <View style={styles.legendItem}>
    <View style={[styles.legendDot, { backgroundColor: color }]} />
    <Text style={styles.legendText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 5,
  },
  logoImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  mapContainer: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  map: {
    height: 300,
    borderRadius: 12,
    margin: 16,
  },
  legendContainer: {
    marginHorizontal: 16,
    marginTop: 8,
    gap: 8,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 10,
  },
  legendText: {
    fontSize: 14,
    color: '#333',
  },
});
