/**const {getBrands} = require('node-car-api');
const {getModels} = require('node-car-api');

//const brands = getBrands();

//console.log(brands);

const brands = getBrands().then(res => {
  console.log(res)
  }).catch(err=>{
  console.log(err)
});

for(var i = 0; i < brands.length; i++){
	const models = getModels(i).then(res => {
  console.log(res)
  }).catch(err=>{
  console.log(err)
});
}*/


const {getBrands} = require('node-car-api');
const {getModels} = require('node-car-api');


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

//
//console.log(models);