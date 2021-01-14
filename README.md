git init
git remote add origin
npm init
npm i

./node_modules/.bin/eslint --init          // say no to typescript


// For sequelize-cli 
npx sequelize --help

https://blog.echobind.com/a-guide-for-restful-apis-with-node-sequelize-postgres-63636d026d5d

// setup sequelize boiler plate
npx sequelize init

// Create model/Table example. Delete the auto generated migration from this
npx sequelize-cli model:generate --name User --attributes userId:uuid,firstName:string,lastName:string,email:string,password:string,joinedDate:date,profileImage:string,friends:array:uuid

// install auto miagration
npm i github:scimonster/sequelize-auto-migrations#a063aa6535a3f580623581bf866cef2d609531ba


/****** Important Sequelize commands ********/

// Drop undo all migrations
npx sequelize db:migrate:undo:all

// auto make migration. Make sure to delete previous migration
./node_modules/sequelize-auto-migrations/bin/makemigration.js --name migrations

// push table to db. Check migrations.js for revision number
./node_modules/sequelize-auto-migrations/bin/runmigration.js --rev <revNum>