import {HttpClient, HttpStatusCode} from '../../protocols/http/http-client';
import {
  ForbiddenError,
  InvalidCredentialsError,
  UnexpectedError,
} from '../../../domain/errors';
import {
  Examples
} from '../../../domain/usecases/example/example';
import { ParamsExample } from '@/domain/model/params/examples/example';
import { GetExamples } from '@/domain/model/responses/examples/examples';

/**
 * This class is responsible for doing a call to API for validate the params
 * */
export class RemoteExamples implements Examples {
  /**
   * Constructs a RemoteValidate
   *
   * @param url The url that will be called in request
   * @param httpClient The Client which will be used to call the api
   * */
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<any>,
  ) {}

  async getExample(): Promise<GetExamples[]>{
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
      headers: {
        UserToken: '',
      }
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      case HttpStatusCode.forbidden:
        throw new ForbiddenError();
      default:
        throw new UnexpectedError(httpResponse.body?.message);
    }
  }

  async createExample(params: ParamsExample): Promise<void> {
    const httpResponse = await this.httpClient.request({
      url: this.url + '/?ExampleId=' + params.idExample,
      method: 'post',
      headers: {
        UserToken: params.userToken,
      }
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      case HttpStatusCode.forbidden:
        throw new ForbiddenError();
      default:
        throw new UnexpectedError(httpResponse.body?.message);
    }
  }; 

  putExample: (params: ParamsExample) => Promise<GetExamples>;

  deleteExample: (params: ParamsExample) => Promise<void>;

}
