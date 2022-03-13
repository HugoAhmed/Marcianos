re("http");
let fs = require("fs");


let http_server = http.createServer(function(req, res)
{

	if (req.url == "/background.png")
	{
		fs.readFile("background.png", function(err, data)
		{
			if (err)
			{
				console.log("ERROR");
				return
			}
			res.writeHead(200);
			res.end(data);
		});
		return
	}
	
	if (req.url == "/spaceship.png")
	{
		fs.readFile("spaceship.png", function(err, data)
		{
			if(err)
			{
				console.log("ERROR");
				return
			}
			res.writeHead(200);
			res.end(data);
		});
		return
	}


	if (req.url == "/enemy_ship.png")
	{
		fs.readFile("enemy_ship.png", function(err, data)
		{
			if (err)
			{
				console.log("ERROR");
				return
			}
			res.writeHead(200);
			res.end(data);
		});
		return
	}

	if (req.url == "/bullett.png")
	{
		fs.readFile("bullett.png", function (err, data)
		{
			if (err)
			{
				console.log("ERROR");
				return
			}
		res.writeHead(200);
		res.end(data);
		});
		return
	}

	if (req.url == "/car_green.jpg")
	{
		fs.readFile("car_green.jpg", function (err, data)
		{
			if (err)
			{
				console.log("ERROR");
				return
			}
		res.writeHead(200);
		res.end(data);
		});
		return
	}

	if (req.url == "/car_red.jpg")
	{
		fs.readFile("car_red.jpg", function (err, data)
		{
			if (err)
			{
				console.log("ERROR");
				return
			}
			res.writeHead(200);
			res.end(data);
		});
		return
	}

	fs.readFile("index.html", function (err, data)
	{
		if(err)
		{
			console.log("ERROR");
			return
		}
		res.writeHead(200);
		res.end(data);
	});
}).listen(1085)ae
