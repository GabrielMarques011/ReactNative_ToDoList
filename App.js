import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import ToDoList from './componentes/ToDoList';
import Form from './componentes/Form';

import { ToDoService } from './Services/ToDoService';

//transformando de uma 'fuction' em uma 'class'
export default class App extends React.Component {

  //retirei o const pois criei ele dentro do 'render'
  state = {

      lista:[]
  }

  async componentDidMount(){
    //lista guarda alguma coisa
    const lista = await ToDoService.lista();
    //o State serve para "atualizar", então elea seta o estado dos campos
    this.setState(lista);
  }
 
  //hiro function = matem o scorpo da função
  add = async (text) =>{
    const newItem = await ToDoService.create({text})
    //criando um "loop", continue e aplique
    const lista = [...this.state.lista, newItem]
    this.setState({lista})
  }

  remove = async (item) =>{
    await ToDoService.remove(item.id);
    //ele filtra todos os itens que são diferentes dos que foram apagados
    const lista = this.sate.lista.filter(itemList => itemList.id !== item.id)
    this.setState(lista)
  }

  render(){
    //aplicado para para de dar erro, e ficar mais estruturado
    const {state} = this;
    return (
      <View style={styles.container}>
        <Form onAdd={this.add}/>
        <ToDoList lista={state.lista} onRemove={this.remove}/>
        <StatusBar style="auto" />
      </View>
    );
  }
}
  

const styles = StyleSheet.create({
  /* container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, */
});
