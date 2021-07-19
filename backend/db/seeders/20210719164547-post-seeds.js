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
    return queryInterface.bulkInsert('Posts', [
      {
        title: "Hello World!",
        content: "console.log('Hello World!')",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Hello World Origins",
        content: "Where exactly did Hello World originate? It’s creator, Brian Kernighan, authored one of the most widely read programming books, C Programming Language. He first referenced Hello World in his book titled A Tutorial Introduction to the Programming Language B. And while no one can scientifically explain why it became so wildly popular, the program marks a major change in the historical rhetoric of programming itself. Before the 1970s, most people saw computers as complex and expensive equipment reserved for academics, defense or government work.Over the years, industry leaders worked hard to fight this stigma and prove to the general public that computers were, in fact, useful.And when PDP- 11, one of the first successful commercial microcomputers launched, Hello World began to spread.Users could now “talk” directly to their new equipment using a programming language.As programmable computers became more prevalent, more people turned to Kernighan’s C Programming Language and a reintroduction to Hello World to begin their professional journey. (Source: https://blogs.vmware.com/opensource/2020/04/22/hello-world-timeless-code/)",
        userId: 1,
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
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
