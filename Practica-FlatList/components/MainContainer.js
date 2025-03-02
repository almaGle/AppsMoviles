import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from '../styles/styles';
import DinamicListMembers from './DinamicListMembers';
import DinamicListAlbums from './DinamicListAlbums';

export default function MainContainer() {
  const [activeTab, setActiveTab] = useState(null); 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Stray Kids</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.textBody}>
          Conoce un poco más acerca de la k-pop Band STRAY KIDS.
          Te mostramos acerca de quienes la conforman y un poco de su música. 
          Da click en el botón de lo que quieras conocer.
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              activeTab === 'members' ? styles.buttonActive : styles.buttonInactive,
            ]}
            onPress={() => setActiveTab(activeTab === 'members' ? null : 'members')}
          >
            <Text style={styles.buttonText}>Miembros</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              activeTab === 'albums' ? styles.buttonActive : styles.buttonInactive,
            ]}
            onPress={() => setActiveTab(activeTab === 'albums' ? null : 'albums')}
          >
            <Text style={styles.buttonText}>Álbumes</Text>
          </TouchableOpacity>
        </View>

        {activeTab === 'members' && <DinamicListMembers />}
        {activeTab === 'albums' && <DinamicListAlbums />}
      </View>
    </View>
  );
}

