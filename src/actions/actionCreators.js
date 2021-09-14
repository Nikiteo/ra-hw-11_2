import {
  HIDE_ALERT,
  HIDE_LOADER,
  SHOW_ALERT,
  SHOW_LOADER,
  FETCH_SUCCESS,
  EDIT_FETCH_SUCCESS,
  EDIT_FETCH_CHANGE,
  EDIT_FETCH_SAVE,
} from "./actionTypes";
import axios from 'axios';
import history from '../history';

const URL = process.env.REACT_APP_API_URL;

export function showLoader() {
  return {
    type: SHOW_LOADER,
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  }
}

export const showAlert = (text) => dispatch => {
  dispatch({
    type: SHOW_ALERT,
    payload: text
  })

  setTimeout(() => {
    dispatch(hideAlert());
  }, 5000);
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  }
}

export const successAction = (data) => ({
  type: FETCH_SUCCESS,
  payload: data
});

export const successActionEdit = (data) => ({
  type: EDIT_FETCH_SUCCESS,
  payload: data
});

export const successActionSave = () => ({
  type: EDIT_FETCH_SAVE,
})

export const fetchPosts = () => async dispatch => {
  dispatch(showLoader());
  await axios.get(`${URL}`)
    .then((res) => dispatch(successAction(res.data)))
    .then(() => dispatch(hideLoader()))
    .catch((e) => dispatch(showAlert(`Произошла ошибка! Попробуйте обновить страницу ${e}`)));
}

export const fetchDelete = (id) => async dispatch => {
  dispatch(showLoader());
  await axios.delete(`${URL}/${id}`)
    .then(() => dispatch(fetchPosts()))
    .then(() => dispatch(hideLoader()))
    .catch((e) => dispatch(showAlert(`Произошла ошибка! Попробуйте обновить страницу ${e}`)));
}

export const fetchEdit = (id) => async dispatch => {
  dispatch(showLoader());
  await axios.get(`${URL}/${id}`)
    .then((res) => dispatch(successActionEdit(res.data)))
    .then(() => dispatch(hideLoader()))
    .catch((e) => dispatch(showAlert(`Произошла ошибка! Попробуйте обновить страницу ${e}`)));
}

export const fetchEditSave = (id, name, price, content) => async dispatch => {
  dispatch(showLoader());
  await axios.post(`${URL}`, {
      id: Number(id),
      name,
      price,
      content
    })
    .then(() => dispatch(successActionSave()))
    .then(() => dispatch(hideLoader()))
    .then(() => history.push('/services'))
    .catch((e) => dispatch(showAlert(`Произошла ошибка! Попробуйте обновить страницу ${e}`)));
}

export const fetchEditChange = (name, value) => async dispatch => {
  dispatch({
    type: EDIT_FETCH_CHANGE,
    payload: {
      name,
      value,
    }
  })
}