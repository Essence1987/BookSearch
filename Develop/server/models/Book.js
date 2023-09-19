// const { Schema } = require('mongoose');

// // This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
// const bookSchema = new Schema({
//   authors: [
//     {
//       type: String,
//     },
//   ],
//   description: {
//     type: String,
//     required: true,
//   },
//   // saved book id from GoogleBooks
//   bookId: {
//     type: String,
//     required: true,
//   },
//   image: {
//     type: String,
//   },
//   link: {
//     type: String,
//   },
//   title: {
//     type: String,
//     required: true,
//   },
// });

// module.exports = bookSchema;

const {gql} = require('apollo-server-express');
const express = require('express');

const booktypeDefs = gql`
type Book {
    _id: ID!
    authors: [String]!
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
}

input BookInput {
    authors: [String]!
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
}

type Query {

}

type Mutation {

}

`;

module.exports = booktypeDefs;
