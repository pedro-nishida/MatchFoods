// import { useState } from "react";
// import { Header } from "../components/Header";
// import { useFriendsStore } from "../store/useFriendsStore";

// const FriendsPage = () => {
//     const { friends, loading, addFriend, removeFriend } = useFriendsStore();
//     const [newFriend, setNewFriend] = useState("");

//     const handleAddFriend = () => {
//         if (newFriend) {
//             addFriend(newFriend);
//             setNewFriend("");
//         }
//     };

//     const handleRemoveFriend = (friend) => {
//         removeFriend(friend);
//     };

//     return (
//         <div className='min-h-screen bg-gray-50 flex flex-col'>
//             <Header />
//             <div className='flex-grow flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8'>
//                 <div className='sm:mx-auto sm:w-full sm:max-w-md'>
//                     <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Seus Amigos & Grupos</h2>
//                 </div>
//                 <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
//                     <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-200'>
//                         {/* Adicionar Novo Amigo */}
//                         <div className='flex space-x-2 mb-4'>
//                             <input
//                                 type='text'
//                                 placeholder='Add a new friend...'
//                                 value={newFriend}
//                                 onChange={(e) => setNewFriend(e.target.value)}
//                                 className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm'
//                             />
//                             <button
//                                 onClick={handleAddFriend}
//                                 className='bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md shadow-sm'
//                             >
//                                 Add
//                             </button>
//                         </div>

//                         {/* Lista de Amigos */}
//                         {loading ? (
//                             <div>Loading...</div>
//                         ) : (
//                             <ul className='space-y-4'>
//                                 {friends.map((friend, index) => (
//                                     <li key={index} className='flex justify-between items-center border-b pb-2'>
//                                         <span>{friend.name}</span>
//                                         <button
//                                             onClick={() => handleRemoveFriend(friend)}
//                                             className='text-red-600 hover:underline'
//                                         >
//                                             Remove
//                                         </button>
//                                     </li>
//                                 ))}
//                             </ul>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FriendsPage;
import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";

const FriendsPage = () => {
	const [friends, setFriends] = useState([
		{ id: 1, nome: "Maria Tereza", idade: 25, genero: "feminino", dieta: "vegetariana", foto: "https://res.cloudinary.com/ddtc9ytr7/image/upload/v1729817894/samples/woman-on-a-football-field.jpg" },
		{ id: 2, nome: "Ana Cristina", idade: 23, genero: "feminino", dieta: "onívora", foto: "https://res.cloudinary.com/ddtc9ytr7/image/upload/v1729817894/samples/upscale-face-1.jpg" },
		{ id: 3, nome: "Luana Pereira", idade: 29, genero: "feminino", dieta: "carnívora", foto: "https://res.cloudinary.com/ddtc9ytr7/image/upload/v1729817894/cld-sample.jpg" },
		{ id: 4, nome: "João Silva", idade: 25, genero: "masculino", dieta: "onívoro", foto: "https://res.cloudinary.com/ddtc9ytr7/image/upload/v1729817893/samples/man-portrait.jpg" },
		{ id: 5, nome: "Luiza Resende", idade: 23, genero: "feminino", dieta: "vegetariana", foto: "https://res.cloudinary.com/ddtc9ytr7/image/upload/v1729817893/samples/outdoor-woman.jpg" },
		{ id: 6, nome: "Manuela Garcia", idade: 29, genero: "feminino", dieta: "carnívora", foto: "https://res.cloudinary.com/ddtc9ytr7/image/upload/v1729817885/samples/bike.jpg" },
		{ id: 7, nome: "Geovana Morais", idade: 25, genero: "feminino", dieta: "onívora", foto: "https://res.cloudinary.com/ddtc9ytr7/image/upload/v1729817889/samples/two-ladies.jpg" },
		{ id: 8, nome: "Carlos Eduardo", idade: 23, genero: "masculino", dieta: "carnívoro", foto: "https://res.cloudinary.com/ddtc9ytr7/image/upload/v1729817885/samples/people/smiling-man.jpg" },
		{ id: 9, nome: "Lucas Henrique", idade: 29, genero: "masculino", dieta: "onívoro", foto: "https://res.cloudinary.com/ddtc9ytr7/image/upload/v1729817885/samples/people/kitchen-bar.jpg" },
		{ id: 10, nome: "Manoel Oliveira", idade: 25, genero: "masculino", dieta: "carnívoro", foto: "https://res.cloudinary.com/ddtc9ytr7/image/upload/v1729817893/samples/man-on-a-street.jpg" },
		{ id: 11, nome: "Pedro Moreira", idade: 23, genero: "masculino", dieta: "vegetariano", foto: "https://res.cloudinary.com/ddtc9ytr7/image/upload/v1729817893/samples/look-up.jpg" },
		{ id: 12, nome: "Cristiano Rodrigues", idade: 29, genero: "masculino", dieta: "onívoro", foto: "https://res.cloudinary.com/ddtc9ytr7/image/upload/v1729817892/samples/smile.jpg" },
	]);

	return (
		<div className="bg-gradient-to-br from-pink-100 to-purple-100
		 overflow-hidden
		'min-h-screen bg-gray-50 flex flex-col">
			<Header />

			<div className="flex-grow flex flex-col py-12 px-4 sm:px-6 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-md">
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
						Meus Amigos
					</h2>
				</div>

				<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{friends.map((friend) => (
						<Link
							to={`/friend/${friend.id}`}
							key={friend.id}
							
							className="card-body bg-gradient-to-b from-white to-[#f2d1d1] bg-white py-4 px-4 shadow sm:rounded-lg sm:px-6 border border-gray-200 text-center hover:bg-gray-100 transition duration-150 ease-in-out transform hover:scale-105"
						    >
								
							
							<img
								src={friend.foto}
								alt={`Foto de ${friend.nome}`}
								className="w-full h-40 object-cover mb-4 rounded-md"
							/>
							<h3 className="text-lg font-semibolxd text-gray-800">{friend.nome}</h3>
							<p className="text-sm text-gray-600">Idade: {friend.idade} anos</p>
							<p className="text-sm text-gray-500 capitalize">
								{friend.dieta}
							</p>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default FriendsPage;
