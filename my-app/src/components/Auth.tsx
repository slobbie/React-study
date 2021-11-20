import React from "react";

 interface Users {
    email : string | Number;
    password : string | Number;
    name : string;
 }


const users: Users[] = [
    { email: "kim@test.com", password: "123", name: "Kim" },
    { email: "lee@test.com", password: "456", name: "Lee" },
    { email: "park@test.com", password: "789", name: "Park" },
  ];
  
  export function signIn(this:Users, email:string | Number ,password:string | Number) {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user === undefined) throw new Error();
    return user;
  }

















