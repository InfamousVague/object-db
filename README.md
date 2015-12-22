# object-db
LocalStorage Object database tool. Get, Set, and Subscribe. Just 2kb.

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

You can also subscribe to the DB.
```javascript
myDB.subscribe((data) => {
  // Called any time our database is modified.
  console.log(data);
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
