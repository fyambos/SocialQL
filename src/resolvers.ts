
const userData = [
    {
        id: "1",
        username: "johndoe",
        email: "johndoe@gmail.com",
    },
    {
        id: "2",
        username: "janedoe",
        email: "janedoe@gmail.com",
    },
  ];

export const resolvers = {
    Query: {
        getUsers: () => userData,
    },
};