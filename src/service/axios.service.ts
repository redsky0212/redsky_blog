import axios, { AxiosInstance } from 'axios';

export default class AxiosService {
  public static readonly instance: AxiosInstance = axios.create({
    baseURL: 'https://api.hnpwa.com/v0',
    timeout: 100000,
  });
}
