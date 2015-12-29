/**
 * Creates a ObjectDB class.
 * @class ObjectDB
 * @augments {string} dbName - Name of the ObjectDB to be used.
 */
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjectDB = (function () {
  function ObjectDB(dbName) {
    _classCallCheck(this, ObjectDB);

    this.db = {
      name: dbName,
      data: {}
    };
    this.publish = function () {};
  }

  /** @function
   * @name init
   * @description Inits the database.
   * @param {object} template - Optional template of default values. */

  _createClass(ObjectDB, [{
    key: "init",
    value: function init(template) {
      if (localStorage.getItem(this.db.name) === null) {
        this.set(template ? template : {});
      } else {
        this.get();
      }
      return this;
    }

    /** @function
     * @name subscribe
     * @description Calls function when db is changed.
     * @param {function} sub - function to be called. */
  }, {
    key: "subscribe",
    value: function subscribe(publish) {
      var _this = this;

      this.publish = publish;
      window.addEventListener("storage", function (e) {
        _this.publish({
          db: _this.db.name,
          data: _this.get(),
          at: Date.now()
        });
      }, false);
      return this;
    }

    /** @function
     * @name set
     * @description Sets data in the object db.
     * @param {object} data - Merges object with existing db object. */
  }, {
    key: "set",
    value: function set(data) {
      this.db.data = Object.assign({}, this.get(), data, {
        modified: Date.now()
      });

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
  }, {
    key: "get",
    value: function get(item) {
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
  }, {
    key: "remove",
    value: function remove(item) {
      if (item) {
        delete this.db.data[item];
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
  }, {
    key: "purge",
    value: function purge() {
      localStorage.removeItem(this.db.name);
      return this;
    }
  }]);

  return ObjectDB;
})();

module.exports = ObjectDB;
