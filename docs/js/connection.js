var elasticsearch=require('elasticsearch');

/*Because I use Docker the ip adress is 192.168.99.100 and the port is still 9200*/
var client = new elasticsearch.Client( {  
  hosts: [
    'elastic:changeme@192.168.99.100:9200/'
  ]
});

module.exports = client; 