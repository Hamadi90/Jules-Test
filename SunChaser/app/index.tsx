import React from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet, SafeAreaView } from 'react-native';
import { useAuth } from '@/context/AuthContext';
import { mockSpots, Spot } from '@/data/mockSpots';

function SpotCard({ spot }: { spot: Spot }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: spot.imageUrl }} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{spot.name}</Text>
        <Text style={styles.rating}>Rating: {spot.rating} / 5</Text>
      </View>
    </View>
  );
}

export default function HomeScreen() {
  const { logout } = useAuth();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>SunChaser</Text>
        <Button title="Logout" onPress={logout} />
      </View>
      <FlatList
        data={mockSpots}
        renderItem={({ item }) => <SpotCard spot={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  list: {
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardContent: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rating: {
    marginTop: 8,
    color: '#666',
  },
});
