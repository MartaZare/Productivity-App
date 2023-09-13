interface UserLogInProps {
  setIsLoggedIn: (arg: boolean) => void;
}

function UserLogIn(props: UserLogInProps) {
  const { setIsLoggedIn } = props;

  return (
    <>
      <form
        onSubmit={() => {
          setIsLoggedIn(true);
        }}
        className="logInForm"
      >
        <h1>LOG IN</h1>
        <div className="log-in-label-input">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default UserLogIn;
