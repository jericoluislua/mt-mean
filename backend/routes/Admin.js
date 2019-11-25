const express = require('express');
const admin = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs/dist/bcrypt');

const Admin = require("../models/Admin");
admin.use(cors());

process.env.SECRET_KEY = 'secret';

admin.post('/register', (req, res) => {

    const adminData = {
        username: req.body.username,
        password: req.body.password
    };

    Admin.findOne({
        username: req.body.username
    })
        .then(admin => {
            if (!admin) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    adminData.password = hash;
                    Admin.create(adminData)
                        .then(admin => {
                            res.json({status: admin.username + "Registered!"})
                        })
                        .catch(err => {
                            res.send('error: ' + err)
                        });
                })
            } else {
                res.json({ error: 'Admin already exists'});
            }
        })
        .catch(err => {
            res.send('Error: ' + err);
        })

});

admin.post('/login', (req, res) => {
   Admin.findOne({
       username: req.body.username
   })
       .then(admin => {
           if (admin) {
               if (bcrypt.compareSync(req.body.password, admin.password)) {

               }
           }
       })
});


