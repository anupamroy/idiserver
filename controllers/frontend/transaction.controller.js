const Transaction = require('../../models/Transactions');
const Member = require('../../models/Membership');
const sendgrid = require('@sendgrid/mail')
exports.create = async (req,res) =>{
    try{
        const member = await Member.findById(req.body.memberID);
        const transaction = new Transaction(req.body);
        await transaction.save();
        sendgrid.setApiKey("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")
        const msg = {
            to: member.email, // Change to your recipient
            from: 'mr.anupamroy@gmail.com', // Change to your verified sender
            subject: 'Thank you for Registering with IDI',
            dynamic_template_data:{
                "name":member.firstName,
                "email":member.email,
                "password":"azdeXty213"
            },
            template_id:"d-91eff27961974db6a5eff13f79d623b9",
            // text: 'and easy to do anywhere, even with Node.js',
            // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
          }
          sendgrid
            .send(msg)
            .then(() => {
                console.log('Email sent')
            })
            .catch((error) => {
                console.error(error.response.body)
            })
        res.status(200).json({
            message:"Transaction saved successfully",
            result:1
        })
    }catch(err){
        res.status(500).json({
            message:"Somthing went wrong",
            err:err.message
        })
    }
}