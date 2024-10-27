import { useRef, useState } from "react";
import { Header } from "../components/Header";
import { useAuthStore } from "../store/useAuthStore";
import { useUserStore } from "../store/useUserStore";
import TermsConditions from "../components/TermsConditions"; 
import PrivacyPolicy from "../components/PrivacyPolicy";
import { Link } from "react-router-dom";

const ConfigPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [isThirdModalOpen, setIsThirdModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openSecondModal = () => setIsSecondModalOpen(true);
  const closeSecondModal = () => setIsSecondModalOpen(false);

  const openThirdModal = () => setIsThirdModalOpen(true);
  const closeThirdModal = () => setIsThirdModalOpen(false);

  return (
    <div className='min-h-screen bg-gray-50 flex flex-col'>
      <Header />

      <div className='flex-grow flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Configuração</h2>
        </div>

        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-200'>

            <Link
              to='/profile'
              className='mt-4 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white'
              style={{ backgroundColor: '#cc4747' }}
            >
              Configurações Perfil Público
            </Link>

            <Link
              to='/userSettings'
              className='mt-4 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white'
              style={{ backgroundColor: '#cc4747' }}
            >
              Configurações Usuário
            </Link>

            <button 
                className='mt-4 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white'
                style={{ backgroundColor: '#cc4747' }}
                onClick={openModal}
            >
                Terms and Conditions
            </button>

            <button 
              className='mt-4 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white'
              style={{ backgroundColor: '#cc4747' }}
              onClick={openSecondModal}
            >
              Politíca de Privacidade
            </button>

            <button 
              className='mt-4 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white'
              style={{ backgroundColor: '#cc4747' }}
              onClick={openThirdModal}
            >
              Contato e Suporte
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && <TermsConditions onClose={closeModal} />}

      {isSecondModalOpen && <PrivacyPolicy onClose={closeSecondModal} />}

      {isThirdModalOpen && 
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded shadow-lg max-w-3xl w-full max-h-full overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Suporte e Contato</h2>
            <div className="mb-4">
            <p>Contato: suporte@matchfoods.com</p>
            <p>Telefone: (11) 9999-9999</p>
            <p>Endereço: Rua dos Bobos, 0</p>
            <p>CEP: 00000-000</p>
            <p>Horário de atendimento: 8hs-19hrs Dias da Semana</p>
            <p>Discord: discord.gg/matchfoods</p>
          </div>
            <button 
              className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white"
              style={{ backgroundColor: '#cc4747' }}
              onClick={closeThirdModal}
            >
            Close
            </button>
          </div>
        </div>
      }

    </div>
  );
};
export default ConfigPage;
