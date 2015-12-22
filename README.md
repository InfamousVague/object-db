# object-db
LocalStorage Object database tool.


## Installation:

Simply install using npm.

```
npm install --save object-db
```

## Usage

Define and init the DB

```javascript
const ObjectDB = require('object-db');

let myDB = new ObjectDB('test_db').init();

// Simply set new data, will overwrite existing assignments.
// Keeps undeclared assignments. (Using Object.assign())
myDB.set({
  tested: true
});

// You can get the entire db by providing no arguments.
console.log(
  myDB.get();
);

// You can get a specific item by providing the item name in your .get().
console.log(
  myDB.get('tested');
);
```
