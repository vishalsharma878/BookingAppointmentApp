const users = require('../model/database')


exports.userData = (req, res) =>{
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    
    users.create({
        name: name,
        email: email,
        phone: phone
    })
    .then((data) => res.status(200).json(data))
    
}

exports.getData = (req, res) => {
    users.findAll()
      .then((data) => res.status(200).json(data)); // Set status code and send JSON response
  }