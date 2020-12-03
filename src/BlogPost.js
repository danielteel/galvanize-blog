import './BlogPost.css';

function applyFilterToText(text, filter){
    if (filter.length===0) return text;

    let returnVal=[];
    let workingString="";

    for (let i=0;i<text.length;i++){
        if (text.substr(i, filter.length).toLowerCase()===filter){
            returnVal.push(workingString);
            returnVal.push(<span className="hilightFilter">{text.substr(i, filter.length)}</span>);
            workingString="";
            i+=filter.length-1;
        }else{
            workingString+=text[i];
        }
    }

    returnVal.push(workingString);
    return returnVal;
}

function BlogPost({post:{title, author, contents}, filter}){
    return (
        <div className="post">
            <h2>{applyFilterToText(title, filter)}</h2>
            <h4>By {applyFilterToText(author, filter)}</h4>
            <p>{applyFilterToText(contents, filter)}</p>
        </div>
    );
}


export default BlogPost;