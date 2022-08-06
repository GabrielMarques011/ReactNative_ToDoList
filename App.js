import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ToDoList from './componentes/ToDoList';

export default function App() {

  const state = {

      lista:[
          {id:'1', descricao: 'Testando lista estatica'},
          {id:'2', descricao: 'Testando lista estatica dois'}
      ]
  }

  return (
    <View style={styles.container}>
      <ToDoList list={state.list}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  /* container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, */
});
