const express = require('express');

const router = express.Router();
router.get("/", async (req, res) => {
    return res.status(200).json({ message: "GOOODD", success: true})
})

module.exports = router;
