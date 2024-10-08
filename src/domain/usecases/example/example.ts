import { GetExamples } from "@/domain/model/responses/examples/examples";
import { ParamsExample } from "@/domain/model/params/examples/example";

export interface Examples {
    getExample: () => Promise<GetExamples[]>;
    createExample: (params: ParamsExample) => Promise<void>;
    putExample: (params: ParamsExample) => Promise<GetExamples>;
    deleteExample: (params: ParamsExample) => Promise<void>;
}