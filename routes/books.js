const express = require('express')
const router=express.Router()
const Book=require('../models/book')

//obtener todos
router.get('/', async(req,res)=>{
    try{
        const books= await Book.find()
        res.json(books)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
})


//obtener uno 
router.get('/:id', getBook,(req,res)=>{
    res.json(res.book)
})

//crear 
router.post('/',async(req,res)=>{
    const book = new Book({
        title:req.body.title,
        author:req.body.author,
        publishingYear:req.body. publishingYear
    })
    try{
        const newBook= await book.save()
        res.status(201).json(newBook)
    } catch(err){
        res.status(400).json({message:err.message})
    }
})

//actualizar 
router.patch('/:id', getBook, async (req,res)=>{
    if (req.body.name !=null){
        res.book.title=req.body.title
    }
    if (req.body.author !=null){
        res.book.author=req.body.author
    }
    try{
        const author=await res.book.save()
    }catch (err){
        res.status(400).json({message: err.message})
    }
})

//borrar
router.delete('/:id',getBook,async (req,res)=>{
    try{
        await res.book.remove()
        res.json({message: 'Delated'})

    }catch (err){
        res.status(500).jaosn({message: err.message})
    }

})

async function getBook(req,res,next){
    let book
    try{
        book= await Book.findById(req.params.id)
        if(book==null){
            return res.status(404).json({message: 'Cannot find book'})
        }
    }catch(err){
        return res.status(500).json({message:err.message})
    }
    res.book = book
    next()
}



module.exports=router 