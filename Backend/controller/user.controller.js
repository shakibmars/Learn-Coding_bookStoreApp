//? it is a function for creating a database.

import User from '../model/user.model.js' //? we need to import our model for creating the database.
import bcryptjs from 'bcryptjs' //? it is a library for hashing the password.

export async function signup(req, res){
    try{
        let {fullname, email, password} = req.body //? we need to get the data from the request body.
        console.log('my data:- ', req.body)
        // console.log('my data:- ', fullname, email, password)
        let findUser = await User.findOne({email}) //? we need to find the user by email for creating unique user.
        // console.log('my data:- ', findUser)
        if(findUser){
            return res.status(400).json({
                massage: 'user already exist!! </ from backend "user.controller.js" file "signup" function />',
            })
        }
        let hashPassword = await bcryptjs.hash(password, 10) //? it is a function for hashing the password. 10 is the salt round.
        let createdUser = new User({
            fullname: fullname,
            email: email,
            password: hashPassword
        })
        // console.log('my data:- ', createdUser)
        await createdUser.save();
        let findUser2 = await User.findOne({email})
        console.log('my data2:- ', findUser2)

        res.status(201).json({
            massage: 'user created successfully~~ </ from backend "user.controller.js" file "signup" function />',
            user: {
                _id: createdUser._id,
                email: createdUser.email,
                fullname: createdUser.fullname
            }
        })
    }catch(error){
        console.log('my error:- ' + error.massage)
        res.status(500).json({massage: 'internal server error!! </ from backend "user.controller.js" file "signup" function />'})
    }
}

export const login = async (req, res)=>{
    try{
        let {email, password} = req.body;
        let user = await User.findOne({email})
        let isMatch = await bcryptjs.compare(password, user.password)
        if(!user || !isMatch){
            return (
                res.status(400).json({massage: 'invalid email or password!! </ from backend "user.controller.js" file login function />'}).alert('invalid email or password!! </ from backend "user.controller.js" file login function />')
                
            )
        }else{
            res.status(200).json({
                massage: 'login successfully',
                user: {
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email
                }
            })
        }
    }catch(error){
        console.log('my error:- ' + error.massage)
        res.status(500).json({massage: 'internal server error!! </ from backend "user.controller.js" file login function />'})
    }
}