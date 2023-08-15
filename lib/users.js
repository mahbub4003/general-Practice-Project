export const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};
export const getUser = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  return res.json();
};
