const Login = () => {

    
  return (
    <div className="flex justify-center py-20 min-h-screen bg-slate-50">
      <form className="flex flex-col gap-4 bg-slate-200 h-min p-6 rounded-lg">
        <input
          className="bg-slate-50 rounded-lg p-1 outline-none"
          type="email"
          placeholder="email"
        />
        <input
          className="bg-slate-50 rounded-lg p-1 outline-none"
          type="password"
          placeholder="password"
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
