import React, { Component } from 'react'

// Components
import { MonsterCard } from './Monster_Card';

// Css
import '../css/monster_inc.css';

export default class MonsterInc extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
      .catch(error => console.log(error))
  };

  onChange = e => {
    this.setState({ search: e.target.value })
  }

  render() {
    const { monsters, search } = this.state;
    const filter_monster = monsters.filter(monsters => monsters.name.toLowerCase().includes(search.toLowerCase()))
    return (
      <div>
        <input type='search' placeholder='search monster' onChange={this.onChange} />
        <MonsterCard monsters={filter_monster} />
      </div>
    )
  }
}
