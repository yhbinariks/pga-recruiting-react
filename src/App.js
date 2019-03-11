import React, { Component } from 'react';
import Table from './components/Table/Table';
import {
  addId,
  parsePlayer,
  defaultPlayers,
  compareByNumField,
  compareByStringField,
} from './utils';
import Form from './components/Form';
import './App.css';

class App extends Component {
    state = {
      mode: 'add',
      playerId: null,
      players: defaultPlayers.map(addId),
      sortBy: 'score',
      isAsc: true,
    }

    componentDidMount() {
      this.sortPlayers();
    }

    sortPlayers = () => {
      const { sortBy, players, isAsc } = this.state;
      const sortedPlayers = players.slice().sort((p1, p2) => {
        const p1FullName = `${p1.lastName}${p1.firstName}`;
        const p2FullName = `${p2.lastName}${p2.firstName}`;
        if (sortBy === 'score') {
          if (p1.score === p2.score) return compareByStringField(p1FullName, p2FullName, isAsc);
          return compareByNumField(p1.score, p2.score, isAsc);
        }
        if (sortBy === 'name') {
          if (p1FullName === p2FullName) return compareByNumField(p1.score, p2.score, isAsc);
          return compareByStringField(p1FullName, p2FullName, isAsc);
        }

        if (p1[sortBy] === p2[sortBy]) return compareByStringField(p1FullName, p2FullName, isAsc);
        return compareByStringField(p1[sortBy].toString(), p2[sortBy].toString(), isAsc);
      });
      this.setState({
        players: sortedPlayers,
      });
    }

    onAdd = (event) => {
      const player = parsePlayer(Array.from(new FormData(event.target).entries()));
      this.setState(({ players }) => ({ players: [...players, player] }), this.sortPlayers);
    }

    setSortBy = sortBy => this.setState(prevState => ({
      sortBy,
      isAsc: prevState.sortBy === sortBy ? !prevState.isAsc : false,
    }), this.sortPlayers)

    onEdit = (event) => {
      const { players, playerId } = this.state;
      const player = parsePlayer(Array.from(new FormData(event.target).entries()));
      const newPlayers = players.map((p) => {
        if (p.id === playerId) return player;
        return p;
      });
      this.setState({
        mode: 'add',
        players: newPlayers,
        playerId: null,
      }, this.sortPlayers);
    }

    changeMode = (mode, playerId) => () => this.setState({ mode, playerId })

    onDelete = playerId => () => this.setState(prevState => ({
      mode: 'add',
      players: prevState.players.filter(player => player.id !== playerId),
    }), this.sortPlayers())

    onSubmit = (event) => {
      event.preventDefault();
      const { mode } = this.state;
      switch (mode) {
        case 'add': {
          return this.onAdd(event);
        }
        case 'edit': {
          return this.onEdit(event);
        }
        default:
          return null;
      }
    }

    render() {
      const { players, mode, playerId } = this.state;
      return (
        <main className="app">
          <Table
            players={players}
            changeMode={this.changeMode}
            onDelete={this.onDelete}
            setSortBy={this.setSortBy}
          />
          <Form
            key={playerId}
            player={players.find(player => player.id === playerId)}
            action={mode}
            onSubmit={this.onSubmit}
          />
        </main>
      );
    }
}

export default App;
