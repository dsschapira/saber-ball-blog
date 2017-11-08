import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DataStore from '../flux/stores/DataStore.js';
import Banner from '../Components/Banner';
import TweetBox from '../Components/TweetBox';
import ShareButtons from '../Components/ShareButtons';
import connectToStores from 'alt-utils/lib/connectToStores';

class Page extends Component{

    state = {
        data: {}
    };

    static propTypes = {
        slug: PropTypes.string.isRequired
    }

    static getStores(){
        return [DataStore];
    }

    static getPropsFromStores(){
        return DataStore.getState();
    }

    componentDidMount(){
       
    }

    reconcileSlug(){
        if(this.props.data.pages){
            return this.getNewPage();
        }
        else{
            return({header:"Loading",content:"Getting Page..."});
        }
    }

    getNewPage(){
        let retObj = {
            header: DataStore.getPageBySlug(this.props.slug).title
                ?
                DataStore.getPageBySlug(this.props.slug).title.rendered
                :
                "",
            content: DataStore.getPageBySlug(this.props.slug).content
                ?
                DataStore.getPageBySlug(this.props.slug).content.rendered
                :
                ""
        };
        return retObj;
    }

    render(){
        window.scrollTo(0,0);
        let {header,content} = this.reconcileSlug();
        
        return(
            <div>
                <div className="banner-container-page">
                    <Banner />
                </div>
                <div className="container">
                    <div className="content-container">
                        <h1>{header}</h1>
                        <a  id="twitter-follow-btn" href="https://twitter.com/SaberBallBlog?ref_src=twsrc%5Etfw" 
                            style={{
                                position: "relative",
                                height: "20px",
                                boxSizing: "border-box",
                                padding: "2px 8px 2px 6px",
                                backgroundColor: "#1b95e0",
                                color: "#fff",
                                borderRadius: "3px",
                                fontWeight: "500",
                                cursor: "pointer",
                                textDecoration: "none"
                            }}>
                                Follow @SaberBallBlog
                        </a>
                        <div 
                        className="content-field"
                        dangerouslySetInnerHTML={{__html:content}}></div>
                        <hr />
                        <TweetBox />
                        <hr />
                        <h4>Share this page:</h4>
                        <ShareButtons />
                    </div>
                </div>
            </div>
        );
    }
}

export default connectToStores(Page);