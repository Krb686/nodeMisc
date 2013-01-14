//IMPORTS
var cluster = require('cluster');

var numCPUs = require('os').cpus().length;
var nums = [];


if (cluster.isMaster) 
{
	
	process.on('message', function(msg)
	{
		console.log('got msg' + msg);
	});
	// Fork workers.
	
	
	for (var i = 0; i < numCPUs; i++) 
	{
		cluster.fork();
    }

	cluster.on('exit', function(worker, code, signal) 
	{
		console.log('worker ' + worker.process.pid + ' died');
	});
	
	var num = 10;
	for(i=0;i<800000000;i++)
	{
		num++;
		//nums.push(num);
	}
	
	console.log('master did ' + num);
	
	
	
	
	
	
	
} 

else 
{
  
	
	var i = 0;
	var count = 10;
	for(i=0;i<100000000;i++)
	{
		count++;
		//nums.push(num);
	}
	
	
	process.send(count);
	
	

	

}


cluster.on('online', function(worker)
{
	//console.log('Worker' + worker.id + ' online.');
});
//console.log(nums.length);

