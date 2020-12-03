import React from 'react';
import './Blog.css';
import BlogPost from './BlogPost';



class Blog extends React.Component{
    constructor(props){
        super(props);
        this.state= {
                        sortOrder:false,
                        posts: this.props.posts,
                        filter: ""
                    };
    }

    render(){
        let posts=this.props.posts;
        let filterText=this.state.filter.trim().toLowerCase();
        if (filterText.length>0){
            posts=posts.filter( (post)=>(post.title.toLowerCase().includes(filterText) || 
                                         post.contents.toLowerCase().includes(filterText) || 
                                         post.author.toLowerCase().includes(filterText)) );
        }

        return  <>
                    <div className="toolbar">
                        <button className="sortButton" onClick={()=>{this.toggleSort()}}>Change Sort</button>
                        <input className="filter" type="text" placeholder="Filter results..." onInput={(e)=>{this.filterChanged(e.target.value)}}/>
                    </div>
                    <div className="blog">
                            {filterText.length>0?"Results: "+posts.length:null}
                            {posts.map( (post)=>( <BlogPost post={post} filter={filterText}/> ) )}
                    </div>
                </>;
    }

    filterChanged(newVal){
        this.setState({filter: newVal});
    }

    toggleSort(){
        let posts=this.props.posts;
        posts.sort((a,b)=>{
            if (a.id > b.id){
                return this.state.sortOrder? 1 : -1;
            }else if (b.id > a.id){
                return this.state.sortOrder? -1 : 1;
            }
            return 0;
        });
        this.setState({sortOrder:!this.state.sortOrder, posts:posts});
    }
}

export default Blog;
