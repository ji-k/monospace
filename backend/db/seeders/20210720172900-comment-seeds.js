'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Comments', [
      {
        postId: 1,
        content: 'Nice.',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 1,
        content: 'Great',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 2,
        content: "I found Brian Kernighan's website! https://www.cs.princeton.edu/~bwk/",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 2,
        content: "He still teaches at Princeton.",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 3,
        content: "I learned Bubble Sort today, too!",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 3,
        content: "So never use this in production? Got it.",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 4,
        content: "Learning about algorithms is fun!",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 4,
        content: "I definitely will need to learn and practice this later.",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 5,
        content: "I never thought about how there are many logical ways to sort arrays until today.",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 5,
        content: "This is cool! Thanks for sharing.",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 6,
        content: "This will definitely come up during interviews!!",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 6,
        content: "Are you going to go over Double Linked Lists next?",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 7,
        content: "My last interviewer asked me about HTTP requests and APIs!",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 7,
        content: "Look at my post about REST APIs!",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 8,
        content: "I hope this post helps!",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 8,
        content: "One of my interview questions asked me what makes a API RESTful.",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 9,
        content: "This is interesting",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 9,
        content: "It is definitely important to know this.",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 10,
        content: "Very cool!",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 10,
        content: "OOP and POJO? That is going to be easy to remember.",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
