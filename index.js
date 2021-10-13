const express = require('express')
const app = express()
const mongoose = require('mongoose')

const PORT = 3002

app.use(express.json())

// mongo connection str
// mongodb+srv://jaredDB38:<password>@musiq-bx1.khom2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(`mongodb+srv://jaredDB38:db1intr0@musiq-bx1.khom2.mongodb.net/mb-app?retryWrites=true&w=majority`)

const songSchema = new mongoose.Schema({
    artist: String,
    artistId: String,
    name: String,
    playcount: String
})

const Song = mongoose.model('Song', songSchema);

songs = [
    {
    artist: "Drake",
    artistId: "b49b81cc-d5b7-4bdd-aadb-385df8de69a6",
    name: "Hold On, We're Going Home",
    playcount: "4503634"
    },
    {
    artist: "Eminem",
    artistId: "f207eac0-829f-41e5-9dc9-d7c3263de3ed",
    name: "Lose Yourself",
    playcount: "6098613"
    }
]



app.get('/api/songs', (req, res) => {
    res.send(songs)
})

app.post('/api/songs', (req, res) => {
    if(req.body.artist) {
        const newSong = new Song({
            artistId: req.body.artistId,
            name: req.body.name,
            artist: req.body.artist,
            playcount: req.body.playcount
        })
        newSong.save();
        res.send('will save to DB')
    } else {
        console.log(req.body.artist)
        res.send('data not formatted')
    }
    const data = req.body
    songs = [...songs, data]
    res.end()
})

app.listen(PORT, () => console.log('server now listening'))