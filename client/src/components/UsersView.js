import UserList from "./UserList";
import { Button, Form, FormControl } from "react-bootstrap";
import UserForm from "./UserForm";
import "./UsersView.css";

export default function AllUsers() {
  return (
    <>
      <header>
        <h2>{`Organization Name >> All Users`}</h2>
        <Form className="d-flex">
          <FormControl type="search" placeholder="Search" aria-label="Search" />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Button variant="primary" onClick={() => <UserForm />}>
          Add New User
        </Button>
      </header>
      <UserList />
      <UserForm />
    </>
  );
}
