import React from 'react';
import { FlatList, View, Text } from 'react-native';
import styles from '../styles/styles.js';
import songI from '../data/songI.js';

export default function DinamicListSongI() {
  const renderItem = ({ item, index }) => (
    <View style={styles.tableRow}>
      <Text style={styles.tableCell}>{index + 1}</Text>
      <Text style={styles.tableCell}>{item.name}</Text>
      <Text style={styles.tableCell}>{item.duration}</Text>
    </View>
  );

  return (
    <View style={styles.tableContainer}>
      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderText}>No.</Text>
        <Text style={styles.tableHeaderText}>Título</Text>
        <Text style={styles.tableHeaderText}>Duración</Text>
      </View>
      <FlatList
        data={songI}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.tableContent}
      />
    </View>
  );
}