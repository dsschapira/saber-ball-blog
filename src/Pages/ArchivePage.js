import React from 'react';
import Banner from '../Components/Banner';
import ArchivedPostsBox from '../Components/ArchivedPostsBox';
import ArchiveMonthsBox from '../Components/ArchiveMonthsBox';
import '../styles/Archive.css';

const ArchivePage = ({match}) =>{
    window.scrollTo(0,0);
    if(match.params.month!==undefined){
        let month = match.params.month.slice(0,1).toUpperCase()+match.params.month.slice(1,match.params.month.length);
        return(
            <div>
                <div className="banner-archive-container">
                    <Banner />
                </div>
                <div className="archived-results-container">
                    <h1>Archive</h1>
                    <h2>Showing posts from {month} {match.params.year}</h2>
                    <ArchivedPostsBox 
                        month={match.params.month}
                        year={match.params.year}
                    />
                </div>
            </div>
        );
    }
    else{
        return(
            <div>
                <div className="banner-archive-container">
                    <Banner />
                </div>
                <div className="archived-results-container">
                    <h1>Archive</h1>
                    <ArchiveMonthsBox />
                </div>
            </div>
        );
    }
}

export default ArchivePage;