import alt from '../alt/alt.js';
import DataActions from '../actions/DataActions.js';

class DataStore{
    constructor() {
        this.data={
            posts: {},
            pages: {},
            searchRes: {},
            returned: false
        };

        this.bindListeners({
            
            handleSuccess: DataActions.getSuccess
        });

        this.exportPublicMethods({
            getAll: this.getAll,
            getAllSearchResults: this.getAllSearchResults,
            getAllPages: this.getAllPages,
            getAllPosts: this.getAllPosts,
            getPageBySlug: this.getPageBySlug,
            getPostById: this.getPostById,
            getPostByCat: this.getPostByCat
        });
    }

    handleSuccess(data){
        this.setState({...data, data});
    }

    getAll(){
        return this.getState().data;
    }

    getAllSearchResults(){
        return this.getState().data.searchRes;
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

    getPostByCat(cat){
        const posts = this.getState().data.posts;
        return posts.filter((post)=>{
            let ret=false;
            for(let val=0;val<post.categories.length;val++){
                if(cat === post.categories[val]){
                    ret = true;
                }
            }
            return ret;
        });
    }
}

export default alt.createStore(DataStore, 'DataStore');