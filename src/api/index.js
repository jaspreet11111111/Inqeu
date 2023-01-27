import axios from 'axios';

const API = axios.create({ baseURL: '' });

export const fetchPostsApi = () => API.get('api/v1/posts');
export const createPostApi = (newPost) => API.post('api/v1/posts', newPost)

export const signIn = (formData) => API.post('api/v1/user/signin', formData);
export const signUp = (formData) => API.post('api/v1/user/signup', formData);

export const fetchUsersDetails = (id) => API.get(`api/v1/user/${ id }`)
