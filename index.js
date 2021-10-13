const express = require('express')
const app = express()

const PORT = 3002

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
    res.send(songs)
})

app.post('/api/songs', (req, res) => {
    const data = req.body
    songs = [...songs, data]
    res.end()
})

app.listen(PORT, () => console.log('server now listening'))