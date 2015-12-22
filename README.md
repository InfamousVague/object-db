# object-db
In browser JavaScript object storage. Get, Set, and Subscribe. Works across
 browser tabs and windows. Just 2kb.

## Installation:

Simply install using npm.

```
npm install --save object-db
```

## Usage

```javascript
// Require ObjectDB
const ObjectDB = require('object-db');

// Init the DB, you can pass an object to init as a template (optional).
let myDB = new ObjectDB('test_db').init({ sweet: true });

// You can also subscribe to the DB.
myDB.subscribe((data) => {
  console.log(data);
});

// Get all database contents.  
console.log(
  myDB.get()
);

// Get database item.
myDB.get('tested');

/// Remove a database item.
myDB.remove('tested');

// Purge and re-init the database.
myDB.purge().init();
```
