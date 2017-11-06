import React from 'react';
import {SocialIcon} from 'react-social-icons';

const ShareButtons = (props) =>{
    
    const url = window.location.href;

    const urls = {
        twitter : "https://www.twitter.com/intent/tweet/?original_referer=saberballblog&via=saberballblog&url="+encodeURI(url),
        facebook: "https://www.facebook.com/v2.7/dialog/share?app_id=188001588433006&href="+encodeURI(url)+"display=popup&redirect_uri=https%3A%2F%2Fsaberballblog.com%2Fm%2Ffacebook%2Fclose",
        reddit: "https://www.reddit.com/submit?url="+encodeURI(url),
        google_plus: "https://plus.google.com/share?url="+encodeURI(url),
    };

    return(
        <div>
            <SocialIcon title={"Twitter"} style={{marginRight:".5em"}} network={"twitter"} url={urls.twitter} />
            <SocialIcon title={"Facebook"} style={{marginRight:".5em"}} network={"facebook"} url={urls.facebook} />
            <SocialIcon title={"Google+"} style={{marginRight:".5em"}} network={"google"} url={urls.google_plus} />
            <SocialIcon title={"Reddit"} url={urls.reddit} color={"black"} />
        </div>
    );
}


export default ShareButtons;