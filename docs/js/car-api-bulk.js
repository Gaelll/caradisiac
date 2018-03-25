const {getBrands} = require('node-car-api');
const {getModels} = require('node-car-api');
var express = require('express');
var app = express();
var client = require('./connection.js');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(9292, function () {
  console.log("Listening on port 9292");
});



app.get('/populate', function (req, resultat) {
  let brands = getBrand();
  brands.then(function(result)
  {
    client.indices.create({  
      index: 'caradisiac2'
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
        if(res.length != 0)
        {
          var myId = res[0].uuid;
          var body = res[0];
          var myBody = { index: {_index: 'caradisiac2', _type: 'model', _id: myId } }, body;

          client.bulk({
            index: 'caradisiac2',
            type: 'model',
            body: myBody
          }, function(err, resp, status) {
            console.log(resp);
          });
        }
        console.log(res);
      });
    }
    resultat.send("Indexation in ElasticSearch done !");
  });
});

app.get('/suv', function (req, res) {
  client.search({  
  index: 'caradisiac',
  type: 'model',
  body: {
    "sort": [
    {
      "volume.keyword": {
        "order": "desc"
      }
    }
  ]
  }
  },function (error, response,status) {
      if (error){
        console.log("search error: "+error)
      }
      else {
        console.log("--- Response ---");
        console.log(response);
        console.log("--- Hits ---");
        response.hits.hits.forEach(function(hit){
          console.log(hit);
        })
      }
    });
  res.send("Check your console !");
});

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