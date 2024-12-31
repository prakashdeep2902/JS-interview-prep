// practice questions on promise

/*1) start*/
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
    console.log(
      allobjec.filter((e) => {
        return e.id;
      })
    );
    return ListofobjectsbyidsFn();
  })
  .then((objectsByIds) => {
    console.log("Objects by IDs:", objectsByIds);
  })
  .catch((erorr) => {
    console.log(erorr);
  });

/*2) end*/
