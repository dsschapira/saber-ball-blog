import alt from '../alt/alt.js';
import DataActions from '../actions/DataActions.js';

class DataStore{
    constructor() {
        this.data = {};

        this.bindListeners({
            
            handleSuccess: DataActions.GET_SUCCESS
        });

        this.exportPublicMethods({
            getAll: this.getAll,
            getAllPages: this.getAllPages,
            getAllPosts: this.getAllPosts,
            getPageBySlug: this.getPageBySlug,
            getPostById: this.getPostById
        });
    }

    handleSuccess(data){
        this.setState({data});
    }

    getAll(){
        return this.getState().data;
    }

    getAllPages(){
        return this.getState().data.pages;
    }

    getAllPosts(){
        return this.getState().data.posts;
    }

    getPageBySlug(slug){
        const pages = this.getState().data.pages;
        return pages[Object.keys(pages).find( (page,i) => {
            return pages[page].slug === slug;
        })] || {};
    }

    getPostById(Id){
        const posts = this.getState().data.posts;
        return posts[Object.keys(posts).find( (post,i) => {
            return posts[post].id === Id;
        })] || {}
    }
}

export default alt.createStore(DataStore, 'DataStore');