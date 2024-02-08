import swaggerAutogen from 'swagger-autogen';
import {version} from './package.json';
const doc = {
    info: {
        version: version,            
        title: 'API model',             
        description: ''         // by default: ''
      },
      host: '',                 // by default: 'localhost:3000'
      basePath: '/src',             // by default: '/'
      schemes: [],              // by default: ['http']
      consumes: [],             // by default: ['application/json']
      produces: [],             // by default: ['application/json']
      tags: [                   // by default: empty Array
        {
          name: '',             // Tag name
          description: ''       // Tag description
        },
        // { ... }
      ],
      securityDefinitions: {},  // by default: empty object
      definitions: {}           // by default: empty object
};

const outputFile = './swagger-output.json';
const routes = ['src/api/v1/routes/*.ts'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen()(outputFile, routes, doc);