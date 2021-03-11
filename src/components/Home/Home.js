import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import League from '../League/League';
import './Home.css'

const Home = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagues(data.leagues.slice(0, 15)))
    }, [])
    return (
        <section className='bg-info'>
            <div className='banner'>
                <h1>Sport360</h1>
            </div>
            <div className='container'>
                <div className="row g-5 row-cols-3 text-center">
                    {
                        leagues.map(league => <League league={league}></League>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Home;