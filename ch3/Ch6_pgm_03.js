var getHelloTo;

getHelloTo = function (name) {
    var template = "Hello to {{name}}";
    template = template.replace("{{name}}", name);
    return template;
};

console.log(getHelloTo("Kandra")); // Should print: Hello to Kandra
console.log(getHelloTo("Dax"));    // Should print: Hello to Dax
