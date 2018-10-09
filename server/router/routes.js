const Card = require("../models/CardSchema");
const Boom = require('boom')
const cardService = require("../services/cardService");
module.exports = [
    {
      method: 'GET',
      path: '/cards',
      handler: async (request, h) => {
        try {
          const result = await cardService.getCards
          return result;
        }
        catch (err) {
          return Boom.badImplementation(err)
        }
      }
    },
    {
      method: 'GET',
      path: '/cards/{id}',
      handler: async (request, h) => {
        try {
          const result = await cardService.getCards
          return result;
        }
        catch (err) {
          return Boom.badImplementation(err)
        }
      }
    },
    {
      method: 'POST',
      path: '/cards',
      handler: async (req, h) => {
        try {
          const result = await cardService.addCard(req)
          return result;
        }
        catch (err) {
          return Boom.badImplementation(err)
        }
      }
    }
];
