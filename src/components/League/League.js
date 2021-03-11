import React from 'react';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const League = (props) => {
    const { idLeague, strLeague, strSport } = props.league;
    const history = useHistory();
    const showLeagueDetails = idLeague =>{
        const url = `league/${idLeague}`;
        history.push(url);
    }
    return (
        <div class="col">
            <div class="card shadow m-4 rounded-3 bg-danger text-white">
                <div class="card-body">
                    <h5 class="card-title">{strLeague}</h5>
                    <p>Sports type: {strSport}</p>
                    <button onClick={() => showLeagueDetails(idLeague)} class="btn btn-success">Explore <FontAwesomeIcon icon={faArrowRight} className="icon"></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default League;