var http = require('http')
  , request = require('request')
  , os = require('os')
  , io = require('socket.io-client')

 socket = io.connect('http://localhost:8080/');

socket.on('connect',function(){
  socket.emit('heartbeat', { Name: 'client-1' , cpu: cpuAverage() });
});


// Create function to get CPU information
function cpuTicksAcrossCores()
{
  //Initialise sum of idle and time of cores and fetch CPU info
  var totalIdle = 0, totalTick = 0;
  var cpus = os.cpus();

  //Loop through CPU cores
  for(var i = 0, len = cpus.length; i < len; i++)
  {
		//Select CPU core
		var cpu = cpus[i];
		//Total up the time in the cores tick
		for(type in cpu.times)
		{
			totalTick += cpu.times[type];
		}
		//Total up the idle time of the core
		totalIdle += cpu.times.idle;
  }

  //Return the average Idle and Tick times
  return {idle: totalIdle / cpus.length,  total: totalTick / cpus.length};
}



var startMeasure = cpuTicksAcrossCores();

function cpuAverage()
{
	var endMeasure = cpuTicksAcrossCores();

	//Calculate the difference in idle and total time between the measures
	var idleDifference = endMeasure.idle - startMeasure.idle;
	var totalDifference = endMeasure.total - startMeasure.total;

  var avg_cpu_usage = 1 - idleDifference/totalDifference
      avg_cpu_usage = avg_cpu_usage*100

	//Calculate the average percentage CPU usage
	return avg_cpu_usage.toFixed(2);
}
