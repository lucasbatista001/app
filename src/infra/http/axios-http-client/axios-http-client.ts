import axios, {type AxiosResponse} from 'axios';
import {
  HttpClient,
  HttpRequest,
  HttpResponse,
} from '../../../data/protocols/http/http-client';

// URL Base
axios.defaults.baseURL = '';

axios.defaults.withCredentials = true;

// Axios
export class AxiosHttpClient implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;
    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: {
          ...data.headers,
          Authorization: '',
        },
      });
    } catch (error: any) {
      axiosResponse = error.response;
    }

    return {
      statusCode: axiosResponse?.status,
      body: axiosResponse?.data || axiosResponse,
    };
  }
}
