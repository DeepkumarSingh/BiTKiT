const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const commentDB = require('../../models/Disc_Forum/Comment');
const authMiddleware = require('../../middlewares/authMiddleware');

router.post('/comments/:id',authMiddleware, async (req, res) => {
  try {
    const { comment, user } = req.body;
    const questionId = req.params.id;

    // Validate inputs
    if (!comment || !user) {
      return res.status(400).send({
        message: 'Comment text and user ID are required',
        status: false,
      });
    }

    // Optional: Check valid ObjectIds
    if (!mongoose.Types.ObjectId.isValid(user) || !mongoose.Types.ObjectId.isValid(questionId)) {
      return res.status(400).send({
        message: 'Invalid user ID or question ID',
        status: false,
      });
    }

    const newComment = await commentDB.create({
      question_id: questionId,
      comment: comment,
      user: new mongoose.Types.ObjectId(user),
    });

    res.status(201).send({
      message: 'Comment created successfully',
      status: true,
      data: newComment,
    });
  } catch (err) {
    res.status(500).send({
      message: 'Error creating comment',
      status: false,
      error: err.message,
    });
  }
});

module.exports = router;
