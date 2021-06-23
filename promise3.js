

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
  // resolve 静态方法
  static resolve (parameter) {
    // 如果传入 MyPromise 就直接返回
    if (parameter instanceof MyPromise) {
      return parameter;
    }

    // 转成常规方式
    return new MyPromise(resolve =>  {
      resolve(parameter);
    });
  }

  // reject 静态方法
  static reject (reason) {
    return new MyPromise((resolve, reject) => {
      reject(reason);
    });
  }


  constructor(executor) {
    try {
      executor(this.resolve, this.reject)
    } catch(error) {
      this.reject(error)
    }

  }

  status = PENDING;
  value = null;
  reason = null;

  onFulfilledCallback = [];
  onRejectedCallback = [];

  resolve = (value) => {
    if (this.status === PENDING) {
      this.status = FULFILLED;
      this.value = value;

      // this.onFulfilledCallback && this.onFulfilledCallback(this.value)
      while(this.onFulfilledCallback.length) {
        this.onFulfilledCallback.shift()(value)
      }
    }
  }
  reject = (reason) => {
    if (this.status === PENDING) {
      this.status = REJECTED;
      this.reason = reason;

      // this.onRejectedCallback && this.onRejectedCallback(this.value)
      while(this.onRejectedCallback.length) {
        this.onRejectedCallback.shift()(reason)
      }
    }
  }
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { reason };
    // if (this.status === FULFILLED) {
    //   onFulfilled(this.value)
    // } else if (this.status === REJECTED) {
    //   onRejected(this.reason)
    // } else if (this.status === PENDING) {

    //   // this.onFulfilledCallback = onFulfilled
    //   // this.onRejectedCallback = onRejected
    //   this.onFulfilledCallback.push(onFulfilled)
    //   this.onRejectedCallback.push(onRejected)
    // }

    const promise = new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        createMicrotask(
          promise,
          onFulfilled(this.value),
          resolve,
          reject
        )
      } else if (this.status === REJECTED) {
        createMicrotask(
          promise,
          onRejected(this.reason),
          resolve,
          reject
        )
      } else if (this.status === PENDING) {

        // this.onFulfilledCallback = onFulfilled
        // this.onRejectedCallback = onRejected

        // this.onFulfilledCallback.push(onFulfilled)
        // this.onRejectedCallback.push(onRejected)

        this.onFulfilledCallback.push(() => {
          createMicrotask(
            promise,
            onFulfilled(this.value),
            resolve,
            reject
          )
        })
        this.onRejectedCallback.push(() => {
          createMicrotask(
            promise,
            onRejected(this.reason),
            resolve,
            reject
          )
        })
      }
    })
    return promise
  }
}

function resolvePromise(promise, x, resolve, reject) {
  if (promise === x) {
    return reject(new TypeError( 'Chaining cycle detected for promise #'))
  }
  if (x instanceof MyPromise) {
    console.log('x then', x)
    x.then(resolve, reject)
  } else {
    console.log('x', x)
    resolve(x)
  }
}

function createMicrotask(promise, handleCB, resolve, reject) {
  queueMicrotask(() => {
    try {
      resolvePromise(
        promise,
        handleCB,
        resolve,
        reject
      )
    } catch (error) {
      reject(error)
    }
  })
}

MyPromise.deferred = function () {
  var result = {};
  result.promise = new MyPromise(function (resolve, reject) {
    result.resolve = resolve;
    result.reject = reject;
  });

  return result;
}
module.exports = MyPromise