const express=require('express');
const router=express.Router();
const Admin_controller=require('./../controllers/Admin_controllers');

router.post('',Admin_controller.admin);

module.exports=router;

