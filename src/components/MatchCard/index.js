import './index.css'

const MatchCard = props => {
  const {each} = props

  const updatedRecentMatches = {
    umpires: each.umpires,
    result: each.result,
    manOfTheMatch: each.man_of_the_match,
    id: each.id,
    date: each.date,
    venue: each.venue,
    competingTeam: each.competing_team,
    competingTeamLogo: each.competing_team_logo,
    matchStatus: each.match_status,
  }

  const {
    result,
    competingTeam,
    competingTeamLogo,
    matchStatus,
  } = updatedRecentMatches

  const matchStatusClassName = matchStatus === 'Won' ? 'green' : 'red'

  return (
    <li className="recent-match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="recent-match-team-logo"
      />
      <p className="recent-match-competing-team">{competingTeam}</p>
      <p className="recent-match-result">{result}</p>
      <p className={matchStatusClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
