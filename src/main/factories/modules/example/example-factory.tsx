import React from 'react'
import {ExamplePage} from '../../../../presentation/modules/example'
import { makeExampleApiCall } from '../../usecases/example/remote-example-factory'

export const MakeExample: React.FC = () => {
    return <ExamplePage exampleApi={makeExampleApiCall} />
}