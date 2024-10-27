
const PrivacyPolicy = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
      <div className="bg-white p-6 rounded shadow-lg max-w-3xl w-full max-h-full overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
        <div className="mb-4">
          <p>1. Introdução</p>
          <p>O MatchFood ("nós", "nos" ou "nosso") valoriza sua privacidade e compromete-se em proteger seus dados pessoais. Esta Política de Privacidade explica como coletamos, utilizamos e protegemos seus dados.</p>
          <p>2. Dados Coletados</p>
          <p>2.1. Dados pessoais: nome, e-mail, localização, telefone, etc.</p>
          <p>2.2. Dados de navegação: histórico de acesso, dispositivo, navegador, etc.</p>
          <p>3. Finalidade da Coleta</p>
          <p>3.1. Fornecer nossos serviços.</p>
          <p>3.2. Melhorar experiência do usuário.</p>
          <p>3.3. Comunicar promoções e novidades.</p>
          <p>4. Uso e Compartilhamento de Dados</p>
          <p>4.1. Não compartilhamos dados com terceiros, exceto para:</p>
          <p>4.1.1. Cumprir obrigações legais.</p>
          <p>4.1.2. Fornecer serviços relacionados.</p>
          <p>5. Direitos do Titular</p>
          <p>5.1. Acesso.</p>
          <p>5.2. Correção.</p>
          <p>5.3. Eliminação.</p>
          <p>5.4. Portabilidade.</p>
          <p>6. Segurança</p>
          <p>6.1. Implementamos medidas de segurança adequadas.</p>
          <p>6.2. Protegemos contra acessos não autorizados.</p>
          <p>7. Retenção de Dados</p>
          <p>7.1. Mantemos dados apenas pelo necessário.</p>
          <p>7.2. Eliminamos dados quando não mais necessários.</p>
          <p>8. Alterações</p>
          <p>8.1. Reservamos o direito de atualizar esta Política.</p>
          <p>9. Contato</p>
          <p>9.1. Para questões ou solicitações, contate: [e-mail do MatchFood]</p>
          <p>10. Aceitação</p>
          <p>Ao usar nosso aplicativo web, você reconhece ter lido e aceito esta Política de Privacidade.</p>
        </div>
        <button 
          className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;