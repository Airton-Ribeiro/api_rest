/** @type {import('sequelize-cli').Migration} */
const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [{
        nome: 'Airton',
        email: 'airton@teste.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      }],

      {},
    );
  },

  async down(queryInterface, Sequelize) {},
};
// obs de seeds para branch secundaria
g
