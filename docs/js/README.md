# Car-API

## What for ?

The objective of the API is to scrap all the cars with the node-car-api and then indexing them in Elastic Search.
After that, we can sort them by volume.

## Installation

First go to the cash directory ./caradisiac and run different npm install
```sh
$ nmp install
$ npm install https://github.com/92bondstreet/node-car-api.git
$ npm install elasticsearch get-json
$ npm install body-parser
```

## How to use it ?

Go to the folder ./caradisiac/docs/js and run the following commands

```sh
$ node car-api.js
```
Then go to localhost:9200 on your web browser and execute localhost:9200/populate and localhost:9200/suv
/populate will create you an index called 'caradisiac' and will index the car records in Elastic Search.
/suv will return you the list of cars sorted by volume in descendant order, in your console.

## Why car-api-bulk.js

I created this js file just to use the bulk method to index all the doucments we want (car records) in Elastic Search.
I kept car-api.js because it worked well and at the time I tried the bulk method there was an error I couldn't resolve.