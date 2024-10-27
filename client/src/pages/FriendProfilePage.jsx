import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "../components/Header";

const FriendProfilePage = () => {
	const { friendId } = useParams();
	const [friendData, setFriendData] = useState(null);
	const [error, setError] = useState(null);
    const navigate = useNavigate();

	useEffect(() => {
		// Função para buscar dados do amigo usando o friendId
		const fetchFriendData = async () => {
			try {
				const response = await fetch(`/api/friends/${friendId}`);
                //const response = await fetch(`http://localhost:5000/api/friends/${friendId}`);
                console.log(response); 
				if (!response.ok) {
					throw new Error('Falha ao buscar os dados');
				}
				const data = await response.json();
				setFriendData(data);
			} catch (error) {
				setError(error.message);
				console.error("Erro ao buscar dados do amigo:", error);
			}
		};

		fetchFriendData();
	}, [friendId]);

	if (error) {
		return <p>Erro: {error}</p>;
	}

	if (!friendData) {
		return <p>Carregando...</p>;
	}



    const handleBackClick = () => {
        navigate(-1); 
      };

	return (
		<div className="bg-gradient-to-br from-pink-100 to-purple-100
		 overflow-hidden
		'min-h-screen bg-gray-50 flex flex-col">
			<Header />
			<div className="flex-grow flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-md">
                <button 
                    onClick={handleBackClick}
                    className="bg-gradient-to-r from-red-800 to-pink-400 text-white font-bold py-2 px-4 rounded shadow hover:shadow-lg transition duration-300"
                    >
                    Voltar
                </button>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
						Perfil de {friendData.nome}
					</h2>
				</div>
				<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
					<div className="card-body bg-gradient-to-b from-white to-[#f2d1d1] bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-200">
						<img src={friendData.foto} alt="Friend Image" className="w-48 h-full object-cover rounded-md" />
						<p>Idade: {friendData.idade}</p>
						<p>Bio: {friendData.bio}</p>
						
					</div>
				</div>
			</div>
		</div>
	);
};

export default FriendProfilePage;
