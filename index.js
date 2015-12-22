/**
 * Creates a ObjectDB class.
 * @class ObjectDB
 * @augments {string} dbName - Name of the ObjectDB to be used.
 */
class ObjectDB {

	constructor(dbName) {
  	this.dbName = dbName;
    this.db = {};
  }

  /** @function
   * @name init
   * @description Inits the database. */
  init() {
  	if (localStorage.getItem(this.dbName) === null) {
      this.set({init: true});
    }else {
    	this.get();
    }
    return this;
  }


  /** @function
   * @name set
   * @description Sets data in the object db.
   * @param {object} data - Merges object with existing db object. */
  set(data) {
  	this.db = Object.assign({}, this.get(), data);
    localStorage.setItem(this.dbName, JSON.stringify(this.db));
    return this.db;
  }

  /** @function
   * @name get
   * @description Gets either entire ObjectDB, or item by name.
   * @param {string} item - If provided, returns item from database by name. 
   */
  get(item) {
  	if (item) {
    	this.db = JSON.parse(localStorage.getItem(this.dbName));
      return this.db[item];
    } else {
      this.db = JSON.parse(localStorage.getItem(this.dbName));
      return this.db;
		}
  }

}

module.exports = ObjectDB;
