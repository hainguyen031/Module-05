import React, {Component} from 'react';

class Post extends Component{
  render(){
    let {post, onDelete} = this.props
    return(
      <div>
        <h2>{ post.title }</h2>
        <button className="btn btn-danger" type="button" onClick={() => onDelete(post.id)}>
          Remove
        </button>
        <hr/>
      </div>
    )
  }
}

export default Post;

