'use strict';

import { App } from '../../../@types/app';
import {RouteOptions} from "fastify";
import {
  invalidInputArgumets,
  internalServerError,
  notFound,
} from '../../common';


const setUpMatrixSum = (app: App, MatrixController: any): void => {

  const options: RouteOptions =  {
    method: 'POST',
    url: '/matrix/sum',
    handler: MatrixController.getMatrixSum,
    schema: {
      body: {
        type: 'object',
        properties: {
          matrix1: {
            type: 'array',
            items: {
              type: 'array',
              items: {
                type: 'number'
              },
            }
          },
          matrix2: {
            type: 'array',
            items: {
              type: 'array',
              items: {
                type: 'number'
              },
            }
          }
        }
      },
      response: {
        200: {
          type: 'object',
          properties: {
            matrix: {
              type: 'array',
              items: {
                type: 'array',
                items: {
                  type: 'number'
                },
              }
            }
          }
        }
      }
    }
  }

  Object.assign(
    // @ts-ignore
    options?.schema?.response ?? {},
    invalidInputArgumets.response,
    internalServerError.response,
    notFound.response,
  );

  app.route(options);
};

export default setUpMatrixSum;
