const {getBrands} = require('node-car-api');
const {getModels} = require('node-car-api');
var express = require('express');
var app = express();
var elasticsearch = require('elasticsearch');


app.listen(9292, function () {
  console.log("Listening on port 9292");
});

/*Creating client for Elastic Search*/
var client = new elasticsearch.Client({
  host: '192.168.99.100:9200',
  log: 'trace'
});


app.get('/populate', function (req, resultat) {
  let brands = getBrand();
  brands.then(function(result)
  {
    client.indices.create({  
      index: 'caradisiac'
    },function(err,resp,status) {
      if(err) {
        console.log(err);
      }
      else {
        console.log("create",resp);
      }
    });

    for(var i = 0; i < result.length ; i++)
    {
      console.log(result[i]);
      getModel(result[i]).then(res=>
      {
        console.log(res);
      });
    }
    resultat.send("Indexation in ElasticSearch done !");
  });
});

app.get('/suv', function (req, res) {

})

async function getModel(model)
{
  const models = await getModels(model);
  return models;
}

async function getBrand()
{
  const brands = await getBrands();
  return brands;
}


//
//console.log(models);