// import express from 'express'
// import mongoose from 'mongoose'
// import { MongoClient } from 'mongodb';
// // const { MongoClient } = require("mongodb");
// const url = process.env.MONGODB_URI;
// const databasename = "music-hackathon";

// export const loudMusic = MongoClient.connect(url).then((client) => {

//     const connect = client.db(databasename);

//     // Connect to collection
//     const collection = connect
//         .collection("projects");



//     collection.find({ Energia: { $gt: '6360' } })
//         .toArray().then((ans) => {
//             return ans
//         });

// }).catch((err) => {
//     // Printing the error message
//     console.log(err.Message);
// })

// export const dancingMusic = MongoClient.connect(url).then((client) => {

//     const connect = client.db(databasename);

//     // Connect to collection
//     const collection = connect
//         .collection("projects");



//     collection.find({ Bailable: { $gt: '4920' } })
//         .toArray().then((ans) => {
//             return ans

//         });

// }).catch((err) => {
//     // Printing the error message
//     console.log(err.Message);
// })

// export const energeticMusic = MongoClient.connect(url).then((client) => {

//     const connect = client.db(databasename);

//     // Connect to collection
//     const collection = connect
//         .collection("projects");



//     collection.find({ Energia: { $gt: '6360' } })
//         .toArray().then((ans) => {
//             return ans

//         });

// }).catch((err) => {
//     // Printing the error message
//     console.log(err.Message);
// })

