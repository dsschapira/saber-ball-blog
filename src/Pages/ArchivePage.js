import React from 'react';
import Banner from '../Components/Banner';
import ArchivedPostsBox from '../Components/ArchivedPostsBox';
import '../styles/Archive.css';

const ArchivePage = ({match}) =>{
    window.scrollTo(0,0);
    return(
        <div>
            <div className="banner-archive-container">
                <Banner />
            </div>
            <ArchivedPostsBox />
        </div>
    );
}

export default ArchivePage;