import axios from '@/util/axios';

export const toLogin = (data) => axios.post('/user/login', data);

export const validate = () => axios.get('/user/validate');
