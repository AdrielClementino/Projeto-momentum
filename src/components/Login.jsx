import React from 'react';

const Login = () => {
  return (
    <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
      <section className="flex w-[30rem] flex-col space-y-10">
        <div className="text-center text-4xl font-medium">DynamicCRM</div>
    
        <div className="mx-8 transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input
            type="text"
            placeholder="Email ou Usuário"
            className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
          />
        </div>
    
        <div className=" mx-8 transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input
            type="password"
            placeholder="Senha"
            className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
          />
        </div>
    
        <button className="transform rounded-sm bg-indigo-600 mx-8 py-2 font-bold duration-300 hover:bg-indigo-400">
          ENTRAR
        </button>
    
        <a href="#" className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300">
          Esqueceu a senha?
        </a>
    
        <p className="text-center text-lg">
          Não tem uma conta?{' '}
          <a href="#" className="font-medium text-indigo-500 underline-offset-4 hover:underline">
            Criar conta!
          </a>
        </p>
      </section>
    </main>
  );
};

export default Login;
