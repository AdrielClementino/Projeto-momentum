const express = require('express');
const router = express.Router();
const Users = require('../models/Users');


router.post('/', async (req, res) => {

    const { name, email, cpf } = req.body;

    if (!name) {
        res.status(422).json({error: 'O Nome é obrigatório'});
    };

    if (!email) {
        res.status(422).json({error: 'O Email é obrigatório'});
    };

    if (!cpf) {
        res.status(422).json({error: 'O CPF é obrigatório'});
    };

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

module.exports = router;