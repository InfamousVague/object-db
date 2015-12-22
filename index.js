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
   * @description Inits the database.
   * @param {object} template - Optional template of default values. */

  init(template) {
  	if (localStorage.getItem(this.dbName) === null) {
      if (template) {
        this.set(template);
      } else{
        this.set({});
      }
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

  /** @function
   * @name remove
   * @description Removes either entire ObjectDB, or item by name.
   * @param {string} item - If provided, removes only item.
   */
  remove(item) {
  	if (item) {
    	delete this.db[item]
      return this;
    } else {
      this.db = {};
      return this;
		}
  }

  /** @function
   * @name remove
   * @description Removes either entire ObjectDB, or item by name.
   * @param {string} item - If provided, removes only item.
   */
  purge() {
  	localStorage.removeItem(this.dbName);
    return this;
  }
}

module.exports = ObjectDB;
