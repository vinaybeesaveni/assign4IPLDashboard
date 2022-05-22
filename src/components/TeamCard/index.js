import {Component} from 'react'
import './index.css'

class TeamCard extends Component {
  render() {
    const {team} = this.props
    const {name, teamImageUrl} = team
    return (
      <li className="list-item">
        <img src={teamImageUrl} alt={name} className="team-img" />
        <h1 className="team-name">{name}</h1>
      </li>
    )
  }
}

export default TeamCard
