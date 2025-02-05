import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { CheckBox } from '@rneui/themed'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar} >
        <Text style={styles.tittle}>
          To-Do-List
        </Text>
      </View>
      <View style={styles.body}>
        <View style={styles.tittlecontainer}>
          <Text style={styles.titleBody}>
            Lista de compras
          </Text>
        </View>
      <ScrollView style={styles.bodyContainer}>
        <CheckBox title="Leche" containerStyle={styles.checkbox}/>
        <CheckBox title="Huevos" containerStyle={styles.checkbox}/>
        <CheckBox title="Pan" containerStyle={styles.checkbox}/>
        <CheckBox title="Cebolla" containerStyle={styles.checkbox}/>
        <CheckBox title="Pimiento" containerStyle={styles.checkbox}/>
        <CheckBox title="Tomate" containerStyle={styles.checkbox}/>
        <CheckBox title="Pimiento" containerStyle={styles.checkbox}/>
        <CheckBox title="Papas" containerStyle={styles.checkbox}/>
        <CheckBox title="Cereal" containerStyle={styles.checkbox}/>
        <CheckBox title="Café" containerStyle={styles.checkbox}/>
        <CheckBox title="Azúcar" containerStyle={styles.checkbox}/>
        <CheckBox title="Sal" containerStyle={styles.checkbox}/>
        <CheckBox title="Pimienta" containerStyle={styles.checkbox}/>
        <CheckBox title="Aceite de oliva" containerStyle={styles.checkbox}/>
      </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    
  },
  navbar:{
    backgroundColor: '#16a085',
    height: "10%",
    width: "100%",
    marginTop: 0,
    textAlign: "justify",
    justifyContent: "center",
  },
  tittle:{
    color:"#fff",
    fontSize: 20,
    fontWeight: 20,
    marginStart: 20,
    marginTop: 20,
  },
  body: {
    height: '90%',
    backgroundColor: '#ecf0f1',
    maxWidth: '100%'
  },
  tittlecontainer:{
    backgroundColor: '',
    height: "10%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleBody:{
    color:"#000",
    fontSize: 20,
    fontWeight: 'bold',
  },
  bodyContainer:{
    width: '100%',
    marginBottom:'10%'
  },
  checkbox:{
    backgroundColor: "#0097e6",
    width: '58%',
    fontSize: 50,

    
  }
});
