import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamsList: []}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const finalList = teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamsList: finalList})
  }

  render() {
    const {teamsList} = this.state
    return (
      <div className="bg-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <ul className="list-container">
          {teamsList.map(eachTeam => (
            <TeamCard key={eachTeam.id} team={eachTeam} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
