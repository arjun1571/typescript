{
  //

  //typealiys a kona kiso barate hole intersection use kori

  type userAli = {
    name: string;
    age: number;
  };

  type userWithStatusAli = userAli & {
    status: boolean;
  };
  const userAli: userWithStatusAli = {
    name: "arjun",
    age: 20,
    status: true,
  };

  //interface a kona kiso barate hole extends use kori

  interface user {
    name: string;
    roll: number;
  }
  interface userWithStatus extends user {
    status: boolean;
  }
  const user1: userWithStatus = {
    name: "arjun",
    roll: 10,
    status: true,
  };
  //
}
