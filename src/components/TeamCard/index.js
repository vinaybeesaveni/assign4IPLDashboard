import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class TeamCard extends Component {
  render() {
    const {team} = this.props
    const {name, teamImageUrl, id} = team
    return (
      <li>
        <Link to={`/team-matches/${id}`} className="list-item">
          <img src={teamImageUrl} alt={name} className="team-img" />
          <p className="team-name">{name}</p>
        </Link>
      </li>
    )
  }
}

export default TeamCard
