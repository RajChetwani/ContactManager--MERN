const express = require('express');

const router = express.Router();

//@route  GET api/contacts
//@desc   get all contacts
//@access Private

router.get('/',(req,res) => {
    res.send('Get contacts');
})

//@route  Post api/contacts
//@desc   add new contact
//@access Private

router.post('/',(req,res) => {
    res.send('Add a new contact');
})

//@route  PUT api/contacts/:id
//@desc   update contact
//@access Private

router.put('/:id',(req,res) => {
    res.send('Update Contact');
})

//@route  delete api/contacts
//@desc   delete contact
//@access Private

router.delete('/:id',(req,res) => {
    res.send('Delete Contact');
})

module.exports = router;