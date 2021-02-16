git init
git remote add origin
npm init
npm i

# For eslint setup
./node_modules/.bin/eslint --init          // say no to typescript

## For local postgress
    https://www.youtube.com/watch?v=Crk_5Xy8GMA&t=424s&ab_channel=PedroTech

    https://postgresapp.com/ 
    Go to downloads > latest > Introduction > Follow the steps

    In terminal:
        // open psql using that user. Can replace postgres with other db user
        psql -U postgres                   

        In postgres-cli:
            // Create database
            CREATE DATABASE db_name;

            // connect to the database to be used
            \c db_name

            // check what tables are in that db
            \dt

            // list all data types
            \d "Users"

            // example
            select * from "Users";

            // drop table to fix constraints
            drop table "Posts";


            https://gist.github.com/Kartones/dd3ff5ec5ea238d4c546

## For sequelize-cli 
    npx sequelize --help

    https://blog.echobind.com/a-guide-for-restful-apis-with-node-sequelize-postgres-63636d026d5d


# Setup using sequelize-cli for initial structure
## setup sequelize boiler plate
    npx sequelize init
    change config.js






# Might not need anymore the things below this anymore???
## Create model/Table example. Delete the auto generated migration from this
// when doing this, changes still to be made.
npx sequelize-cli model:generate --name User --attributes userId:uuid,firstName:string,lastName:string,email:string,password:string,joinedDate:date,profileImage:string,friends:array:uuid

// Look at user.js for example and change as needed.

## install auto miagration
npm i github:scimonster/sequelize-auto-migrations#a063aa6535a3f580623581bf866cef2d609531ba

# Important Sequelize commands

// Drop undo all migrations
npx sequelize db:migrate:undo:all

// auto make migration. Make sure to delete previous migration
./node_modules/sequelize-auto-migrations/bin/makemigration.js --name migrations

// push table to db. Check migrations.js for revision number
./node_modules/sequelize-auto-migrations/bin/runmigration.js --rev <revNum>