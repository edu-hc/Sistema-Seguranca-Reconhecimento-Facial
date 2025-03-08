  interface LogRowProps {
    timestamp: string;
    usuario: string;
    acao: string;
  }
  
  const LogRow: React.FC<LogRowProps> = ({ timestamp, usuario, acao }) => {
    return (
      <tr className="border-1 border-dotted p-4">
        <td className="py-2 px-4 text-left text-sm font-medium text-gray-600">{timestamp}</td>
        <td className="py-2 px-4 text-left text-sm font-medium text-gray-600">{usuario}</td>
        <td className="py-2 px-4 text-left text-sm font-medium text-gray-600">{acao}</td>
      </tr>
    );
  };
  
  export default LogRow;