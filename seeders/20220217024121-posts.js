'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('posts', [
      {
        user_id: 1,
        content: 'Cupcake ipsum dolor sit. Amet I love liquorice jujubes pudding croissant I love pudding. Apple pie macaroon toffee jujubes pie tart cookie applicake caramels. Halvah macaroon I love lollipop. Wypas I love pudding brownie cheesecake tart jelly-o. Bear claw cookie chocolate bar jujubes toffee.',
        image: 'https://placekitten.com/g/200/300',
      },
      {
        user_id: 2,
        content: 'Cupcake ipsum dolor sit. Amet I love liquorice jujubes pudding croissant I love pudding. Apple pie macaroon toffee jujubes pie tart cookie applicake caramels. Halvah macaroon I love lollipop. Wypas I love pudding brownie cheesecake tart jelly-o. Bear claw cookie chocolate bar jujubes toffee.',
        image: 'https://placekitten.com/g/200/300',
      },
      {
        user_id: 3,
        content: "Excuse me, I'd like to ASS you a few questions. Hey, maybe I will give you a call sometime. Your number still 911? Look at that, it's exactly three seconds before I honk your nose and pull your underwear over your head. We got no food we got no money and our pets heads are falling off! Haaaaaaarry.",
        image: 'https://placekitten.com/g/200/300',
      },
      {
        user_id: 4,
        content: "Excuse me, I'd like to ASS you a few questions. Hey, maybe I will give you a call sometime. Your number still 911? Look at that, it's exactly three seconds before I honk your nose and pull your underwear over your head. We got no food we got no money and our pets heads are falling off! Haaaaaaarry.",
        image: null
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
