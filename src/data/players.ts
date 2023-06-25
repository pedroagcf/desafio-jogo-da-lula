const firstNames = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Henry", "Ivy", "Jack", "Kate", "Liam", "Mia", "Noah", "Olivia", "Peter", "Quinn", "Ryan", "Sara", "Thomas", "Uma", "Victor", "Wendy", "Xavier", "Yara", "Zoe"];
const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez"];

const totalObjects = 69;

const generateRandomName = () => {
  const randomFirstIndex = Math.floor(Math.random() * firstNames.length);
  const randomLastIndex = Math.floor(Math.random() * lastNames.length);
  const firstName = firstNames[randomFirstIndex];
  const lastName = lastNames[randomLastIndex];
  return `${firstName} ${lastName}`;
};

const players = Array.from({ length: totalObjects }, () => ({
  name: generateRandomName(),
  amount: 42000000
}));

export {
  players
}