import { useUser } from '../../userContext';

const UserMenu = () => {
  const { isLoggedIn, username, logIn, logOut } = useUser();
  return (
    <>
      {isLoggedIn ? (
        <>
          <div>username: {username}</div>
          <button type="button" onClick={logOut}>
            logOut
          </button>
        </>
      ) : (
        <button type="button" onClick={logIn}>
          LogIN
        </button>
      )}
    </>
  );
};
export default UserMenu;
