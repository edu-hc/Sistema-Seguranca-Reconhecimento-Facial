import LogRow from "./logrow";

export default function Logs() {
  return (
    <div className="p-6 bg-gray-100 shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Registro</h2>
      
      <div className="overflow-x-auto max-h-205">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="border-1 border-dotted p-4">
              <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">Data</th>
              <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">Usuário</th>
              <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">Ação</th>
            </tr>
          </thead>
          <tbody>
            {/* LogRow Components Here */}
            <LogRow timestamp='2025-03-06 08:05' usuario='Maria Souza' acao='Saída' />
<LogRow timestamp='2025-03-06 08:10' usuario='Carlos Oliveira' acao='Entrada' />
<LogRow timestamp='2025-03-06 08:15' usuario='Ana Lima' acao='Entrada' />
<LogRow timestamp='2025-03-06 08:20' usuario='Pedro Almeida' acao='Acesso Negado' />
<LogRow timestamp='2025-03-06 08:25' usuario='João Silva' acao='Saída' />
<LogRow timestamp='2025-03-06 08:30' usuario='Maria Souza' acao='Entrada' />
<LogRow timestamp='2025-03-06 08:35' usuario='Carlos Oliveira' acao='Entrada' />
<LogRow timestamp='2025-03-06 08:40' usuario='Ana Lima' acao='Saída' />
<LogRow timestamp='2025-03-06 08:45' usuario='Pedro Almeida' acao='Entrada' />
<LogRow timestamp='2025-03-06 08:50' usuario='João Silva' acao='Entrada' />
<LogRow timestamp='2025-03-06 08:55' usuario='Maria Souza' acao='Saída' />
<LogRow timestamp='2025-03-06 09:00' usuario='Carlos Oliveira' acao='Acesso Negado' />
<LogRow timestamp='2025-03-06 09:05' usuario='Ana Lima' acao='Entrada' />
<LogRow timestamp='2025-03-06 09:10' usuario='Pedro Almeida' acao='Entrada' />
<LogRow timestamp='2025-03-06 09:15' usuario='João Silva' acao='Saída' />
<LogRow timestamp='2025-03-06 09:20' usuario='Maria Souza' acao='Entrada' />
<LogRow timestamp='2025-03-06 09:25' usuario='Carlos Oliveira' acao='Saída' />
<LogRow timestamp='2025-03-06 09:30' usuario='Ana Lima' acao='Entrada' />
<LogRow timestamp='2025-03-06 09:35' usuario='Pedro Almeida' acao='Acesso Negado' />
<LogRow timestamp='2025-03-06 09:40' usuario='João Silva' acao='Entrada' />
<LogRow timestamp='2025-03-06 09:45' usuario='Maria Souza' acao='Saída' />
<LogRow timestamp='2025-03-06 09:50' usuario='Carlos Oliveira' acao='Entrada' />
<LogRow timestamp='2025-03-06 09:55' usuario='Ana Lima' acao='Entrada' />
<LogRow timestamp='2025-03-06 10:00' usuario='Pedro Almeida' acao='Entrada' />
<LogRow timestamp='2025-03-06 10:05' usuario='João Silva' acao='Saída' />
<LogRow timestamp='2025-03-06 10:10' usuario='Maria Souza' acao='Entrada' />
<LogRow timestamp='2025-03-06 10:15' usuario='Carlos Oliveira' acao='Saída' />
<LogRow timestamp='2025-03-06 10:20' usuario='Ana Lima' acao='Acesso Negado' />
<LogRow timestamp='2025-03-06 10:25' usuario='Pedro Almeida' acao='Entrada' />
<LogRow timestamp='2025-03-06 10:30' usuario='João Silva' acao='Entrada' />
<LogRow timestamp='2025-03-06 10:35' usuario='Maria Souza' acao='Saída' />
<LogRow timestamp='2025-03-06 10:40' usuario='Carlos Oliveira' acao='Entrada' />
<LogRow timestamp='2025-03-06 10:45' usuario='Ana Lima' acao='Saída' />
<LogRow timestamp='2025-03-06 10:50' usuario='Pedro Almeida' acao='Entrada' />
<LogRow timestamp='2025-03-06 10:55' usuario='João Silva' acao='Saída' />
<LogRow timestamp='2025-03-06 11:00' usuario='Maria Souza' acao='Entrada' />
<LogRow timestamp='2025-03-06 11:05' usuario='Carlos Oliveira' acao='Entrada' />
<LogRow timestamp='2025-03-06 11:10' usuario='Ana Lima' acao='Entrada' />
<LogRow timestamp='2025-03-06 11:15' usuario='Pedro Almeida' acao='Acesso Negado' />
<LogRow timestamp='2025-03-06 11:20' usuario='João Silva' acao='Entrada' />
<LogRow timestamp='2025-03-06 11:25' usuario='Maria Souza' acao='Saída' />
<LogRow timestamp='2025-03-06 11:30' usuario='Carlos Oliveira' acao='Entrada' />
<LogRow timestamp='2025-03-06 11:35' usuario='Ana Lima' acao='Saída' />
<LogRow timestamp='2025-03-06 11:40' usuario='Pedro Almeida' acao='Entrada' />
<LogRow timestamp='2025-03-06 11:45' usuario='João Silva' acao='Entrada' />
<LogRow timestamp='2025-03-06 11:50' usuario='Maria Souza' acao='Entrada' />
            {/* Repeat for all LogRow components */}
          </tbody>
        </table>
      </div>
    </div>
  );
}