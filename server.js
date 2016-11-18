const express=require('express')
const app=express()
const getImage=require('./lib.js').getImage
app.get('/',function (req,res,next) {
  res.json({
    status:true,
    description:'vit student photo viewer made with love मोहब्बत அன்பு',
    author:'SchoolBoy',
    rep:'https://github.com/sch00lb0y/Vit-Photo',
    twitter:'https://twitter.com/rbalajis25',
    example:'http://summaa.herokuapp.com/14MSE0052 replace the existing regno with your regno'
  })
})
app.get('/:regno',(req, res, next) => {
  getImage(req.params.regno,function (err,stream) {
    if (err) {
      res.json({
        status: false,
        description: 'something went wrong pls blame vtop server ;-)'
      })

    } else {
      stream.pipe(res)
    }
  })

})
app.listen(process.env.PORT||2000)
