import { useEffect, useState } from "react";
import { UserType } from "../../data/Types";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../api/axios";
import Loading from "../../components/loading/Loading";

function Users() {
  const [loading, setLoading] = useState(true);
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
      setLoading(false);
    };
    //DELETE THIS ^

    getUsers();
  }, [handleDelete]);

  async function handleDelete(id: string, email: string) {
    let confirmMessage = confirm(
      `Are you sure you want to permanently delete user: ${email}`
    );
    if (confirmMessage === true) {
      await axios.delete(`${BASE_URL}/users/${id}`).catch((error) => {
        console.error(error);
      });
    } else {
      return;
    }
  }

  return (
    <section>
      {loading ? (
        <Loading />
      ) : (
        <>
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
                      <button
                        onClick={() => handleDelete(user?.id, user?.email)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No users to display</p>
          )}
        </>
      )}
    </section>
  );
}

export default Users;
