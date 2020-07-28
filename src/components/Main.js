import React, { Component } from 'react';
import './Main.css';

// Componentes com estado (statefull) necessitam do método render()
export default class Main extends Component {
  state = {
    novaTarefa: '',
  };

  handleMudou = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  }

  render() {
    const { novaTarefa } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form action="#">
          <input type="text" onChange={this.handleMudou} />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}
