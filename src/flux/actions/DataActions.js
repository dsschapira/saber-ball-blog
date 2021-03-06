import axios from 'axios';
import alt from '../alt/alt.js';

class DataActions {

    constructor() {
        const appUrl = 'https://danschapira.com/demo-content';
        //'http://localhost/playgroundwp.com/wordpress'; //wordpress installation url

        this.pagesEndPoint = `${appUrl}/wp-json/wp/v2/pages`; //Endpoint for Wordpress pages
        this.postsEndPoint = `${appUrl}/wp-json/wp/v2/posts/?per_page=90`; //Endpoint for Wordpress posts
        //limiting to 90 posts.  Anything else can be found through the archives links
        this.searchEndPoint = `${appUrl}/wp-json/wp/v2/posts/?search=`; //Endpoint for Wordpress search
        this.mediaEndPoint = `${appUrl}/wp-json/wp/v2/media`; //Endpoint for getting media
    }

    api(endPoint){
        return new Promise( (resolve,reject) => {
            axios.get(endPoint)
                .then( (response) => {
                    resolve(response.data);
                })
                .catch( (error) => {
                    reject(error);
                });
        });
    }

    getPages(cb,query=""){ //if category included, it filters posts
        this.api(this.pagesEndPoint)
            .then( (response) => {
                this.getPosts(response,cb,query);
            });
        return true;
    }

    getPosts(pages,cb,query){
        this.api(this.postsEndPoint)
            .then( (response) => {
                const posts = response;
                if(query===""){
                    this.getMedia(pages,posts,cb);
                }
                else{
                    this.searchPosts(pages,posts,query,cb);
                }
            });
        return true;
    }

    relayPosts(pages,posts,media,cb){
        const payload = {pages,posts,media};

        this.getSuccess(payload);
        cb(payload);
        return true;
    }

    getMedia(pages,posts,cb,returned=false,searchRes=false){
        this.api(this.mediaEndPoint)
            .then( (response) => {
                const media = response;
                if(!searchRes){
                    this.relayPosts(pages,posts,media,cb);
                }
                else{
                    const payload = {pages,posts,searchRes,returned,media};
                    this.getSuccess(payload);
                    cb(payload);
                }
            });
        return true;
    }

    newSearchAction(){
        const returned = false;
        const searchRes = [{}];
        const payload = {searchRes,returned};
        this.getSuccess(payload);
        return true;
    }

    searchPosts(pages,posts,query,cb){
        this.api(this.searchEndPoint+query)
            .then( (response) => {
                const searchRes = response;
                const returned = true;
                
                this.getMedia(pages,posts,cb,returned,searchRes);
            });
        return true;
    }

    getSuccess(payload){
        return payload;
    }
}

export default alt.createActions(DataActions);