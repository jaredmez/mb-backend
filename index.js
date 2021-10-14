require('dotenv').config()
const express = require('express')
const app = express()
const Song = require('./models/song')


const PORT = process.env.PORT

app.use(express.json())

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
    Song.find({}).then(result => {
        console.log(result);
        res.json(result);
    })
})

app.post('/api/songs', (req, res) => {
    if(req.body.artist) {
        const newSong = new Song({
            artistId: req.body.artistId,
            name: req.body.name,
            artist: req.body.artist,
            playcount: req.body.playcount
        })
        newSong.save()
            .then(savedSong => res.json(savedSong))
    } else {
        console.log(req.body.artist)
        res.status(400).json({error: 'data not formatted correctly'})
    }

})

app.listen(PORT, () => console.log('server now listening'))