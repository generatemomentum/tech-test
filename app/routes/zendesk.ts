import express from "express";

const router = express.Router()

router.post('/pages', async (req, res) => {

  const companyUrl = req.body.companyUrl;
  
  res.send({ loginPage: '', supportPage: '' });
})

export default router; 