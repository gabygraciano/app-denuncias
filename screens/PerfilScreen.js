import { Entypo, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PerfilScreen({ navigation }) {
  return (
    <>
      <LinearGradient colors={['#000', '#4C4C4D']} style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Entypo name="menu" size={32} color="gold" />
        </TouchableOpacity>
        <Image source={require('../assets/images/logo.png')} style={styles.logoImage} />
      </LinearGradient>

      <View style={styles.container}>
        <View style={styles.userCard}>
          <Ionicons name="person" size={64} color="#fff" />
          <Text style={styles.userTitle}>Cidadão Colaborador</Text>
          <Text style={styles.userSubtitle}>Guardião da Comunidade</Text>
        </View>

        <Text style={styles.sectionTitle}>Medalhas e conquistas</Text>
        <View style={styles.card}>
          <View style={styles.badge}>
            <FontAwesome5 name="trophy" size={32} color="#B8860B" />
            <Text style={styles.badgeText}>Top Colaborador</Text>
          </View>
          <View style={styles.badge}>
            <FontAwesome5 name="shield-alt" size={32} color="#4682B4" />
            <Text style={styles.badgeText}>Guardião</Text>
          </View>
          <View style={styles.badge}>
            <FontAwesome5 name="star" size={32} color="#FFD700" />
            <Text style={styles.badgeText}>Primeira Denúncia</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Estatísticas</Text>
        <View style={styles.cardStats}>
          <View style={styles.statLine}>
            <Text style={styles.statLabel}>Total de denúncias</Text>
            <Text style={styles.statValue}>12</Text>
          </View>
          <View style={styles.statLine}>
            <Text style={styles.statLabel}>Taxa de resolução</Text>
            <Text style={styles.statValue}>85%</Text>
          </View>
          <View style={styles.statLine}>
            <Text style={styles.statLabel}>Pontos acumulados</Text>
            <Text style={[styles.statValue, { color: '#DAA520' }]}>2.450</Text>
          </View>
        </View>
      </View>
    </>
  );
}

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
  container: {
    padding: 16,
    backgroundColor: '#f9f9f9',
    flex: 1,
  },
  userCard: {
    backgroundColor: '#1f1f1f',
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  userTitle: {
    color: 'gold',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 12,
  },
  userSubtitle: {
    color: '#ccc',
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  badge: {
    alignItems: 'center',
    gap: 4,
  },
  badgeText: {
    fontSize: 13,
    color: '#333',
    textAlign: 'center',
  },
  cardStats: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    gap: 12,
  },
  statLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statLabel: {
    color: '#555',
    fontSize: 16,
  },
  statValue: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },
});
