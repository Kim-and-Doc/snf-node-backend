'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Countries", deps: []
 * createTable "Users", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "migrations",
    "created": "2021-01-10T21:52:49.851Z",
    "comment": ""
};

var migrationCommands = function(transaction) {
    return [{
            fn: "createTable",
            params: [
                "Countries",
                {
                    "countryId": {
                        "type": Sequelize.INTEGER,
                        "field": "countryId",
                        "autoIncrement": true,
                        "primaryKey": true,
                        "allowNull": false
                    },
                    "country": {
                        "type": Sequelize.STRING,
                        "field": "country"
                    },
                    "countryCode": {
                        "type": Sequelize.STRING,
                        "field": "countryCode"
                    },
                    "createdAt": {
                        "type": Sequelize.DATE,
                        "field": "createdAt",
                        "allowNull": false
                    },
                    "updatedAt": {
                        "type": Sequelize.DATE,
                        "field": "updatedAt",
                        "allowNull": false
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        },
        {
            fn: "createTable",
            params: [
                "Users",
                {
                    "userId": {
                        "type": Sequelize.UUID,
                        "field": "userId",
                        "allowNull": false,
                        "primaryKey": true,
                        "defaultValue": Sequelize.UUIDV4
                    },
                    "firstName": {
                        "type": Sequelize.STRING,
                        "field": "firstName",
                        "allowNull": false
                    },
                    "lastName": {
                        "type": Sequelize.STRING,
                        "field": "lastName",
                        "allowNull": false
                    },
                    "email": {
                        "type": Sequelize.STRING,
                        "field": "email",
                        "allowNull": false,
                        "unique": true
                    },
                    "password": {
                        "type": Sequelize.STRING,
                        "field": "password",
                        "allowNull": false
                    },
                    "joinedDate": {
                        "type": Sequelize.DATE,
                        "field": "joinedDate",
                        "defaultValue": Sequelize.NOW,
                        "allowNull": false
                    },
                    "profileImage": {
                        "type": Sequelize.STRING,
                        "field": "profileImage",
                        "defaultValue": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    },
                    "friends": {
                        "type": Sequelize.ARRAY(Sequelize.STRING),
                        "field": "friends"
                    },
                    "createdAt": {
                        "type": Sequelize.DATE,
                        "field": "createdAt",
                        "allowNull": false
                    },
                    "updatedAt": {
                        "type": Sequelize.DATE,
                        "field": "updatedAt",
                        "allowNull": false
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        }
    ];
};
var rollbackCommands = function(transaction) {
    return [{
            fn: "dropTable",
            params: ["Countries", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["Users", {
                transaction: transaction
            }]
        }
    ];
};

module.exports = {
    pos: 0,
    useTransaction: true,
    execute: function(queryInterface, Sequelize, _commands)
    {
        var index = this.pos;
        function run(transaction) {
            const commands = _commands(transaction);
            return new Promise(function(resolve, reject) {
                function next() {
                    if (index < commands.length)
                    {
                        let command = commands[index];
                        console.log("[#"+index+"] execute: " + command.fn);
                        index++;
                        queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                    }
                    else
                        resolve();
                }
                next();
            });
        }
        if (this.useTransaction) {
            return queryInterface.sequelize.transaction(run);
        } else {
            return run(null);
        }
    },
    up: function(queryInterface, Sequelize)
    {
        return this.execute(queryInterface, Sequelize, migrationCommands);
    },
    down: function(queryInterface, Sequelize)
    {
        return this.execute(queryInterface, Sequelize, rollbackCommands);
    },
    info: info
};
