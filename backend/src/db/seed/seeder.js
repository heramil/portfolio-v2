import mongoose from 'mongoose';
import dotenv from 'dotenv';

import projects from "../data/projects.js"
import Projects from "../models/projectsModel.js"

import connectDB from '../db.js'

dotenv.config()
connectDB()

const importData = async () => {
  try {
    await Projects.deleteMany();
    await Projects.insertMany(projects)
    console.log('Data Imported!')
    process.exit()
  } catch(error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Projects.deleteMany()
    console.log('Data Destroyed!')
  } catch(error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === 'd') {
  destroyData()
} else {
  importData()
}