import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEdit, fetchEditChange, fetchEditSave } from '../actions/actionCreators';
import { useHistory } from 'react-router-dom';
import Loader from './Loader';
import Alert from './Alert';

export default function PostsEdit({ match }) {
  const dispatch = useDispatch();
  const editPosts = useSelector(state => state.editPosts.editPosts);
  const redirect = useSelector(state => state.editPosts.redirect);
  const loading = useSelector(state => state.app.loading);
  const alert = useSelector(state => state.app.alert);
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchEdit(match.params.id));
  }, [dispatch, match.params.id]);

  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(fetchEditChange(name , value));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(fetchEditSave(match.params.id, form.name.value, form.price.value, form.content.value));
  }

  if (alert) return <Alert text={alert} vision={'danger'} />
  if (loading) return <Loader />
  if (redirect) history.push('/services')

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Название</label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="name"
          value={editPosts.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">Стоимость</label>
        <input
          type="number"
          className="form-control"
          id="price"
          name="price"
          value={editPosts.price}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="describe">Описание</label>
        <input
          type="text"
          className="form-control"
          id="describe"
          name="content"
          value={editPosts.content}
          onChange={handleChange}
        />
      </div>
      <div className="btn-group" role="group">
        <button
          type="submit"
          className="btn btn-primary"
        >
          Save
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => history.goBack()}
        >
          Cancel
        </button>
      </div>
    </form>
  )
}