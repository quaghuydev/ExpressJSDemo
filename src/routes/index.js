const news =require('./news');
const site= require('./site')

function route(app){
    app.get('/',(req,res)=>{
        res.render('home')
    });

    app.use('/',site);
    app.use('/news',news);

}

module.exports=route;