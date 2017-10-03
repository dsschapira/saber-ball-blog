import axios from 'axios';
import alt from '../alt/alt.js';

class DataActions {

    constructor() {
        const appUrl = 'http://localhost/playgroundwp.com/wordpress'; //wordpress installation url

        this.pagesEndPoint = `${appUrl}/wp-json/wp/v2/pages`; //Endpoint for Wordpress pages
        this.postsEndPoint = `${appUrl}/wp-json/wp/v2/posts`; //Endpoint for Wordpress posts
        this.postsCatEndPoint = `${appUrl}/wp-json/wp/v2/posts?categories=`; //Endpoint for Wordpress posts filtered for a specific category
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

    getPages(cb,cat=""){ //if category included, it filters posts
        if(cat){
            this.api(this.pagesEndPoint)
                .then( (response) => {
                    this.getPostsByCat(response,cat,cb)
                });
        }
        else{
            this.api(this.pagesEndPoint)
                .then( (response) => {
                    this.getPosts(response,cb)
                });
        }
        return true;
    }

    getPostsByCat(pages,cat,cb){
        this.api(this.postsCatEndPoint+cat)
            .then( (response) =>{
                const posts = response;
                const payload = {pages,posts};

                this.getSuccess(payload);
                cb(payload);
            });
        return true;
    }

    getPosts(pages,cb){
        this.api(this.postsEndPoint)
            .then( (response) => {
                const posts = response;
                const payload = {pages,posts};

                this.getSuccess(payload);
                cb(payload);
            });
        return true;
    }

    getSuccess(payload){
        return payload;
    }
}

export default alt.createActions(DataActions);