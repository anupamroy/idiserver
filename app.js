const express = require('express');
const cors = require('cors');
const conn = require('./config/db.conn');
const app = express();
const port = process.env.PORT || 3000

const corsOption = {
    "origin":'*'
}
const adminRoutes = require('./routes/admin');
const roleRoutes = require('./routes/roles');
const moduleRoutes = require('./routes/modules');
const authRoute = require('./routes/auth');
const categoryRoute = require('./routes/category');
const projectRoute = require('./routes/projects');
const uploadRoute = require('./routes/upload');
const uploadMultipleRoute = require('./routes/uploadmultiple');
const pageRoute = require('./routes/pages');
const pageContentRoute = require('./routes/pagecontent');
const membershipRouter = require('./routes/membership')
const paypalRoute = require('./routes/paypal');
const transactionRouter = require('./routes/transaction');
const { expression } = require('joi');
app.use(express.json());
app.use(express.static('uploads'))
app.use(cors(corsOption));
conn();
app.use('/api/admin',adminRoutes);
app.use('/api/admin/roles',roleRoutes);
app.use('/api/admin/modules',moduleRoutes);
app.use('/api/admin/projects',projectRoute);
app.use('/api/auth',authRoute);
app.use('/api/admin/category',categoryRoute);
app.use('/api/admin/upload',uploadRoute);
app.use('/api/admin/uploadmultiple',uploadMultipleRoute);
app.use('/api/admin/page',pageRoute);
app.use('/api/admin/pagecontent',pageContentRoute);
app.use('/api/membership',membershipRouter);
app.use('/api/paypal',paypalRoute)
app.use('/api/transaction',transactionRouter);
app.listen(port,()=>{
    console.log(`Server started at port ${port}`)
})

