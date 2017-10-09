import React from 'react';
import Banner from '../Components/Banner';
import SearchResultsBox from '../Components/SearchResultsBox';
import '../styles/SearchResults.css';

const SearchResultsPage = ({match}) => {
   
    return(
        <div>
            <div className="banner-container">
                <Banner />
            </div>
            <div className="search-results-container">
                <h1>Search Results</h1>
                <h2>Showing results for: &quot;{decodeURIComponent(match.params.query)}&quot;</h2>
                <SearchResultsBox query={match.params.query}/>
            </div>
            
        </div>
    );
}

export default SearchResultsPage;
