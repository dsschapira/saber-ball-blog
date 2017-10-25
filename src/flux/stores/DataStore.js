import alt from '../alt/alt.js';
import DataActions from '../actions/DataActions.js';

class DataStore{
    constructor() {
        this.data={
            posts: {},
            pages: {},
            media: {},
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
            getAllMedia: this.getAllMedia,
            getPageBySlug: this.getPageBySlug,
            getPostById: this.getPostById,
            getPostByCat: this.getPostByCat,
            getMediaById: this.getMediaById
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

    getAllMedia(){
        return this.getState().data.media;
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

    getMediaById(mediaId){
        const media = this.getState().data.media;
        return media[Object.keys(media).find( (img,i) => {
            return media[img].id===mediaId;
        })] || {}
    }
}

export default alt.createStore(DataStore, 'DataStore');