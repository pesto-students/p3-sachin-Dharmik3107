const userModel = require('../models/user');
const bcrypt = require('bcrypt');
const {generateToken} = require('../middlewares/userAuth');

//Signup API
const signup = async (req,res) =>{
    const {firstName, lastName,userName, birthDate, emailId, password, age, gender} = req.query;
    try{
        const userExist = await userModel.findOne({userName});
        console.log(userExist)
        const emailExist = await userModel.findOne({ emailId });

        if(userExist){
            return res.json({
                status:401,
                message:'User is already exist'
            })
        }else if(emailExist){
            return res.json({
                status:401,
                message:'Email id is already registered'
            })
        }else{
            const saltRounds = 10;
            console.log(password)
            const hashPassword = await bcrypt.hash(password,saltRounds);
            const newUser = new userModel({
                firstName,
                lastName,
                userName,
                birthDate,
                emailId,
                password,
                age,
                gender,
                password:hashPassword
            })

            await newUser.save().then(()=>{
                res.json({
                    status:200,
                    message:'User is successfully registered',
                    res
                })
            }).catch((error)=>{
                res.json({
                    status:500,
                    message:error.message
                })
            })
            
        }
    }catch(error){
        console.log('Error',error.message);
    }
};

//Login API
const login = async(req,res)=>{
    const{userName,password} = req.body;
    try{
        const userData = await userModel.findOne({$or: [{ username }, { email: username }]});
        if(userData){
            const isPasswordCorrect = await bcrypt.compare(password,userData.password);
            if(isPasswordCorrect){
                const token = generateToken(userData._id);
                return res.json({
                    status:200,
                    message:`${userName} Login Successfull`,
                    id: userData._id,
                    userName:userData.userName,
                    firstName:userData.firstName,
                    lastName:userData.lastName,
                    birthDate:userData.birthDate,
                    emailId:userData.userId,
                    age:userData.age,
                    gender:userData.gender
                });
            }else{
                return res.json({
                    status:401,
                    message:'Invalid Password'
                });
            }
        }else{
            return res.json({
                status:401,
                message:'User not found'
            });
        }
    }catch(error){
        console.log('Error',error.message)
    }
}

module.exports = {signup,login}