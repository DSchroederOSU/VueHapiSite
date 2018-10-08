const Card = require("../models/CardSchema");

module.exports = {
  getCards: new Promise((resolve, reject) => {
      Card.find({}, function (err, cards) {
        if(err){
          reject(err)
        }
        resolve(cards);
      });
    }),
   addCard: function(req) {
      return new Promise((resolve, reject) => {
        let new_card = new Card({
          title: req.payload.title,
          description: req.payload.description,
          image: req.payload.image,
          price: req.payload.price
        })
        new_card.save(function (error) {
          if (error) {
            reject(error)
          }
          else {
            resolve({
              success: true,
              message: 'Card saved successfully!'
            })
          }
        })
      })
  }
}
