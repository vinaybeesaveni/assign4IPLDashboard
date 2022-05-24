import MatchCard from '../MatchCard'
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails, recentMatches} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails
  return (
    <>
      <div className="latest-match-container">
        <div className="competing-team-logo-container">
          <div className="competing-team-container">
            <p className="competing-team">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="venue">{venue}</p>
            <p className="result-main">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="competing-team-main-img"
          />
        </div>
        <hr />
        <img
          src={competingTeamLogo}
          alt={competingTeam}
          className="competing-team-main-img-desktop"
        />
        <div className="first-innings-container">
          <p className="first-innings">First Innings</p>
          <p className="first-innings-team">{firstInnings}</p>
          <p className="first-innings-heading">Second Innings</p>
          <p className="first-innings-team">{secondInnings}</p>
          <p className="first-innings-heading">Man Of The Match</p>
          <p className="first-innings-team">{manOfTheMatch}</p>
          <p className="first-innings-heading">Umpires</p>
          <p className="first-innings-team">{umpires}</p>
        </div>
      </div>
      <ul className="team-card-container">
        {recentMatches.map(eachMatch => (
          <MatchCard key={eachMatch.id} each={eachMatch} />
        ))}
      </ul>
    </>
  )
}

export default LatestMatch
