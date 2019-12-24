const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to /products'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling POST requests to /products'
    })
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;

    if (id === 'special') {
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        })
    }
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'You just patched with id: ' + req.params.productId
    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'You just delete something with id: ' + req.params.productId
    })
});

module.exports = router;