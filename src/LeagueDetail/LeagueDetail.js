import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faFutbol, faHistory, faMars, } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import './LeagueDetail.css'

const LeagueDetail = () => {
    const { id } = useParams();
    const [leagueDetail, setLeagueDetail] = useState({}) || {};
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagueDetail(data.leagues[0]))
    }, [])
    const { strBadge, strLeague, intFormedYear, strCountry, strSport, strGender, strDescriptionEN } = leagueDetail;
    return (
        <div className="container">
            <div>
                <div class="background">
                    <div class="layer text-center">
                        <img src={strBadge} className="w-25 p-3 rounded" alt=""/>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-between my-5 p-3 bg-danger text-white'>
                <div>
                    <h3>{strLeague}</h3>
                    <br />
                    <p><FontAwesomeIcon icon={faHistory} className="icon"></FontAwesomeIcon> Founded: {intFormedYear}</p>
                    <p><FontAwesomeIcon icon={faFlag} className="icon"></FontAwesomeIcon> Country: {strCountry}</p>
                    <p><FontAwesomeIcon icon={faFutbol} className="icon"></FontAwesomeIcon> Sport Type: {strSport}</p>
                    <p><FontAwesomeIcon icon={faMars} className="icon"></FontAwesomeIcon> Gender: {strGender}</p>
                </div>
                <div>
                    {
                        strGender && (strGender?.toLowerCase() === 'male' ? (
                            <img className='image' src="https://i.ibb.co/rQZ5873/male.png" alt="" />
                        ) : (
                            <img className='image' src="https://i.ibb.co/ZW0XWvN/female.png" alt="" />
                        ))
                    }
                </div>
            </div>
            <div className='my-5'>
                <small>{strDescriptionEN}</small>
            </div>
            <div className='text-center m-5'>
            <a class='mr-5' style={{ fontSize: '40px'}} href={`https://www.twitter.com`} target="_blank"><FontAwesomeIcon icon={faTwitter} className="icon"></FontAwesomeIcon></a>
            <a class='mr-5' style={{ fontSize: '40px'}} href={`https://www.facebook.com`} target="_blank"><FontAwesomeIcon icon={faFacebook} className="icon"></FontAwesomeIcon></a>
            <a style={{ fontSize: '40px'}} href={`https://www.youtube.com`} target="_blank"><FontAwesomeIcon icon={faYoutube} className="icon"></FontAwesomeIcon></a>
            </div>
        </div>
    );
};

export default LeagueDetail;