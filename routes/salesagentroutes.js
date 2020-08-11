const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Salesagent = mongoose.model('Salesagent');
const Product = mongoose.model('Product');



//multer
const multer = require('multer');
const fs = require('fs');

router.use('/uploadedimages', express.static('/public/uploadedimages'));
//app.use(express.static(__dirname + '/public/uploadedimages'));

//multer file uploader
//set Storage
const storage = multer.diskStorage({
    //Define storage location on Server
    destination: (req, file, cb) => {
        cb(null, 'public/uploadedimages')
    },
    //Give a new name to the uploaded image
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({ storage: storage });


// router.get('/', (req, res) => {
//     res.render('salesagentregistration');
// });

// router.post('/', upload.single('salesagentphoto'), async(req, res) => {


//     try {
//         const registeragent = new Salesagent(req.body);
//         //console.log(req.body);
//         registeragent.salesagentphoto = req.file.path;
//         console.log(req.body)
//         await Salesagent.register(registeragent, req.body.password);
//         // await salesagentregistration.save();
//         res.send('thanks for resgistering')
//     } catch (err) {
//         res.send('soomething went wromg');
//         console.log(err)
//     }
// })

// router.get('/list', async(req, res) => {
//     if (req.session.user) {
//         try {
//             await Salesagent.find((err, salesagents) => {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     res.render('salesagentlist', {
//                         salesagents: salesagents
//                     })
//                 }
//             })

//         } catch (err) {
//             console.log(err)
//         }

//     } else {
//         console.log('cant find session')
//         res.redirect('/login')
//     }


// })

router.get('/productlist', async(req, res) => {
    if (req.session.user) {
        try {
            await Product.find((err, products) => {
                if (err) {
                    console.log(err);
                } else {
                    res.render('productlist', {
                        products: products
                    })
                }
            })

        } catch (err) {
            console.log(err)
        }

    } else {
        console.log('cant find session')
        res.redirect('/login')
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



router.post('/', async(req, res) => {
    try {
        const registeragent = new Salesagent(req.body);
        console.log(req.body);
        await salesagentregistration.save();
        res.send('thanks for resgistering')
    } catch (err) {
        res.send('soomething went wromg');
        console.log(err)
    }
})
*/