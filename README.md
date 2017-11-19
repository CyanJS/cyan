# Cyan

## Run project
**Server**
*Listing by default localhost:8000*
```
$ cd server/ && yarn start
```

**Client**
*Listing by default localhost:3000*
```
$ cd client/ && yarn start
```

## Code Style - JavaScript Standard Style
[Standard](https://standardjs.com/) - JavaScript style guide, with linter & automatic code fixer. [Standard - Rules](https://standardjs.com/#the-rules)

**Run test Code Style**
```
$ yarn test
```

## Install Project

### Clone Project
```
$ git clone https://github.com/CyanJS/cyan.git
```

### Create "Environment" files
```
& cp server/.env-example.js server/.env.js && cp client/.env-example.js client/.env.js
```

### MongoDB
It is recommended to create the development database in the [mLab](https://mlab.com/). [Tutorial](http://docs.mlab.com/)

### Config connection MongoDB(Mongoose)
Set configuration in file "server/.env.js". Example.

```
  ...
  'mongoose': {
    'connect': {
      'host': '*****.mlab.com',
      'port': '*****',
      'user': 'userdb',
      'password': 'password',
      'base': '*****'
    }
  },
  ...
```

### Config Google Auth
* [Create credential](https://console.developers.google.com/apis/credentials)
* [Creating a Google API Console project and client ID[Tutorial]](https://developers.google.com/identity/sign-in/web/devconsole-project)

Set configuration in file "server/.env.js". Example.
```
  ...
  'passport': {
    'google': {
      'id': '########.apps.googleusercontent.com',
      'secret': 'secretKey',
  ...
```

### Config JWT secret token
Set configuration in file "server/.env.js". Example.
```
  ...
  'passport': {
    'jwt': {
      'secret': 'secretKey'
    }
  ...
```

### Dependencies
The project using *Yarn* for install dependencies.

**Install Yarn**

```
$ npm install --global yarn
```

**Install dependencies**
Client and Server

```
$ cd server/ && yarn && cd ../client/ && yarn && cd ../
```
