const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Salesagent = mongoose.model('Salesagent');

router.get('/', (req, res) => {
    res.render('salesagentregistration');
});

router.post('/', async(req, res) => {


    try {
        const registeragent = new Salesagent(req.body);
        await Salesagent.register(registeragent, req.body.password);
        // await salesagentregistration.save();
        res.send('thanks for resgistering')
    } catch (err) {
        res.send('soomething went wromg');
        console.log(err)
    }
})

router.get('/list', async(req, res) => {
    try {
        await Salesagent.find((err, salesagents) => {
            if (err) {
                console.log(err);
            } else {
                res.render('salesagentlist', {
                    salesagents: salesagents
                })
            }
        })

    } catch (err) {
        console.log(err)
    }
})

module.exports = router;


/*

router.post("/", async (req, res) => {

    try {
    const items = new Registration(req.body);
    await Registration.register(items, req.body.password, (err) => {
      if (err) { throw err }
      res.redirect('/login')
    })
  } catch (err) {
     res.status(400).send('Sorry! Something went wrong.')
     console.log(err)
  }
})*/
/*
```router.get('/userlist', async (req, res) => {
  if (req.session.user) {
      
    try {
        let items = await Registration.find()
        if (req.query.gender) {
          items = await Registration.find({ gender: req.query.gender })
        }
        res.render('list', { users: items, currentUser: req.session.user})
      } catch (err) {
        res.status(400).send("unable to find items in the database");
      }

    } else {
      console.log("cant find session")
      res.redirect('/login')
  }
  })`


  router.post("/delete", async (req, res) => {
    if (req.session.user) {
    try {
      await Registration.deleteOne({_id: req.body.id })
      res.redirect('back')
    } catch (error) {
       res.status(400).send("unable to delete to database");
    }
  } else {
    console.log("cant find session")
    res.redirect('/login')
  }
})
*/