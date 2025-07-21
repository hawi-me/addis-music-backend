const express = require('express');
const router = express.Router();
const Song = require('../models/song');

// Get all songs (with pagination)
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const songs = await Song.find().skip(skip).limit(limit);
    const total = await Song.countDocuments();

    res.json({
      songs,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalSongs: total,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get single song
router.get('/:id', async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) return res.status(404).json({ message: 'Song not found' });
    res.json(song);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create song
router.post('/', async (req, res) => {
  try {
    const { title, artist, album, year } = req.body;
    const song = new Song({ title, artist, album, year });
    await song.save();
    res.status(201).json(song);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data' });
  }
});

// Update song
router.put('/:id', async (req, res) => {
  try {
    const { title, artist, album, year } = req.body;
    const song = await Song.findByIdAndUpdate(
      req.params.id,
      { title, artist, album, year },
      { new: true, runValidators: true }
    );
    if (!song) return res.status(404).json({ message: 'Song not found' });
    res.json(song);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data' });
  }
});

// Delete song
router.delete('/:id', async (req, res) => {
  try {
    const song = await Song.findByIdAndDelete(req.params.id);
    if (!song) return res.status(404).json({ message: 'Song not found' });
    res.json({ message: 'Song deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;