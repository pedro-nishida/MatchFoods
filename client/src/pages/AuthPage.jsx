import { useState } from "react";

import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import CompanyLoginForm from "../components/CompanyLogInForm";
import CompanySignUpForm from "../components/CompanySignUpForm";
import { UtensilsCrossed } from "lucide-react";

const AuthPage = () => {
	const [isLogin, setIsLogin] = useState(true);
	const [isUser, setIsUser] = useState(true);

	return (
		<div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-red-500 to-[#cc4747] p-4'>
			<div className='w-full max-w-md'>
				<div className='flex flex-col items-center space-y-4'>
					<UtensilsCrossed className='w-8 h-8 text-white' />
					<span className='text-2xl font-bold text-white hidden sm:inline'>MatchFoods</span>
				</div>

				<h2 className='text-center text-3xl font-extrabold text-white mb-8'>
					{isLogin ? (isUser ? "Login Usuário" : "Login Empresa") : (isUser ? "Crie sua conta" : "Cadastro Empresa")}
				</h2>

				<div className='bg-white shadow-xl rounded-lg p-8'>
					<div className='mt-4 text-center'>
						<button
							className={`w-full flex justify-center py-2 px-4 border border-transparent 
								rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500`}
							onClick={() => setIsUser(!isUser)}
						>
							{isUser ? "Empresa? Clique Aqui" : "Usuário? Clique Aqui"}
						</button>
						<br />
					</div>

					{isLogin ? (isUser ? <LoginForm /> : <CompanyLoginForm />) : (isUser ? <SignUpForm /> : <CompanySignUpForm />)}

					<div className='mt-8 text-center'>
						<p className='text-sm text-gray-600'>
							{isLogin ? (isUser ? "Novo por aqui?" : "Novo por aqui?") : (isUser ? "Já tem conta?" : "Já tem conta?")}
						</p>
						<button
							className='text-blue-500 hover:underline'
							onClick={() => setIsLogin(!isLogin)}
						>
							{isLogin ? "Crie sua conta" : "Faça login"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AuthPage;