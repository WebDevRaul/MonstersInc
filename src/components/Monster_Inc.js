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
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
      .catch(error => console.log(error))
  };

  render() {
    const { monsters } = this.state;
    return (
      <div>
        <MonsterCard monsters={monsters} />
      </div>
    )
  }
}
