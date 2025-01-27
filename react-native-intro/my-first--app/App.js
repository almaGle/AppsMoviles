import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

const MyName = 'Alma';
const Bio = 'Estudiante de Ing. en Software, me gustan los gatitos y la música ♡';
const postImages = [
  require('./assets/post1.jpg'),
  require('./assets/post2.jpg'),
  require('./assets/post3.jpg'),
  require('./assets/post3.jpg'),
  require('./assets/post2.jpg'),
  require('./assets/post1.jpg'),
  require('./assets/post2.jpg'),
  require('./assets/post1.jpg'),
  require('./assets/post3.jpg'),
  require('./assets/post1.jpg'),
  require('./assets/post3.jpg'),
  require('./assets/post2.jpg'),
];

export default function App() {
  return (
    <View style={styles.container}>
      
      <ScrollView>
        
        <View style={styles.header}>
          <Image 
            source={require('./assets/perfil.jpg')} 
            style={styles.profileImage} 
          />
          <Text style={styles.name}>{MyName}</Text>
          <Text style={styles.bio}>{Bio}</Text>

          
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Seguir</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonOutline}>
              <Text style={styles.buttonOutlineText}>Mensaje</Text>
            </TouchableOpacity>
          </View>
        </View>

       
        <View style={styles.posts}>
          <Text style={styles.sectionTitle}>Publicaciones</Text>
          <View style={styles.postGrid}>
            {postImages.map((image, index) => (
              <View key={index} style={styles.postItem}>
                <Image source={image} style={styles.postImage} resizeMode="cover" />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 50,
    alignItems: 'center',
    backgroundColor: '#58B19F',
    paddingVertical: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  bio: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 5,
  },
  actionButtons: {
    flexDirection: 'row',
    marginTop: 15,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#58B19F',
    fontWeight: 'bold',
  },
  buttonOutline: {
    borderWidth: 1,
    borderColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  buttonOutlineText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  posts: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  postGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  postItem: {
    width: '30%', 
    height: 100,
    backgroundColor: '#ddd',
    borderRadius: 10,
    marginBottom: 10,
    overflow: 'hidden',
  },
  postImage: {
    width: '100%', 
    height: '100%', 
  },
});
