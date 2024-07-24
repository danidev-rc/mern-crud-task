import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://dantesamuelrodriguez:d38voNMyhKoooikH@mern-crud-auth.gkgooaw.mongodb.net/?retryWrites=true&w=majority&appName=mern-crud-auth')
    console.log('>>> DB is connected')
  } catch (err) {
    console.log(err)
  }
}
