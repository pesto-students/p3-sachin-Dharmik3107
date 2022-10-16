const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    userId:{ type:String,required:true,unique:true,default:'user' },
    firstName:{type: String,required:true,maxLength:100,trim:true},
    lastName:{type: String,required:true,maxLength:100,trim:true},
    birthDate:{type:Date,required:true,validate:{
        validator: function(birthDate){
            const date = new Date(birthDate);
            const current = new Date();
            const monthDiff = current-date.getTime();
            const ageDate = new Date(monthDiff);
            const year = ageDate.getUTCFullYear();
            const age = Math.abs(year-1970);
            if  (age > 18) return true;
            else return false;
        },
        message:()=>'age should be greater than 18'
    }},
    emailId:{type:String,required:true,trim:true,lowercase:true,validate:validator.isEmail},
    password:{type:String,required:true,trim:true,minlength:8,maxlength:128},
    age:{type:Number},
    gender:{type:String,enum:['male','female','others'],default:'user'},
})

userSchema.pre('save', async()=>{
    const user = this;
    if(user.isModified('password')){
        const salt = 10;
        user.password = await bcrypt.hash(this.password,salt);
    }
});

userSchema.methods.validatePassword = async (password) => {
    return await bcrypt.compare(password,this.password)
};

module.exports = mongoose.model('user',userSchema);