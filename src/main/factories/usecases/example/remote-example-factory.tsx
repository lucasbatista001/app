import { RemoteExamples } from "../../../../data/usecases/example/example";
import { Examples } from "../../../../domain/usecases/example/example";
import { makeAxiosHttpClient } from "../../http/axios-http-client-factory";
import { MakeExample } from "../../modules/example/example-factory";

export const makeExampleApiCall = (): Examples => {
    return new RemoteExamples(MakeExample(), makeAxiosHttpClient());
}