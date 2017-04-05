#Learning CRUD with Redux

#1. Application and Redux Setup

npm install --save redux react-redux redux-thunk

1. Create Store
2. Apply middlewares
3. Provider

install extension redux-devtools
npm install --save redux-devtools-extension

#2. React Router v.4 and Index Page
npm install --save react-router@4.0.0-alpha.5

#3. AJAX Request and Express.js Server

cd backend
npm init -y
npm install --save express mongodb
npm install --save-dev nodemon babel-cli babel-preset-es2015
touch .babelrc

#mongodb
cd crudfirst
mongod --dbpath .

cd backend
mongo
use crudwithredux
db.games.insert({ title: 'Agricola' })

#4. Form And Client-Side-Validation

npm install --save classnames@2.2.5


#5. Server-Side Validation Andd Record Creation (Part 1)

#6. Server-Side Validation Andd Record Creation (Part 2)

cd backend
npm install --save body-parser@1.15.2