import React, { useState } from 'react';
import { FlatList, View, Text, Image, TouchableOpacity, Modal, Linking } from 'react-native';
import styles from '../styles/styles.js';
import albums from '../data/albums.js'; 
import DinamicListSongM from './DinamicListSongM.js'; 
import DinamicListSongI from './DinamicListSongI.js'; 
import DinamicListSongL from './DinamicListSongL.js'; 
import DinamicListSongN from './DinamicListSongN.js'; 

export default function DinamicListAlbums() {
  const [selectedAlbum, setSelectedAlbum] = useState(null); 
  const [modalVisible, setModalVisible] = useState(false); 

  const handleImagePress = (album) => {
    console.log("Album seleccionado:", album); 
    setSelectedAlbum(album); 
    setModalVisible(true); 
  };

  const renderSongsList = (album) => {
    switch (album.id) {
      case 1:
        return <DinamicListSongM />;
      case 2:
        return <DinamicListSongL />;
      case 3:
        return <DinamicListSongI />;
      case 4:
        return <DinamicListSongN />;
      default:
        return <Text>No hay canciones disponibles para este álbum.</Text>;
    }
  };

  const renderAlbumItem = ({ item }) => (
    <View style={styles.tableRow}>
      <TouchableOpacity onPress={() => handleImagePress(item)}>
        <Image source={{ uri: item.imageLink }} style={styles.tableCellImage} />
      </TouchableOpacity>
      <Text style={styles.tableCell}>{item.name}</Text>
      <Text style={styles.tableCell}>{item.relaseDate}</Text> 
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderText}>Portada</Text>
        <Text style={styles.tableHeaderText}>Nombre</Text>
        <Text style={styles.tableHeaderText}>Fecha de lanzamiento</Text>
      </View>
      <FlatList
        data={albums}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderAlbumItem}
        style={styles.SFlatList}
        contentContainerStyle={styles.tableContent}
      />
      <Modal
        visible={modalVisible && selectedAlbum !== null}
        animationType="slide"
        transparent={true} 
        onRequestClose={() => setModalVisible(false)} 
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            {selectedAlbum ? (
              <>
                <Text style={styles.songListTitle}>Lista de canciones de {selectedAlbum.name}:</Text>
                <TouchableOpacity
                  style={styles.listenButton}
                  onPress={() => Linking.openURL(selectedAlbum.playlistLink)}
                >
                  <Text style={styles.listenButtonText}>Escuchar álbum</Text>
                </TouchableOpacity>
                {renderSongsList(selectedAlbum)}
                <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                  <Text style={styles.closeButtonText}>Cerrar</Text>
                </TouchableOpacity>
              </>
            ) : (
              <Text>No se ha seleccionado un álbum.</Text>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}