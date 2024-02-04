import {Router} from "express";
import usermodel from '../model/user.js';
const router = Router();
router.post('/createuser', (req, res) => {
    let users = {
        name: 'test',
        age: 23,
        gender: 'male'
    }
    usermodel.create(users).then(function (userdata) {
        res.send(userdata)
    })
})

router.get('/test', (req, res)=>{
    res.send('test')
})
router.get('/getusers',(req, res)=>{
    usermodel.find()
    .then( users=> {
        res.send(users)
    })
})

export default router;