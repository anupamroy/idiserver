exports.sendcontactmail=(req,res)=>{
    sendgrid.setApiKey("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")
        const msg = {
            to: member.email, // Change to your recipient
            from: 'codewithanupam@gmail.com', // Change to your verified sender
            subject: 'Thank you for Registering with IDI',
            dynamic_template_data:{
                "name":member.firstName,
                "email":member.email,
                "password":"azdeXty213"
            },
            template_id:"d-ba1b78f721ba44d780b38bdc9bfbec1c",
            // text: 'and easy to do anywhere, even with Node.js',
            // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
          }
          sendgrid
            .send(msg)
            .then(() => {
                res.status(200).json({
                    message:"Thank you for contacting us. Our representatitives will contact you shortly",
                    result:1
                })
            })
            .catch((error) => {
                console.error(error.response.body)
            })
        
  
}