import { useEffect, useState } from "react";
import { UserType } from "../../data/Types";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../api/axios";

function Users() {
  const [users, setUsers] = useState<UserType[]>([]);
  // const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    // const getUsers = async () => {
    //   try {
    //     const response = await axiosPrivate.get("/users", {
    //       signal: controller.signal,
    //     });
    //     isMounted && setUsers(response.data);
    //   } catch (err) {
    //     console.error(err);
    //     navigate("/login", { state: { from: location }, replace: true });
    //   }
    // };

    //DELETE THIS v
    const getUsers = async () => {
      const response = await axios.get(`${BASE_URL}/users`);
      setUsers(response.data);
    };
    //DELETE THIS ^

    getUsers();
  }, []);

  return (
    <section>
      {users?.length ? (
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Role</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={i}>
                <td>{user?.email}</td>
                <td style={{ textAlign: "center" }}>{user?.role}</td>
                <td>
                  <Link to={`/admin/${user.id}/edit`}>Edit</Link>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users to display</p>
      )}
    </section>
  );
}

export default Users;
