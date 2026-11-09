export default function LoginPage() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>Login</h1>

      <form>
        <div>
          <label>Email</label>
          <br />
          <input type="email" />
        </div>

        <br />

        <div>
          <label>Password</label>
          <br />
          <input type="password" />
        </div>

        <br />

        <button type="submit">Login</button>
      </form>
    </main>
  );
}
