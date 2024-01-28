import { useEffect } from "react";
import { LoginPage } from "src/pages /LoginPage";
function App() {
  useEffect(() => {
    async function fetchFn() {
      const res = await fetch("http://localhost:8000/users");
      const data = await res.json();
      console.log(data);
    }

    fetchFn();
  }, []);

  return (
    <div>
      <LoginPage />
      {/* <LoginForm /> */}
      {/* <Input
        name="login"
        onChange={handleSubmit}
        label="Login"
        marginRight={30}
      />
      <Input
        name="password "
        onChange={handleSubmit}
        label="Password"
        marginRight={10}
      />
      <h1>Hello fitness App</h1>
      <button>Search</button> */}
    </div>
  );
}

export default App;
