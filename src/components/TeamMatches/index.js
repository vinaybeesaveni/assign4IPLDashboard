import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import LatestMatch from '../LatestMatch'

class TeamMatches extends Component {
  state = {teamMatchDetails: {}, isLoading: true}

  componentDidMount() {
    this.getMatchDetails()
  }

  getBackgroundColor = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    let bgColorClassName = ''

    switch (id) {
      case 'KKR':
        bgColorClassName = 'kkr'
        break
      case 'SH':
        bgColorClassName = 'srh'
        break
      case 'KXP':
        bgColorClassName = 'kxp'
        break
      case 'DC':
        bgColorClassName = 'dc'
        break
      case 'CSK':
        bgColorClassName = 'csk'
        break
      case 'RCB':
        bgColorClassName = 'rcb'
        break
      case 'RR':
        bgColorClassName = 'rr'
        break
      default:
        bgColorClassName = 'mi'
    }
    return bgColorClassName
  }

  getLatestMatchDetails = each => ({
    umpires: each.umpires,
    result: each.result,
    manOfTheMatch: each.man_of_the_match,
    date: each.date,
    venue: each.venue,
    competingTeam: each.competing_team,
    competingTeamLogo: each.competing_team_logo,
    firstInnings: each.first_innings,
    secondInnings: each.second_innings,
  })

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: this.getLatestMatchDetails(data.latest_match_details),
      recentMatches: data.recent_matches,
    }
    this.setState({teamMatchDetails: updatedData, isLoading: false})
  }

  renderLatestMatches = () => {
    const {teamMatchDetails} = this.state
    const {latestMatchDetails, recentMatches} = teamMatchDetails
    return (
      <LatestMatch
        latestMatchDetails={latestMatchDetails}
        recentMatches={recentMatches}
      />
    )
  }

  render() {
    const {teamMatchDetails, isLoading} = this.state
    const {teamBannerUrl} = teamMatchDetails

    return (
      <>
        {isLoading ? (
          <div
            className={`loader-container ${this.getBackgroundColor()}`}
            testid="loader"
          >
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div
            className={`team-match-details-container ${this.getBackgroundColor()}`}
          >
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="team-banner-img"
            />
            <p className="latest-matches">Latest Matches</p>
            <div className="latest-matches-container">
              {this.renderLatestMatches()}
            </div>
          </div>
        )}
      </>
    )
  }
}

export default TeamMatches
