/**
 * Creates a ObjectDB class.
 * @class ObjectDB
 * @augments {string} dbName - Name of the ObjectDB to be used.
 */
class ObjectDB {

  constructor(dbName) {
    this.db = {
      name: dbName,
      data: {}
    };
    this.publish = () => {};
  }

  /** @function
   * @name init
   * @description Inits the database.
   * @param {object} template - Optional template of default values. */
  init(template) {
    if (localStorage.getItem(this.db.name) === null) {
      this.set((template) ? template : {});
    }else {
      this.get();
    }
    return this;
  }

  /** @function
   * @name subscribe
   * @description Calls function when db is changed.
   * @param {function} sub - function to be called. */
  subscribe(publish) {
    this.publish = publish;
    window.addEventListener("storage", (e) => {
      this.publish({
      	db: this.db.name,
     		data: this.get(),
        at: Date.now()
      });
    }, false);
    return this;
  }

  /** @function
   * @name set
   * @description Sets data in the object db.
   * @param {object} data - Merges object with existing db object. */
  set(data) {
    this.db.data = Object.assign(
      {},
      this.get(),
      data,
      {
        modified: Date.now()
      }
    );

    localStorage.setItem(this.db.name, JSON.stringify(this.db.data));

    this.publish({
      db: this.db.name,
      data: this.get(),
      at: Date.now()
    });
    return this;
  }

  /** @function
   * @name get
   * @description Gets either entire ObjectDB, or item by name.
   * @param {string} item - If provided, returns item from database by name.
   */
  get(item) {
    if (item) {
      this.db.data = JSON.parse(localStorage.getItem(this.db.name));
      return this.db.data[item];
    } else {
      this.db.data = JSON.parse(localStorage.getItem(this.db.name));
      return this.db.data;
    }
  }

  /** @function
   * @name remove
   * @description Removes either entire ObjectDB, or item by name.
   * @param {string} item - If provided, removes only item.
   */
  remove(item) {
    if (item) {
      delete this.db.data[item]
    } else {
      this.db.data = {};
    }
    return this;
  }

  /** @function
   * @name remove
   * @description Removes either entire ObjectDB, or item by name.
   * @param {string} item - If provided, removes only item.
   */
  purge() {
    localStorage.removeItem(this.db.name);
    return this;
  }
}

module.exports = ObjectDB;
