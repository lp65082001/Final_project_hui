let express = require('express');
let router = express.Router();
let Fisheep = require('./WeiHan.js');
let Amy = require('./Amy.js');
let Candy = require('./Candy.js');
router.get('/', (req, res) => {
    let options = {
        root: __dirname,
        dotfiles: 'deny'
    }
    res.sendFile("index.html", options)
})
router.use('/WeiHan', Fisheep);
router.use('/Amy', Amy);
router.use('/Candy', Candy);

module.exports = router;