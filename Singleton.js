var SingletonDB = (function () {
    var db;
    var create = function () {
        function commit() {};
        function close() {};
        function rollback() {};
              
        return {
            commit: commit,
            close: close,
            rollback: rollback
        };
    }
    return {
        getInstance: function () {
            if (!db) {
                db = create();
            }
            return db;
        }
    };
})();


var dbConnection = SingletonDB.getInstance();
