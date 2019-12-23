import axios, { AxiosInstance } from 'axios';

export default class AxiosService {
  static readonly instance: AxiosInstance = axios.create({
    baseURL: 'https://api.hnpwa.com/v0',
    timeout: 100000,
  });
}