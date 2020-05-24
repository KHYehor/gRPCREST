'use strict';

import { App } from "../../../@types/app";
import { RouteOptions } from 'fastify';

import {internalServerError, invalidInputArgumets, notFound,} from '../../common';

const setUpMatrixMul = (app: App, MatrixController: any): void => {
  const options: RouteOptions = {
    method: 'POST',
    url: '/matrix/mul',
    handler: MatrixController.getMatrixMul,
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
            result: {
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
  };

  Object.assign(
    // @ts-ignore
    options?.schema?.response ?? {},
    invalidInputArgumets.response,
    internalServerError.response,
    notFound.response,
  );
  app.route(options);
};



export default setUpMatrixMul;
