export default function Header() {
  return (
    <header className="shadow-lg bg-black text-white w-74 h-screen py-4 px-6 flex flex-col">
      <div className="flex justify-center items-center mb-12 py-4 px-15 mt-6">
        <img src="./src/assets/logo-cps.png" alt="Logo" className="w-40 h-auto" />
    </div>
      <div className="justify-center items-center">
        <ul className="flex flex-col items-center space-y-4">
          <li>
          <a
              href="#"
              className="block py-4 px-20 text-lg font-medium hover:bg-gray-700 transition duration-200"
            >
              Alunos
            </a>
            <a
              href="#"
              className="block py-4 px-20 text-lg font-medium hover:bg-gray-700 transition duration-200"
            >
              Relatórios
            </a>
            <a
              href="#"
              className="block py-4 px-20 text-lg font-medium hover:bg-gray-700 transition duration-200"
            >
              Histórico
            </a>
            <a
              href="#"
              className="block py-4 px-20 text-lg font-medium hover:bg-gray-700 transition duration-200"
            >
              Configurações
            </a>
          </li>
        </ul>
       </div>
       <div className="justify-center mt-80">
       <ul className="flex flex-col items-center space-y-2">
         <a
              href="#"
              className="block py-4 px-20 text-lg font-medium hover:bg-gray-700 transition duration-200"
            >
              Configurações
            </a>
          <a
              href="#"
              className="block py-4 px-20 text-lg font-medium hover:bg-gray-700 transition duration-200"
            >
              Sair
            </a>
        </ul>
       </div>
</header>

  );
}