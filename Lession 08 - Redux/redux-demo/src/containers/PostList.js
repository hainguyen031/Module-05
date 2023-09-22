import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Post from '../components/Post';
import { deletePost } from '../actions';

function PostList({newPosts, onDelete}) {
  return (
    <div>
      {newPosts.map(post => {
        return (
          <Post post={ post } key={ post.id } onDelete={ onDelete } />
        );
      })}
    </div>
  );
}

function mapDispatchToProps(dispatch){
  return{
    onDelete(id){
      dispatch(deletePost(id));
    }
  } 
}

function mapStateToProps(state){
  return {
    newPosts: state.posts
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);