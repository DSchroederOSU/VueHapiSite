const Card = require("../models/CardSchema");
const Boom = require('boom')
const cardService = require("../services/cardService");
module.exports = [
    {
      method: 'GET',
      path: '/posts',
      handler: async (request, h) => {
        const cards = await cardService.getCards
        if (!cards) {
          return Boom.badImplementation('Could not get cards')
        }
        return cards
      }
    },
    {
      method: 'POST',
      path: '/posts',
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
