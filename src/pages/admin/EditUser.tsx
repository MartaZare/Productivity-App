import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios, { BASE_URL } from "../../api/axios";
import { SESSION_MINUTES } from "../../data/Constants";
import { getData } from "../../api/api";

function EditUser() {
  const { id } = useParams();
  const [state, setState] = useState({
    user: {
      id: "",
      email: "",
      role: "",
    },
    character: {
      id: "",
      userId: "",
      nickname: "",
      time: 0,
    },
  });

  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserInfo = async () => {
      if (id) {
        const [userResponse, characterResponse] = await Promise.all([
          getData("users/", id),
          getData("characters?userId=", id),
        ]);

        setState((prev) => ({
          ...prev,
          user: userResponse.data,
          character: characterResponse.data[0],
        }));
      }
    };

    getUserInfo();
  }, [id]);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    target: "user" | "character"
  ) {
    setState((prev) => ({
      ...prev,
      [target]: { ...prev[target], [event.target.name]: event.target.value },
    }));
  }

  function handleTimeBlur(event: ChangeEvent<HTMLInputElement>) {
    const newValue = isTimeValid(parseInt(event.target.value));
    setState((prev) => ({
      ...prev,
      character: {
        ...prev.character,
        time: newValue,
        nickname: state.character.nickname,
      },
    }));
  }

  async function handleSubmit(event: FormEvent) {
    event?.preventDefault();

    await Promise.all([
      axios.patch(`${BASE_URL}/users/${id}`, {
        email: state.user.email,
        role: state.user.role,
      }),
      axios.patch(`${BASE_URL}/characters/${state.character.id}`, {
        time: state.character.time,
        nickname: state.character.nickname,
      }),
    ]);

    navigate("/admin");
  }

  return (
    <section className="form-page">
      <h1>Edit User</h1>
      <form>
        <input
          type="text"
          name="email"
          value={state.user.email}
          onChange={(e) => handleChange(e, "user")}
        />
        <select
          name="role"
          value={state.user.role}
          onChange={(e) => handleChange(e, "user")}
        >
          <option key={"user"} value="user">
            user
          </option>
          <option key={"admin"} value="admin">
            admin
          </option>
        </select>

        <input
          type="text"
          name="nickname"
          value={state.character.nickname}
          onChange={(e) => handleChange(e, "character")}
        />
        <input
          type="number"
          name="time"
          step={SESSION_MINUTES}
          value={state.character.time}
          onChange={(e) => handleChange(e, "character")}
          onBlur={handleTimeBlur}
        />

        {submit ? (
          <>
            <h2>
              Submitting data will result in the loss of previously entered
              information.
              <br />
              Are you sure you want to submit?
            </h2>
            <div className="btn-wrapper">
              <button onClick={() => setSubmit(false)}>No</button>
              <button className="surrender-btn" onClick={handleSubmit}>
                Yes
              </button>
            </div>
          </>
        ) : (
          <button onClick={() => setSubmit(true)}>Submit</button>
        )}
      </form>
    </section>
  );
}

function isTimeValid(time: number) {
  return Math.floor(time / 25) * 25;
}

export default EditUser;
