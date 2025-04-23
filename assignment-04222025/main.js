const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

// fetch data
async function getRequest(path) {
  try {
    const res = await fetch(BASE_URL + path);
    if (!res.ok) throw new Error("could not fetch the item...");
    const data = await res.json();
    const { name, id } = data;

    return { name, id };
  } catch (err) {
    throw err.message;
  }
}

// run functions
(async function () {
  const all = await promiseAll();
  console.log(all);

  const allSettled = await promiseAllSettled();
  console.log(allSettled);

  const race = await promiseRace();
  console.log(race);

  const any = await promiseAny();
  console.log(any);
})();

/*==================================================*/

function promiseAll() {
  return Promise.all([
    getRequest("pikachu"),
    getRequest("charmander"),
    getRequest("butterfree"),
  ]);
}

/*
return:
[
  { name: "pikachu", id: 25 },
  { name: "charmander", id: 4 },
  { name: "butterfree", id: 12 },
]
*/

/*==================================================*/

function promiseAllSettled() {
  return Promise.allSettled([
    getRequest("zubat"),
    getRequest(),
    getRequest("caterpie"),
  ]);
}

/*
return:
[
  { status: 'fulfilled', value: { name: 'pikachu', id: 25 } },
  { status: 'rejected', reason: 'could not fetch the item...' },
  { status: 'fulfilled', value: { name: 'caterpie', id: 10 } }
]
*/

/*==================================================*/

function promiseRace() {
  return Promise.race([
    getRequest("oddish"),
    getRequest("raichu"),
    getRequest("arbok"),
  ]);
}

/*
return:
{ name: 'oddish', id: 25 }
 or
{ name: 'raichu', id: 4 }
 or
{ name: 'arbok', id: 12 }
*/

/*==================================================*/

function promiseAny() {
  return Promise.any([
    getRequest(),
    getRequest("psyduck"),
    getRequest("meowth"),
  ]);
}

/*
return:
{ name: 'psyduck', id: 54 }
 or
{ name: 'meowth', id: 52 }
*/

/*==================================================*/
