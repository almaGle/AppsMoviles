import React, { useState } from 'react';
import { FlatList, View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import styles from '../styles/styles.js';
import members from '../data/members.js';

export default function DinamicListMembers() {
  const [selectedMember, setSelectedMember] = useState(null); 
  const [modalVisible, setModalVisible] = useState(false); 
  
  const handleImagePress = (member) => {
    setSelectedMember(member); 
    setModalVisible(true); 
  };

  const renderItem = ({ item }) => (
    <View style={styles.tableRow}>
      <TouchableOpacity onPress={() => handleImagePress(item)}>
        <Image source={{ uri: item.imageLink }} style={styles.tableCellImage} />
      </TouchableOpacity>
      <Text style={styles.tableCell}>{item.name}</Text>
      <Text style={styles.tableCell}>{item.age}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderText}>Imagen</Text>
        <Text style={styles.tableHeaderText}>Nombre</Text>
        <Text style={styles.tableHeaderText}>Edad</Text>
      </View>
      <FlatList
        data={members}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        style={styles.SFlatList}
        contentContainerStyle={styles.tableContent}
      />
      <Modal
        visible={modalVisible && selectedMember !== null}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContentD}>
            {selectedMember ? (
              <>
                <Image source={{ uri: selectedMember.imageLink }} style={styles.modalImage} />
                <Text style={styles.modalText}>Nombre: {selectedMember.name}</Text>
                <Text style={styles.modalText}>Edad: {selectedMember.age}</Text>
                <Text style={styles.modalText}>Descripción: {selectedMember.description}</Text>
                <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                  <Text style={styles.closeButtonText}>Cerrar</Text>
                </TouchableOpacity>
              </>
            ) : (
              <Text>No se ha seleccionado un miembro.</Text>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}