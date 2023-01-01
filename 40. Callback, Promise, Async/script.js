// Callback

// Async vs Sync

console.log("Start");
console.log("Mid");

// for (let index = 0; index < 1000; index++) {
//     console.log("Loop!!")
// } // Blocking the thread

// setTimeout(() => {
//     for (let index = 0; index < 1000; index++) {
//         console.log("Loop inside Set timeout!!")
//     }
// }, 1000);

console.log("End");

// API Hit scenario

let loginUser = (email, password, clbkFn, errFn) => {
  if (email && password) {
    setTimeout(() => {
      console.log(email);
      clbkFn({ userId: 56 });
    }, 2500);
  } else {
    errFn("You have given bad input");
  }
};

let getUserDetails = (userId, clbK) => {
  if (userId) {
    setTimeout(() => {
      clbK({ age: 25, gender: "Male", location: "Chennai" });
    }, 500);
  }
};

let getUserPosts = (userId, clbk) => {
  if (userId) {
    setTimeout(() => {
      clbk([25, 56, 78]);
    }, 1500);
  }
};

// Callback chain

loginUser(
  "anwar@gmail.com",
  "12345",
  function clbkFn(userId) {
    console.log(userId);
    getUserDetails(userId, (userInfo) => {
      console.log(userInfo);
      getUserPosts(userId, (userPost) => {
        console.log(userPost);
      });
    });
  },
  (err) => {
    console.log(err, "Error");
  }
);

// Callback hell

// To overcome the callback hell, we need to use Promise
// 1. Pending state
// 2. Success state
// 3. Failure state

// Syntax

function loginUserPrms(email, password) {
  let prms = new Promise(function (resolve, reject) {
    if (email && password) {
      setTimeout(() => {
        console.log(email);
        resolve({ userId: 56 });
      }, 2500);
    } else {
      reject("You have given bad input");
    }
  });
  return prms;
}

console.log(loginUserPrms("anwar@gmail.com", "12345")); // It will return Promise only

function getUserDetailsPrms(userId) {
  return new Promise((resolve, reject) => {
    if (userId) {
      setTimeout(() => {
        resolve({ age: 25, gender: "Male", location: "Chennai" });
      }, 500);
    } else {
      reject("Something went wrong in getUserDetailsPrms");
    }
  });
}

function getUserPostsPrms(userId) {
  return new Promise((resolve, reject) => {
    if (userId) {
      setTimeout(() => {
        resolve([25, 56, 78]);
      }, 1500);
    } else {
      reject("Something error in getUserPostsPrms");
    }
  });
}

// So to consume the result of Promise we need to use then

loginUserPrms("anwar@gmail.com", "12345")
  .then((res) => {
    console.log(res, "Promise Response");
    return res.userId;
  })
  .then((userId) => {
    return getUserDetailsPrms(userId)
      .then((res) => {
        console.log(res, "Promise User details");
        return userId;
      })
      .then((userId) => {
        getUserPostsPrms(userId).then((res) => {
          console.log(res, "getUserPostsPrms Response");
        });
      });
  })
  .catch((err) => {
    console.log(err, "Promise Catch");
  });

// Realtime API Call

// fetch
fetch("https://jsonplaceholder.typicode.com/todos/2")
  .then((res) => res.json())
  .then((res) => console.log(res));

// Photos API
fetch("https://jsonplaceholder.typicode.com/photos")
  .then((res) => res.json())
  .then((res) => console.log(res));

fetch("https://jsonplaceholder.typicode.com/todos/2", {
  method: "GET",
})
  .then((res) => res.json())
  .then((res) => console.log(res, "GET METHOD"));

// Async & Await
// Promise's syntactic sugar - ES6

async function getMyDetails() {
  let loginUserDetailsAsy = await loginUserPrms("anwar@gmail.com", "12345");
  let getUserDetailsAsy = await getUserDetailsPrms(loginUserDetailsAsy.userId);
  let getUserPostAsy = await getUserPostsPrms(loginUserDetailsAsy.userId);
  console.log(loginUserDetailsAsy.userId, "userId inside async");
  console.log(getUserDetailsAsy, "getUserDetailsAsy inside async");
  console.log(getUserPostAsy, "getUserPostAsy  inside async");
}

getMyDetails();
console.log("I will run before the above function");

// To handle errors for Async and Await we can use try catch block

async function getMyDetailsTry() {
  try {
    let loginUserDetailsAsy = await loginUserPrms("anwar@gmail.com", "12345");
    let getUserDetailsAsy = await getUserDetailsPrms(
      loginUserDetailsAsy.userId
    );
    let getUserPostAsy = await getUserPostsPrms();
    console.log(loginUserDetailsAsy.userId, "userId inside async");
    console.log(getUserDetailsAsy, "getUserDetailsAsy inside async");
    console.log(getUserPostAsy, "getUserPostAsy  inside async");
  } catch (error) {
    console.log(error, "Error in Try catch")
  }
}
getMyDetailsTry();
