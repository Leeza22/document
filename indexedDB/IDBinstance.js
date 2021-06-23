class IDBInstance {
  constructor() {
    this.db = null,
    this.storeName = '',
    this.message = {
      error(error) {
      throw new Error(error || '错误！')
      },
      success(msg) {
        console.log(msg)
      },
      info(info) {
        console.log(info)
      }
    }
  }

  open(dbName, version) {
    return new Promise((resolve, reject) => {
      if (!window.indexedDB) {
        this.message.error("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.")
      }
      // 设计目标之一就是允许大量数据可以被存储以供离线使用
      // 在浏览器的隐私模式下是完全被禁止的

      let request = window.indexedDB.open(dbName, version);
      // 返回是是一个IDBDatabase对象的实例
      // open方法接收的第二个参数，就是数据库的版本号。

      request.onerror = (event) => {
        this.message.error('打开数据库报错');
      }

      request.onsuccess = (event) => {
        this.db = event.target.result;
        this.message.success("打开数据库成功");
        resolve(this)
      }

      // 新建数据库与打开数据库是同一个操作，如果指定的数据库不存在，就会创建。
      // 不同之处在于，后续的操作主要在upgradeneeded事件的监听函数里面完成，因为这时版本从无到有，所以会出发这个事件。
      // 更新数据库版本号
      request.onupgradeneeded = (event) => {
        this.db = event.target.result

        // 冒泡错误 集中处理
        this.db.onerror = (event) => {
          this.message.error("database error： " + event.result.errorCode);
        }
        resolve(this)
      }
    })
  }

  store(storeName) {
    if (!this.db.objectStoreNames.contains(storeName)) {
      this.message.error(this.db.name + ' 没有此表！')
      return this
    }
    this.storeName = storeName
    return this
  }

  // 新建对象仓库（新建表)
  storeInstance(storeName, options) {
    if (!this.db.objectStoreNames.contains(storeName)) {
      let objectStore = this.db.createObjectStore(storeName, options);
      // 建立索引通过name搜索 unique 在transaction完成之前
      // objectStore.createIndex('name', 'name', { unique: true });
      // objectStore.createIndex('path', 'path', { unique: false });
      return objectStore
    }
  }

  async add(data) {
    return new Promise((resolve) => {
      if (!this.storeName) return
      var request = this.db.transaction([this.storeName], "readwrite")
                      .objectStore(this.storeName)
                      .add(data)
      request.onsuccess = (event) => {
        this.message.success("数据写入成功")
        resolve()
      }
      request.onerror = (event) => {
        this.message.error("数据写入失败")
      }
    })
  }


  async get(id) {
    return new Promise((resolve) => {
      if (!this.storeName) return
      let request = this.db.transaction([this.storeName])
                    .objectStore(this.storeName)
                    .get(id*1);
      request.onsuccess = (event) => {
        resolve(event.target.result);
      }
      request.onerror = (event) => {
        this.message.error("数据读取失败");
      }
    })
  }


  async put(data) {
    return new Promise((resolve) => {
      if (!this.storeName) return
      let request = this.db.transaction([this.storeName], 'readwrite')
                      .objectStore(this.storeName)
                      .put(data);
      request.onsuccess = (event) => {
        this.message.success("数据修改成功")
        resolve()
      }
      request.onerror = (event) => {
        this,message.error("数据修改失败");
      }
    })
  }

  async  del(id) {
    return new Promise((resolve) => {
      if (!this.storeName) return
      if (!id) return
      let request = this.db.transaction([this.storeName], 'readwrite')
                    .objectStore(this.storeName)
                    .delete(id*1);
      request.onsuccess = (event) => {
        resolve(event.target.result);
        this.message.success("数据删除成功")
      }
      request.onerror = (event) => {
        this.message.error("数据删除失败");
      }
    })
  }

  async all() {
    return new Promise((resolve) => {
      if (!this.storeName) return
      let data = [];
      let objectStore = this.db.transaction([this.storeName], 'readwrite')
                      .objectStore(this.storeName);
      objectStore.openCursor().onsuccess = (event) => {
        let cursor = event.target.result;

        if (cursor) {
          data.push(cursor.value);
          cursor.continue();
        } else {
          this.message.info("没有更多数据了！")
          resolve(data);
        }
      }
    })
  }
}

// export default IDBInstance