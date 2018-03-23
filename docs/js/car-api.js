const {getBrands} = require('node-car-api');
const {getModels} = require('node-car-api');
var express = require('express');
var app = express();

app.listen(9292, function () {
  console.log("Listening on port 9292");
});


app.get('/populate', function (req, res) {
  console.log("Hello");
  let brands = getBrand();

brands.then(function(result)
{
  console.log(result);
  for(var i = 0; i < result.length ; i++)
  {
    console.log(result[i]);
    getModel(result[i]).then(res=>
    {
      console.log(res);
    });
  }

});
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