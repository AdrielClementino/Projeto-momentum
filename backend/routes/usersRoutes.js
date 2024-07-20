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
        res.status(201).json({ msg: "Usuário criado com sucesso!" });

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

router.get('/:id', getUser, (req, res) => {
    res.json(res.user);
});

async function getUser(req, res, next) {
    let user;
    try {
        user = await Users.findById(req.params.id);
        if (user === null) {
            return res.status(404).json({ message: 'Usuário não encontrado!' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.user = user;
    next();

}

router.put('/:id', getUser, async (req, res) => {
    const { name, email, cpf } = req.body;

    try {
        const user = res.user;

        if (name) user.name = name;
        if (email) user.email = email;
        if (cpf) user.cpf = cpf;

        await user.save();
        res.status(200).json({ message: 'Usuário atualizado com sucesso!', user });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const result = await Users.deleteOne({ _id: req.params.id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Usuário não encontrado!' });
        }
        res.status(200).json({ message: 'Usuário deletado com sucesso!' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;

module.exports = router;