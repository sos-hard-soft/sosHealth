var express = require('express');
var router = express.Router();
var Individu = require('../model/individu');

/* GET home page. */
router.get('/individus', function(req, res, next) {
  Individu.find({}).then(function(individus){
      res.send(individus);
  });
});

router.post('/individu', function(req, res, next){
    Individu.create(req.body).then(function(Individu){
        res.send(Individu);
    }).catch(next);            
});

router.put('/individu/:id', function(req, res, next){
    Individu.findByIdAndUpdate({_id : req.params.id}, req.body).then(function(){
        Individu.findOne({_id : req.params.id}).then(function(individu){
            res.send(individu);
        });        
    });
});

router.delete('/individu/:id', function(req, res, next){
    Individu.findByIdAndRemove({_id : req.params.id}).then(function(individu){
        res.send(individu);
    });
});

module.exports = router;
