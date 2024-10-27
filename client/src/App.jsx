import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";
import ChatPage from "./pages/ChatPage";
import ConfigPage from "./pages/ConfigPage";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Header } from "./components/Header";
import LoginForm from "./components/LoginForm";
import MessageInput from "./components/MessageInput";
import { Sidebar } from "lucide-react";
import SignUpForm from "./components/SignUpForm";
import SwipeArea from "./components/SwipeArea";
import UserSettings from "./components/UserSettings";

function App() {
	const { checkAuth, authUser, checkingAuth } = useAuthStore();

	useEffect(() => {
		checkAuth();
	}, [checkAuth]);

	if (checkingAuth) return null;

	return (
		<div className='absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]'>

			{/* <Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/auth' element={<AuthPage />} />
				<Route path='/profile' element={<ProfilePage />} />
				<Route path='/chat/:id' element={<ChatPage />} />
				<Route path='/configuracoes' element={<ConfigPage />} />
			</Routes> */}

			<Routes>
				<Route path='/' element={authUser ? <HomePage /> : <Navigate to={"/auth"} />} />
				<Route path='/auth' element={!authUser ? <AuthPage /> : <Navigate to={"/"} />} />
				<Route path='/profile' element={authUser ? <ProfilePage /> : <Navigate to={"/auth"} />} />
				<Route path='/chat/:id' element={authUser ? <ChatPage /> : <Navigate to={"/auth"} />} />
				<Route path='/configuracoes' element={authUser ? <ConfigPage /> : <Navigate to={"/auth"} />} />
				<Route path='/userSettings' element={authUser ? <UserSettings /> : <Navigate to={"/auth"} />} />
			</Routes>

			<Toaster />
		</div>
	);
}

export default App;
