import {Component} from 'react'
import './index.css'
import LatestMatch from '../LatestMatch'

class TeamMatches extends Component {
  state = {teamMatchDetails: {}}

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.team_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({teamMatchDetails: updatedData})
  }

  render() {
    const {teamMatchDetails} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchDetails
    console.log(latestMatchDetails.umpires) //This is also giving undefined
    return (
      <div className="team-match-details-container">
        <img
          src={teamBannerUrl}
          alt="team banner"
          className="team-banner-img"
        />
        <p className="latest-matches">Latest Matches</p>
        <div className="latest-matches-container">
          <LatestMatch latestMatchDetails={latestMatchDetails} />
        </div>
      </div>
    )
  }
}

export default TeamMatches
