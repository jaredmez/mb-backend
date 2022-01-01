require('dotenv').config()
const express = require('express')
const app = express()
const Song = require('./models/song')
const cors = require('cors')
const usersRouter = require('./controllers/users')

const PORT = process.env.PORT || 3002

app.use(cors())
app.use(express.json())
app.use(express.static('build'))
app.use('/api/users', usersRouter)

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