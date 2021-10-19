require('dotenv').config()
const express = require('express')
const app = express()
const Song = require('./models/song')
const cors = require('cors')


const PORT = process.env.PORT

app.use(cors())
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
        res.json(result);
    })
})

app.post('/api/songs', (req, res) => {
    if(req.body.artist) {
        const newSong = new Song({
            artistId: req.body.artistId,
            name: req.body.name,
            artist: req.body.artist,
            playcount: req.body.playcount,
            videoId: req.body.videoId
        })
        newSong.save()
            .then(savedSong => res.json(savedSong))
    } else {
        res.status(400).json({error: 'data not formatted correctly'})
    }

})

app.put('/api/songs/:id', async (req, res) => {
    console.log(req.params.id)
    const id = req.params.id;
    const videoNum = req.body;
    console.log(videoNum);
    await Song.updateOne({_id: id}, {$set: videoNum}, {multi:true})
    res.end();
    
})

app.delete('/api/songs/:id', (req, res) => {
    console.log(`delete song with id ${req.params.id}`)
    Song.deleteOne({_id: req.params.id}, (err) => {
        if (err) {
            console.log(err);
        }
    })
})

app.listen(PORT, () => console.log('server now listening'))