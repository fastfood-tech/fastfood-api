export const json = {
  swagger: '2.0',
  info: {
    title: 'Fastfood API',
    version: '2.1.0',
  },
  definitions: {
    NewOrder: {
      type: 'object',
      properties: {
        clientName: {
          type: 'string',
        },
        order: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              productId: {
                type: 'integer',
              },
              amount: {
                type: 'integer',
              },
              annotations: {
                type: 'string',
              },
              selectedExtras: {
                type: 'array',
                items: {
                  type: 'integer',
                },
              },
            },
            required: ['productId', 'amount', 'annotations', 'selectedExtras'],
          },
        },
      },
      required: ['clientName', 'order'],
    },
    Extra: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
        },
        name: {
          type: 'string',
        },
        description: {
          type: 'string',
        },
        imageUrl: {
          type: 'string',
        },
        price: { type: 'number' },
      },
    },
    Product: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
        },
        name: {
          type: 'string',
        },
        imageUrl: {
          type: 'string',
        },

        code: { type: 'integer' },

        categoryId: { type: 'integer' },

        ingredients: { type: 'string' },

        price: { type: 'number' },

        extras: {
          type: 'array',
          items: {
            $ref: '#/definitions/Extra',
          },
        },
      },
    },
  },
  paths: {
    '/categories': {
      get: {
        summary: 'Get all categories',
        responses: {
          '200': {
            description: 'Successful response',
            schema: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: {
                    type: 'integer',
                  },
                  name: {
                    type: 'string',
                  },
                  image: {
                    type: 'string',
                  },
                },
              },
            },
          },
        },
      },
    },
    '/products': {
      get: {
        summary: 'Get all products',
        parameters: [
          {
            name: 'name',
            in: 'query',
            description: 'Filter products by name',
            required: false,
            type: 'string',
          },
          {
            name: 'categoryId',
            in: 'query',
            description: 'Filter products by category',
            required: false,
            type: 'integer',
          },
          {
            name: 'code',
            in: 'query',
            description: 'Filter products by code',
            required: false,
            type: 'integer',
          },
        ],
        responses: {
          200: {
            description: 'Successful response',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/Product',
              },
            },
          },
        },
      },
    },
    '/products/top': {
      get: {
        summary: 'Get a small amount of products',
        responses: {
          200: {
            description: 'Successful response',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/Product',
              },
            },
          },
        },
      },
    },
    '/orders': {
      get: {
        summary: 'Get all open orders',
        responses: {
          200: {
            description: 'Successful response',
            schema: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'integer' },
                  isDelivered: { type: 'boolean' },
                  clientName: { type: 'string' },
                  isDone: { type: 'boolean' },
                  products: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        id: { type: 'integer' },
                        name: { type: 'string' },
                        amount: { type: 'integer' },
                        annotations: { type: 'string' },
                        imageUrl: { type: 'string' },
                        ingredients: { type: 'string' },
                        price: { type: 'number' },
                        code: { type: 'integer' },
                        selectedExtras: {
                          type: 'array',
                          items: { $ref: '#/definitions/Extra' },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      post: {
        summary: 'Create a new open order',

        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'New order object',
            required: true,
            schema: {
              $ref: '#/definitions/NewOrder',
            },
          },
        ],
        responses: {
          '201': {
            description: 'Order created',
          },
          '400': {
            description: 'Bad Request: Dados inválidos',
          },
        },
      },
    },
    '/orders/{orderId}/finish': {
      post: {
        summary: 'Finish order',
        parameters: [
          {
            name: 'orderId',
            in: 'path',
            description: 'ID of the order to finish',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          '200': {
            description: 'Order finished successfully',
          },
          '404': {
            description: 'Order not found',
          },
          '409': {
            description: 'Order already finished',
          },
        },
      },
    },
    '/orders/{orderId}/deliver': {
      post: {
        summary: 'Finish order',
        parameters: [
          {
            name: 'orderId',
            in: 'path',
            description: 'ID of the order to deliver',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          '200': {
            description: 'Order delivered successfully',
          },
          '404': {
            description: 'Order not found',
          },
          '409': {
            description: 'Order already delivered',
          },
        },
      },
    },
  },
};
