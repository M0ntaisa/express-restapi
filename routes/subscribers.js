const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber')

// Getting all
router.get('/', async (req, res) => {
  try {
    const subscribers = await Subscriber.find()
    res.json(subscribers)
  } catch (error) {
    res.status(599).json({ message: err.message })
  }
})

// Getting one
router.get('/:id', (req, res) => {
  res.send(req.param.id)
})

// Creating one
router.post('/', async (req, res) => {
  const subscriber = new Subscriber({
    name: req.body.name,
    subscribedToChannel: req.body.subscribedToChannel
  })
  
  try {
    const newSubscriber = await subscriber.save()
    res.status(201).json(newSubscriber)
  } catch (error) {
    res.status(400).json({ message: error.message })    
  }
})

// Updating one
router.patch('/:id', (req, res) => {
  
})

// Deleting one
router.delete('/:id', (req, res) => {
  
})

const getSubscriber = async (req, res, next) => {
  let subscriber
  try {
    subscriber = await Subscriber.findById(req.param.id)
    if (subscriber == null) {
      return res.status(404).json({ message: "cannot find subscriber" })
    }
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

  res.subscriber = subscriber
  next()
}

module.exports = router;