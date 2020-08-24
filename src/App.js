import React from 'react';
import './App.css';
import Input from './component/input';
import Output from './component/output';
import Validation from './ValidationComponent/Validation';
import CharComponent from './CharComponent/CharComponent'; 


class App extends React.Component{
  state = {
    name: '',
    text: ''
     }

  usernameEvent = (e) => {
    this.setState({
      name:[
        e.target.value,
        'chetan'
      ]
    });
  }
  texthandler = (e) => {
    this.setState({text: e.target.value});
  }
  deleteCharhandler = (index) => {
    const chars = [...this.state.text.split("")];
    chars.splice(index, 1);
    this.setState({text:chars.join("")});
  }



render() {
  return ( 
    <div className="App">
    <header className = "App-header">
      <Input changed={this.usernameEvent} currentName={this.state.name[0]} />
      <Output name={this.state.name[0]}/>
      
      <input type="text" onChange={this.texthandler} value ={this.state.text}></input>
      <p>{this.state.text.length} chars</p>
      <Validation name = {this.state.text}/>
      <div>
      {this.state.text.split("").map((char,index)=> {

        return <CharComponent char={char} delete = {() => this.deleteCharhandler(index)}/>
      })}
      </div>
      </header>
    

    </div>

    
    );

  } 
  
}
  


export default App;