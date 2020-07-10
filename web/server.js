var express = require('express');
var app = express();
const pug = require('pug');
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var session = require('express-session');
app.use(session({
 secret: '@@$S@$@$2FNA$$QNE!1E$@@',
 resave: false,
 saveUninitialized: true
}));

var db = mongoose.connection;
var Schema = mongoose.Schema;

db.on('error', console.error);
var port = process.env.PORT || 3000;


app.use(express.static('public'));
app.engine('pug', require('pug').__express);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

db.once('open', function(){
        // CONNECTED TO MONGODB SERVER
        console.log("Connected to mongod server");
});
mongoose.connect('mongodb://localhost/projectGOGO');

var userSchema = new Schema({
    id: {type: String, required:true, unique: true},
    password: {type: String, required:true },
});

var manage = mongoose.model('manage', userSchema);

var DATA_DATA;

app.get('/', function(req, res){    
    console.log(DATA_DATA);
    let sess = req.session;
    if( sess.userid ){
        //로그인 되있는 경우
        console.log( `OK ${sess.userid}, dash DATA LOADING` );
        //res.send( );
        let tmpDATA = JSON.stringify(DATA_DATA) ;
        //console.log(DATA_DATA);
        res.render("dashboard.pug", {type: "first", id: sess.userid, data :tmpDATA});
        sess.data = tmpDATA;
        //res.json(DATA_DATA);
    }else{
        res.render('mainpage.pug');
    }
}); //기

app.get('/login', function(req,res){
    sess = req.session;
    if( sess.userid ){
        res.redirect("/");
        return
    }
    console.log( `New User, dash` );
    res.render("login.pug");
})


app.post('/login', function(req,res){
    let sess = req.session;
    if( req.body.ID == "" || req.body.PW == "" ){
        //res.render('login_fail.pug', {ID: req.body.ID})
        console.log("NOT FOUND")
        return;
    }
    console.log( req.body.ID );
    console.log( req.body.PW);
    manage.findOne({id: req.body.ID, password: req.body.PW},function(err, datablock){
        if(err || datablock == null) {
            //res.render('login_fail.pug', {ID: req.body.ID})
            res.status(500).send({error: 'database failure'});
            return;
        }
        sess.userid = req.body.ID;
        //res.render("dashboard.pug", {type: "first", id: sess.userid, 'ddbj': DATA_DATA}/*data*/);
        res.redirect('/');
    });
}); //로그인

app.post('/data', function(req,res){
    DATA_DATA = req.body;
    res.send("OK");
    console.log("RECEIVED");
    //console.log(DATA_DATA);
    //console.log(`OK, ${DATA_DATA}`);
});

app.get('/logout', function( req, res){
    let sess = req.session;
        if(sess.id){
            req.session.destroy(function(err){
                if(err){
                    console.log(err);
                }else{
                    res.redirect('/');
                }
            })
        }else{
            res.redirect('/');
        }
});

app.get('/favicon.ico', function(req,res){
    res.status(404).end("D")
})
/*
app.get('/db/:manage_id', function(req, res){
    manage.findOne({id: req.params.manage_id}, function(err, man){
        if(err) return res.status(500).json({error: err});
        if(!man) return res.status(404).json({error: 'book not found'});
        res.json(man);
    })
}); //목록 조회
*/

app.post('/submit', function(req, res){
    var data = new manage();
    data.id = req.body.ID;
    data.password = req.body.PW;
    /*
    manage.findOne({id: req.params.manage_id}, function(err, man){
        if(err) return res.status(500).json({error: err});
        if(!man) return res.status(404).json({error: 'book not found'});
        res.json(man);
    })
    */
    data.save(
        function(err){
                if(err){
                    console.error(err);
                    //res.json({result: 0});
                    //res.render('login_fail.pug', {"ID": req.body.ID})
                    return;
                }
                //res.json(data);
                //res.render('oks.pug', data);
                res.redirect('/');
                /*res.render('oks.pug',{"data": {"id":data.id, "pw":data.password, "date":data.published_date,
            "name": data.name}});*/
            }
        );
}); // 새로 등록

app.get('*', function(req,res){
    console.log(`${req.originalUrl} ACCESS`);
    res.attachment(`${req.originalUrl}`);
    res.sendFile(__dirname+"/views"+req.originalUrl, {
        // dotfiles: 'deny',
        // headers: {
        //     'x-timestamp': Date.now(),
        //     'x-sent': true
        // }
      }, function (err) {
        if (err) {
        res.sendStatus(404);
          console.error(err);
        } else {
          console.log('Sent:', req.originalUrl );
        }
      });    
});



app.listen( port, function(req, res){
    console.log("집가고싶다");
});