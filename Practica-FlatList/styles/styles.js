import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#D3D3D3',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  header: {
    width: '100%',
    height: '10%',
    backgroundColor: 'Transparent', // Fondo negro
    borderBottomColor: '#A4161A',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:'10%'
  },
  textHeader: {
    marginTop: 10,
    fontSize: 50,
    fontWeight: 'bold',
    color: '#161A1D', // Texto blanco
  },
  body: {
    flex: 1,
    width: '100%',
    padding: 20,
  },
  textBody: {
    fontSize: 16,
    color: '#0B090A',
    textAlign: 'center',
    marginBottom: 20,
  },
  SFlatList: {
    marginTop: 30,
    width: '100%',
    height: '100%',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'stretch',
    marginBottom: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  buttonActive: {
    backgroundColor: '#660708',
    justifyContent:'center'
  },
  buttonInactive: {
    backgroundColor: '#CB1B16',
    justifyContent:'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    
  },
  albumItem: {
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  SFlatList: {
    padding: 10,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  albumInfoContainer: {
    flex: 3,
    paddingLeft: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  albumName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333', // Texto negro
  },
  releaseDate: {
    fontSize: 14,
    color: '#555',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo negro semi-transparente
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    height: '80%',
    
  },
  modalContentD: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    height: '80%',
    alignItems: 'center',
  },
  modalImage: {
    width: '90%',
    height: '50%',
    borderRadius: 10,
    marginBottom: 20,
  },
  songListTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333', // Texto negro
  },
  tableContainer: {
    flex: 1,
  },
  table: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#A4161A', // Fondo rojo
    padding: 10,
  },
  tableHeaderText: {
    flex: 1,
    fontWeight: 'bold',
    color: 'white', // Texto blanco
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#65010C',
  },
  tableCell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    color: '#fff', // Texto negro
  },
  tableCellImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  tableContent: {
    justifyContent: 'center',
    paddingTop: 50, // Ajusta el padding para que no se superponga con el encabezado
  },
  listenButton: {
    backgroundColor: '#A4161A', // Fondo rojo
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  listenButtonText: {
    color: 'white', // Texto blanco
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#A4161A', // Fondo rojo
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  closeButtonText: {
    color: 'white', // Texto blanco
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;