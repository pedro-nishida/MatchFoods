import React from 'react';

const TermsConditions = ({ onClose }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
        <div className="bg-white p-6 rounded shadow-lg max-w-3xl w-full max-h-full overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>
          <div className="mb-4">
              <p>
            Termos e Condições do MatchFood
            <br />
            <br />
            1. Introdução
            <br />
            <br />
            O MatchFood ("nós", "nos" ou "nosso") fornece uma plataforma social de mídia para restaurantes e entusiastas da comida. Esses Termos e Condições ("Termos") regem seu acesso e uso do nosso aplicativo web.
            <br />
            <br />
            2. Acordo do Usuário
            <br />
            <br />
            Ao usar nosso aplicativo web, você ("você" ou "Usuário") concorda em estar vinculado a esses Termos.
            <br />
            <br />
            3. Dados do Usuário
            <br />
            <br />
            3.1. Coletamos dados pessoais (ex.: nome, e-mail, localização) para fornecer nossos serviços.
            <br />
            <br />
            3.2. Cumprimos as leis de proteção de dados aplicáveis, incluindo a LGPD.
            <br />
            <br />
            3.3. Você consente com nossa coleta e processamento de dados.
            <br />
            <br />
            4. Responsabilidade em Mídia Social
            <br />
            <br />
            4.1. Não somos responsáveis pelo conteúdo gerado pelos usuários.
            <br />
            <br />
            4.2. Os usuários são responsáveis por suas postagens, comentários e interações.
            <br />
            <br />
            4.3. Reservamos o direito de remover ou moderar conteúdo.
            <br />
            <br />
            5. Propriedade Intelectual
            <br />
            <br />
            5.1. O conteúdo, logotipos e marcas registradas do nosso aplicativo web são de nossa propriedade.
            <br />
            <br />
            5.2. Os usuários concedem-nos uma licença para usar o conteúdo postado.
            <br />
            <br />
            6. Pagamento e Cancelamento
            <br />
            <br />
            6.1. Os termos de pagamento aplicam-se a listagens destacadas, publicidade ou serviços premium.
            <br />
            <br />
            6.2. Cancelamentos e reembolsos são regidos por nossa política de reembolso.
            <br />
            <br />
            7. Desresponsabilizações e Limitações
            <br />
            <br />
            7.1. Desresponsabilizamo-nos de quaisquer garantias.
            <br />
            <br />
            7.2. Nossa responsabilidade é limitada a danos diretos.
            <br />
            <br />
            8. Lei Aplicável
            <br />
            <br />
            Esses Termos são regidos pelas leis do Brasil.
            <br />
            <br />
            9. Alterações
            <br />
            <br />
            Reservamos o direito de atualizar esses Termos.
            <br />
            <br />
            10. Aceitação
            <br />
            <br />
            Ao usar nosso aplicativo web, você reconhece ter lido e aceito esses Termos.
          </p>
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

export default TermsConditions;
