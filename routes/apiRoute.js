// imports
const router = require('express').Router();
const saveNote = require('../db/saveNote');


// notes get route
router.get('/notes', (req, res) => {
  saveNote
  .getNotesData()
  .then(notes => res.json(notes))
  .catch(err => res.status(500).json(err));
});


// notes post route
router.post('/notes', (req, res) => {
    saveNote
    .add(req.body)
    .then((notes) => res.json(notes))
    .catch(err => res.status(500).json(err));
});


// note delete route
router.delete('/notes/:id', (req, res) => {
    saveNote
    .delete(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch(err => res.status(500).json(err))
});

module.exports = router;