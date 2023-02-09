ServiceWorkerRegistration.post('/todos', function(req, res, next) {
    var todo = req.body;
    database.add(todo).then(function(todos) {
        res.send(todos);
        next();    
    });
});