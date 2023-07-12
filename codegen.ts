import { CodegenConfig } from '@graphql-codegen/cli';


const config: CodegenConfig = {
    schema: 'http://localhost:7878/graphql',
    documents: ['src/**/*.tsx'],
    generates: {
        './src/__generated__/': {
            preset: 'client',
            plugins: ['typescript'],
            presetConfig: {
                gqlTagName: 'gql',
            }
        }
    },
    ignoreNoDocuments: true,

};


export default config;