const paypal = require('paypal-rest-sdk');
const config = require('config')


paypal.configure({
    mode:config.get("env"),
    client_id: config.get("paypalClientID"),
    client_secret: config.get("paypalClientSecret")
});

exports.checkout = (req,res)=>{
    console.log(req.body)
    const { amount } = req.body;
    amount.toFixed(2)
    const item = {
        name: 'Sample product',
        sku: 'sample',
        price: amount,
        currency: 'USD',
        quantity: 1
    };
    const paymentData = {
        intent: 'sale',
        payer: {
            payment_method: 'paypal'
        },
        redirect_urls: {
            return_url: config.get("returnUrl"),
            cancel_url: config.get("cancelUrl")
        },
        transactions: [{
            item_list: {
                items: [ item ]
            },
            amount: {
                currency: 'USD',
                total: amount
            },
            description: 'Sample payment.'
        }]
    };

    paypal.payment.create(paymentData, (error, payment) => {
        if (error) {
            res.json({ status: false, info: error });
        } else {
            let url = '';
            payment.links.forEach(link => {
                if (link.rel === 'approval_url') {
                    url = link.href;
                }
            });
            //req.session.amount = amount;
            res.json({ url });
        }
    });
}

exports.checkoutwithapi=(req,res)=>{
    PAYPAL_API = 'https://api-m.sandbox.paypal.com';
    request.post(PAYPAL_API + '/v1/payments/payment',
    {
      auth:
      {
        user: config.get("paypalClientID"),
        pass: config.get("paypalClientSecret")
      },
      body:
      {
        intent: 'sale',
        payer:
        {
          payment_method: 'paypal'
        },
        transactions: [
        {
          amount:
          {
            total: '5.99',
            currency: 'USD'
          }
        }],
        redirect_urls:
        {
          return_url: 'https://example.com',
          cancel_url: 'https://example.com'
        }
      },
      json: true
    }, function(err, response)
    {
      if (err)
      {
        console.error(err);
        return res.sendStatus(500);
      }
      // 3. Return the payment ID to the client
      res.json(
      {
        id: response.body.id
      });
    });
}