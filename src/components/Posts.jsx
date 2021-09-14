import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../actions/actionCreators';
import Post from './Post';
import Loader from './Loader';
import Alert from './Alert';

export default function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);
  const loading = useSelector(state => state.app.loading);
  const alert = useSelector(state => state.app.alert);

   useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (alert) return <Alert text={alert} vision={'danger'} />
  if (loading) return <Loader />
  if (!posts.length) return <Alert text={'На сегодня услуги закончились'} vision={'warning'} />

  return posts && posts.map(post => <Post post={post} key={post.id} />)
}