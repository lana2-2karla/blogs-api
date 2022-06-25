'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BlogPosts', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      content: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      published: {
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE
      },
      updated: {
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE
      },
      
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE
      }
     });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BlogPosts');
  
  }
};
