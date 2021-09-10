import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchDelete } from '../actions/actionCreators';
import { useHistory } from 'react-router-dom';

export default function Post({ post }) {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text">{post.name}: {post.price}</p>
        <div className="btn-group" role="group">
          <button
          type="button"
          className="btn btn-primary"
          onClick={() => history.push(`/services/${post.id}`)}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => dispatch(fetchDelete(post.id))}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}