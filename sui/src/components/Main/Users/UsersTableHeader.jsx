export default function UsersTableHeader(props) {
  const { users } = props;

  let headings = Object.keys(users[0]);
  return headings.map((key, index) => <th key={index}>{key.toUpperCase()}</th>);
}
