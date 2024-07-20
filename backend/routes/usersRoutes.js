const express = require('express');
const router = express.Router();
const Users = require('../models/Users');


router.post('/', async (req, res) => {

    const { name, email, cpf } = req.body;

    const users = {
        name,
        email,
        cpf
    }
    
    try {

        await Users.create(users);
        res.status(201).json({msg: "Usuário criado com sucesso!"});

    } catch (err) {
        res.status(500).json({ message: err.message });
    }

})

router.get('/', async (req, res) => {
    try {
        const users = await Users.find(); 
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:id', getUser, (req, res)=> {
    res.json(res.user);
});

async function getUser(req, res, next) {
    let user;
    try {
        user = await Users.findById(req.params.id);
        if (user === null) {
            return res.status(404).json({ message: 'Usuário não encontrado!'})
        }
    } catch (err) {
        return res.status(500).json({ message: err.message});
    }

    res.user = user;
    next();

}

module.exports = router;