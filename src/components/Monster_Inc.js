import React, { Component } from 'react'

// Components
import { MonsterCard } from './Monster_Card';
import { SearchMonster } from './Search_Monster';

// Css
import '../css/monster_inc.css';

export default class MonsterInc extends Component {
  state = {
    monsters: [],
    text: ''
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
      .catch(error => console.log(error))
  };

  onChange = e => {
    this.setState({ text: e.target.value })
  }

  render() {
    const { monsters, text } = this.state;
    const search = text => data => data.name.toLowerCase().startsWith(text.toLowerCase()) || !text;
    const monster = monsters.filter(search(text)).map(monster => monster);

    return (
      <div>
        <SearchMonster onChange={this.onChange} />
        <MonsterCard monsters={monster} />
      </div>
    )
  }
}
