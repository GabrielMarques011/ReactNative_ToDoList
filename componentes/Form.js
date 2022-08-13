import react, {Component} from "react";
import { Button, TextInput, View } from "react-native";

class Form extends Component{

    //utilizado essa função estatica para limpar o campo
    static defaultProps = {
        onAdd: () =>{

        }
    }

    state = {
        text: ''
    }

    alteracao = (text) =>{
        this.setState({text})
    }

    add = () =>{
        const {state} = this;
        if (state.text) {
            //para limpar o campo
            this.props.onAdd(state.add)            
            //para aplicar o campo vazio
            this.alteracao('')
        }
    }

    render (){
        return(
            <View>
                <TextInput value={this.state.text} onChangeText={this.alteracao}/>
                
                <Button title='Adicionar' color='blue' onPress={this.add}/>
            </View>
        )
    }
}

export default Form;