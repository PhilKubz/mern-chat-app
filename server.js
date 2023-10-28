// importing
import express from 'express';
import mongoose from 'mongoose';
import Messages from './dbMessages.js';


// app config
const app=express()
const port = process.env.PORT || 3001
const connection_url = 'mongodb+srv://admin:FAocFsIM6oSnf1Qo@chat-app-backend-cluster.f5b00an.mongodb.net/chatappdb?retryWrites=true&w=majority'


// midleware
app.use(express.json())


// DB Config
mongoose.connect(connection_url, {
    // useCreateIndex: true,
    // useNewUrlParser: true,
    // useUnifiedTopology: true
})

// tbd


/// api routes
app.get('/', (req, res) => res.status(200).send('Hello world'))

app.get('/messages/sync', async (req, res) => {
    try {
        const data = await Messages.find();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err);
    }
});



app.post('/messages/new', async (req, res) => {
    try {
        const dbMessage = req.body;
        const data = await Messages.create(dbMessage);
        res.status(201).send(data);
    } catch (err) {
        res.status(500).send(err);
    }
});



// listener
app.listen(port, () => console.log(`Listening on localhost ${port}`));

