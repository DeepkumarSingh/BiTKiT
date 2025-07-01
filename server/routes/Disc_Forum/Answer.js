const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const AnswerDB = require('../../models/Disc_Forum/Answer');

router.post('/answers', async (req, res) => {
  try {
    const { question_id, answer, user } = req.body;

    // Validate input
    if (!question_id || !answer || !user) {
      return res.status(400).send({
        message: 'question_id, answer, and user ID are required',
        status: false,
      });
    }

    // Optional: Check if IDs are valid ObjectIds
    if (
      !mongoose.Types.ObjectId.isValid(question_id) ||
      !mongoose.Types.ObjectId.isValid(user)
    ) {
      return res.status(400).send({
        message: 'Invalid question_id or user ID',
        status: false,
      });
    }

    const answerData = new AnswerDB({
      question_id: new mongoose.Types.ObjectId(question_id),
      answer,
      user: new mongoose.Types.ObjectId(user),
    });

    const doc = await answerData.save();

    res.status(201).send({
      message: 'Answer created successfully',
      status: true,
      data: doc,
    });
  } catch (err) {
    res.status(500).send({
      message: 'Error creating answer',
      status: false,
      error: err.message,
    });
  }
});

module.exports = router;
