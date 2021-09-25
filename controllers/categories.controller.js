const Category = require('../models/Category');
const joi = require('joi');
exports.saveCategory = async (req,res)=>{
    const CategorySchema = joi.object({
        categoryName:joi.string().required()
    })
    try{
        const CategoryField = await CategorySchema.validateAsync(req.body);
        let category = await Category.findOne({categoryName:CategoryField.categoryName});
        if(!category){
            category = new Category(CategoryField);
            await category.save();
            res.status(200).json({
                message:"Category Saved Successfully"
            })
        }else{
            res.status(400).json({
                message:"Category Exists"
            })
        }
    }catch(err){
        res.status(400).json({
            message:"Something went wrong"
        })
    }
}

exports.listCategory=async(req,res)=>{
    // try{
        
        let categories = await Category.find();
        if(categories.length>0){
            res.status(200).json({
                categories
            })
        }else{
            categories=[]
            res.status(200).json({
                categories
            })
    //     }
    // }catch(err){
        // res,status(500).json({
        //     message:"Something went wrong"
        // })
    }
}

exports.getCategoryById = async (req,res)=>{
    const id= req.params.id;
    try{
        const category = await Category.findById(id);
        if(category){
            res.status(200).json({
                category
            })
        }else{
            res.status(200).json({
                category:null
            })
        }
    }catch(err){
        res.status(500).json({
            message:"Something went wrong"
        })
    }
}

exports.updateCategory=async (req,res)=>{
    const CategorySchema = joi.object({
        categoryId:joi.string().required(),
        categoryName:joi.string().required()
    })
    try{
        const CategoryField = await CategorySchema.validateAsync(req.body);
        let category = await Category.findById(CategoryField.categoryId);
        if(!category){
           
            res.status(400).json({
                message:"Category doesn't exist"
            })
        }else{
            await Category.findByIdAndUpdate(CategoryField.categoryId,{$set:CategoryField});
            res.status(200).json({
                message:"Category Updated Successfully"
            })
        }
    }catch(err){
        res.status(400).json({
            message:"Something went wrong",
            error:err.message
        })
    }
}

exports.deleteCategory= async(req,res)=>{
    
    try{
        const id = req.params.id;
        let category = await Category.findById(id);
        if(!category){
           
            res.status(400).json({
                message:"Category doesn't exist"
            })
        }else{
            await Category.findByIdAndDelete(id)
            res.status(200).json({
                message:"Category Deleted Successfully"
            })
        }
    }catch(err){
        res,status(400).json({
            message:"Something went wrong"
        })
    }
}