const {getBrands} = require('node-car-api');
const {getModels} = require('node-car-api');

//const brands = getBrands();

//console.log(brands);

const brands = getBrands().then(res => {
  console.log(res)
  }).catch(err=>{
  console.log(err)
})

for(var i = 0; i < brands.length; i++){
	const models = getModels(i).then(res => {
  console.log(res)
  }).catch(err=>{
  console.log(err)
})
}


//
//console.log(models);