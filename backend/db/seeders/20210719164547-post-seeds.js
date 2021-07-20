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
      {
        title: "Bubble Sort",
        content: "Bubble Sort is generally the first major sorting algorithm to come up in most introductory programming courses. Learning about this algorithm is useful educationally, as it provides a good introduction to the challenges you face when tasked with converting unsorted data into sorted data, such as conducting logical comparisons, making swaps while iterating, and making optimizations. It's also quite simple to implement, and can be done quickly. Bubble Sort is almost never a good choice in production simply because: it is not efficient, it is not commonly used, and there is a stigma attached to it. (Source: App Academy Open)",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Selection Sort",
        content: "Selection sort works by maintaining a sorted region on the left side of the input array; this sorted region will grow by one element with every 'pass' of the algorithm. A single 'pass' of selection sort will select the next smallest element of unsorted region of the array and move it to the sorted region. Because a single pass of selection sort will move an element of the unsorted region into the sorted region, this means a single pass will shrink the unsorted region by 1 element whilst increasing the sorted region by 1 element. Selection sort is complete when the sorted region spans the entire array and the unsorted region is empty! (Source: App Academy Open)",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Insertion Sort",
        content: "Insertion Sort is similar to Selection Sort in that it gradually builds up a larger and larger sorted region at the left-most end of the array. However, Insertion Sort differs from Selection Sort because this algorithm does not focus on searching for the right element to place (the next smallest in our Selection Sort) on each pass through the array. Instead, it focuses on sorting each element in the order they appear from left to right, regardless of their value, and inserting them in the most appropriate position in the sorted region. (Source: App Academy Open)",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Linked Lists",
        content: "In the university setting, it’s common for Linked Lists to appear early on in an undergraduate’s Computer Science coursework. While they don't always have the most practical real-world applications in industry, Linked Lists make for an important and effective educational tool in helping develop a student's mental model on what data structures actually are to begin with. Linked lists are simple. They have many compelling, reoccurring edge cases to consider that emphasize to the student the need for care and intent while implementing data structures. They can be applied as the underlying data structure while implementing a variety of other prevalent abstract data types, such as Lists, Stacks, and Queues, and they have a level of versatility high enough to clearly illustrate the value of the Object Oriented Programming paradigm. They also come up in software engineering interviews quite often. (Source: App Academy Open)",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "HTTP",
        content: "HTTP defines the process of exchanging hypertext between systems. Specifically, HTTP works between clients and servers. A client (sometimes called the user agent) is the data consumer. This is usually your web browser. A server (sometimes referred to as the origin) is the data provider, often where an application is running. In a typical HTTP exchange, the client sends a request to the server for a particular resource: a webpage, image, or application data. The server provides a response containing either the resource that the client requested or an explanation of why it can't provide the resource. (Source: App Academy Open)",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "REST APIs",
        content: "In RESTful APIs, you generally have two kinds of URLs, ones that points at collections of resources and ones that point at single resources. Using the Twitter application as an example, a path like /my/tweets would point to a collection of tweets made by you. A path like /my/tweets/17 would point to a tweet made by you with the id of 17. Usually, those ids are the primary keys of rows in your database for the record that contains the information for that specific tweet. The naming scheme, again, is quite simple. A path that ends in a plural noun represents a collection of resources that your API provides for developers to interact with. The following examples are just naming schemes that you would decide as the person creating the paths that your application will handle. A path that combines a plural noun and a specific identifier represents a single resource in your application. Often, the identifier is a primary key from the database. However, if you have a unique column that also identifies a specific record, you could use that instead. (Source: App Academy Open)",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Object-Oriented Programming",
        content: "Object-Oriented Programming (OOP) is one of the most popular programming paradigms. Additionally, OOP can help engineers learn how to breakdown complex problems. (Source: App Academy Open)",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Object-Oriented Programming: Classes vs Objects",
        content: "In strictest terms, an object class is the definition of an object, and an object instance is a use of that object. Quite often developers loosely use the generic term 'object' to refer to either or both. Or sometimes 'object' means a data structure with key-value storage represented by curly-braces (a.k.a. POJO - Plain Old JavaScript Object). You will quickly learn to tell the difference based on the context. For example, 'object' means 'object class' whenever discussing how data is stored and changed within the object (that is, the properties & methods); and 'object' means the 'object instance' (or 'instance of an object') whenever speaking of a specific, individual use of the object class. (Source: App Academy Open)",
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
