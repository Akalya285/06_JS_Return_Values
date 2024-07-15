var getMessage;
var getMyMessage;
var response;

getMessage = function () {
    return "I’m going on an adventure!";
};

getMyMessage = function () {
    return "Hello, world! This is my custom message.";
};

response = getMessage();
console.log(response);

response = getMyMessage();
console.log(response);
