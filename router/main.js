//우리가 router 코드를 따로 작성했기에, server.js 에서 모듈로서 불러올 수 있도록 exports 사용


module.exports = function(app)
{
     app.get('/',function(req,res){
        res.render('index.html')
     });
     app.get('/about',function(req,res){
        res.render('about.html');
    });
}
