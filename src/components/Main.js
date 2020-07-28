import React, { Component } from 'react';

// Form
import { FaPlus } from 'react-icons/fa';

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

        <form action="#" className="form">
          <input
            type="text"
            onChange={this.handleMudou}
            value={novaTarefa}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
      </div>
    );
  }
}
