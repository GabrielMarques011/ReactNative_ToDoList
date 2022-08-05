import react,{Component} from "react";
import { FlatList, View } from "react-native";

class ToDoList extends Component{

    //lista estatica para teste
    static defaultProps = {
        lista:[
            {id:'1', descricao: 'Testando lista estatica'},
            {id:'2', descricao: 'Testando lista estatica dois'}
        ]
    }

    //aqui vamos controlar a estrutura de linhas
    //{index} seria a posição 0 da lista (Array)
    alinharLinhas = ({item, index}) =>{
        return(
            <View>
                {this.formatandoNumeroLista(index)}-{item.descricao}
            </View>
        )
    }

    //criando metodo que formata o numero da lista
    formatandoNumeroLista(number){
        //quantidade de digitos que eu quero
        const digito = 2;
        //'slide' é como se ele cortasse as casas dos number
        return('0'.repeat(digito) + (number + 1)).slice(-digito)
    }

    render(){
        const {props} = this
        const keyExtractor = item => item.id;
        return(
            <View>
                <FlatList 
                data={props.lista} 
                keyExtractor={keyExtractor} 
                renderItem={this.alinharLinhas}/>
            </View>
        )
    }
}

export default ToDoList