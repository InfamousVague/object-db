# object-db
LocalStorage Object database tool.


## Installation:

Simply install using npm.

```
npm install --save object-db
```

## Usage

Require ObjectDB
```javascript
const ObjectDB = require('object-db');
```

Init the DB, you can pass an object to init as a template.

```javascript
let myDB = new ObjectDB('test_db').init({
  first_visit: false,
  show_tour: true
});
```

Set new data.
```javascript
myDB.set({
  tested: true
});
```

Get all database contents.  
```javascript
console.log(
  myDB.get();
);
```

Get database item.
```javascript
console.log(
  myDB.get('tested');
);
```

Remove a database item.
```javascript
console.log(
  myDB.remove('tested');
);
```

Get purge and re-init the database.
```javascript
myDB.purge().init({
  purged: true
});
```
