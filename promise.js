// practice questions on promise

const ListOfAllobje = "https://api.restful-api.dev/objects";
const Listofobjectsbyids =
  "https://api.restful-api.dev/objects?id=3&id=5&id=10";

function findListofObject() {
  return new Promise((resolve, reject) => {
    fetch(ListOfAllobje)
      .then((res) => {
        if (res.ok) {
          resolve(res.json());
        } else {
          reject("failed to fetch all object");
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function ListofobjectsbyidsFn() {
  return new Promise((resolve, reject) => {
    fetch(Listofobjectsbyids)
      .then((res) => {
        if (res.ok) {
          resolve(res.json());
        } else {
          reject("failded to fetch object by ids");
        }
      })
      .catch((erorr) => {
        reject(erorr);
      });
  });
}

findListofObject()
  .then((allobjec) => {
    console.log(allobjec);
    return ListofobjectsbyidsFn();
  })
  .then((objectsByIds) => {
    console.log("Objects by IDs:", objectsByIds);
  })
  .catch((erorr) => {
    console.log(erorr);
  })
  .finally(() => {
    console.log("cleaning up");
  });

//end practice questions on promise

// example of finaly

const fetchfn = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const status = false;
      if (status) {
        resolve("data fetched sucessfully");
      } else {
        reject("data not fetched sucessfully");
      }
    }, 2000);
  });
};
fetchfn()
  .then((res) => {
    console.log(res);
  })
  .catch((Err) => {
    console.log(Err);
  })
  .finally(() => {
    console.log("Operation completed. Cleaning up resources...");
  });

// end example of finaly

// example of promiseall and promiserace

const promise1 = Promise.reject(3);
const promise2 = new Promise((resolve, reject) => {
  const s = false;
  if (s) {
    resolve("success");
  }
  reject("not success");
});
const promise3 = Promise.resolve(42);

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values); // [3, 'foo', 42]
  })
  .catch((error) => {
    console.log(error); // Will print error if any promise fails
  });

//   example of race

const promise4 = new Promise((resolve, reject) =>
  setTimeout(resolve, 20, "foo")
);
const promise5 = new Promise((resolve, reject) =>
  setTimeout(reject, 10, "fail")
);
const promise6 = new Promise((resolve, reject) =>
  setTimeout(reject, 50, "error")
);

Promise.race([promise4, promise5, promise6])
  .then((value) => {
    console.log(value); // Will print 'foo' because promise1 resolves first
  })
  .catch((error) => {
    console.error(error); // Will print 'error' because promise3 rejects first
  });

// end of exmaple of Promise.all() and Promise.race()

// exmaple of Promise.allSettled() and Promise.any()

const promise7 = new Promise((resolve, reject) =>
  setTimeout(resolve, 20, "foo")
);
const promise8 = new Promise((resolve, reject) =>
  setTimeout(reject, 10, "fail")
);
const promise9 = new Promise((resolve, reject) =>
  setTimeout(resolve, 50, "error")
);

Promise.allSettled([promise7, promise8, promise9])
  .then((value) => {
    console.log(value); // Will print 'foo' because promise1 resolves first
  })
  .catch((error) => {
    console.error(error); // Will print 'error' because promise3 rejects first
  });

const promise10 = new Promise((resolve, reject) =>
  setTimeout(reject, 20, "foo")
);
const promise11 = new Promise((resolve, reject) =>
  setTimeout(reject, 10, "fail")
);
const promise12 = new Promise((resolve, reject) =>
  setTimeout(resolve, 500, "this is success")
);

Promise.any([promise10, promise11, promise12])
  .then((value) => {
    console.log(value); // Will print 'foo' because promise1 resolves first
  })
  .catch((error) => {
    console.error(error); // Will print 'error' because promise3 rejects first
  });
