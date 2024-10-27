import { useRef, useState } from "react";
import { Header } from "./Header";
import { useAuthStore } from "../store/useAuthStore";
import { useUserStore } from "../store/useUserStore";

const UserSettings = () => {
	const { authUser } = useAuthStore();
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const fileInputRef = useRef(null);

	const { loading, updateProfile } = useUserStore();

	const handleSubmit = (e) => {
		e.preventDefault();
		updateProfile({ email, currentPassword, newPassword });
	};

	return (
		<div className='min-h-screen bg-gray-50 flex flex-col'>
			<Header />

			<div className='flex-grow flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8'>
				<div className='sm:mx-auto sm:w-full sm:max-w-md'>
					<h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Configuração Privado</h2>
				</div>

				<div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
					<div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-200'>
						<form onSubmit={handleSubmit} className='space-y-6'>
      {/* New fields for email and password */}
      <div>
        <label className='block text-sm font-medium text-gray-700'>Email</label>
        <input
          type='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm'
        />
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-700'>Current Password</label>
        <input
          type='password'
          name='currentPassword'
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm'
        />
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-700'>New Password</label>
        <input
          type='password'
          name='newPassword'
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm'
        />
      </div>

      <div className='mt-4'>
        <button
          type='submit'
          className='inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500'
        >
          Save Changes
        </button>
      </div>
    </form>
  </div>
</div>
</div>
</div>
);
};
export default UserSettings;