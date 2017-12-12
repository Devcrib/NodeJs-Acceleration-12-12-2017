var DB = (function () {
    var connection;
 
    function createConnection() {
        var object = new Object("I am the connection");
        return object;
    }
 
    return {
        getConnection: function () {
            if (!connection) {
                connection = createConnection();
            }
            return connection;
        }
    };
})();


var conn1 = DB.getConnection();
var conn2 = DB.getConnection();

console.log("Same connection => "+(conn2 === conn1));