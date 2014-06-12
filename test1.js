var http=require('http');
var options = {
            hostname: 'www.example.com',
                    port: 8124,
                            path: '/test',
                                    method: 'POST',
                                            headers: {
                                                            'Content-Type': 'application/x-www-form-urlencoded'
                                                                        }
                };

var request = http.request(options, function (response) {});

request.write('Hello World');
request.end();
