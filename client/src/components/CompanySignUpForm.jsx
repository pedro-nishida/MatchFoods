import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import InputMask from 'react-input-mask';


const SignUpForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [bio, setBio] = useState("");
	const [cnpj, setCnpj] = useState("");
	const [category, setCategory] = useState("");
   	const [locate, setLocate] = useState("");

	const { companysignup, loading } = useAuthStore();
	const handleChange = (e,category) => {
        const selectedCategory = e.target.value; // Obtendo o valor selecionado
        setCategory(selectedCategory); // Atualizando o estado
    };


	return (
		<form
			className='space-y-6'
			onSubmit={(e) => {
				e.preventDefault();
				companysignup({ name, email, password, bio, cnpj, category, locate });
			}}
		>
			{/* NAME */}
			<div>
				<label htmlFor='name' className='block text-sm font-medium text-gray-700'>
					Nome
				</label>
				<div className='mt-1'>
					<input
						id='name'
						name='name'
						type='text'
						required
						value={name}
						onChange={(e) => setName(e.target.value)}
						className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#cc4747] focus:border-[#cc4747] sm:text-sm'
					/>
				</div>
			</div>

			{/* EMAIL */}
			<div>
				<label htmlFor='email' className='block text-sm font-medium text-gray-700'>
					Email
				</label>
				<div className='mt-1'>
					<input
						id='email'
						name='email'
						type='email'
						autoComplete='email'
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#cc4747] focus:border-[#cc4747] sm:text-sm'
					/>
				</div>
			</div>

			{/* PASSWORD */}
			<div>
				<label htmlFor='password' className='block text-sm font-medium text-gray-700'>
					Senha
				</label>
				<div className='mt-1'>
					<input
						id='password'
						name='password'
						type='password'
						autoComplete='new-password'
						required
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#cc4747] focus:border-[#cc4747] sm:text-sm'
					/>
				</div>
			</div>

      {/* BIO */}
			<div>
				<label htmlFor='bio' className='block text-sm font-medium text-gray-700'>
          Bio
				</label>
				<div className='mt-1'>
					<input
            id='bio'
            name='bio'
            type='text'
            value={bio}
            onChange={(e) => setBio(e.target.value)}
						className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#cc4747] focus:border-[#cc4747] sm:text-sm'
					/>
				</div>
			</div>

      {/* CNPJ */}
			<div>
        <label className='block text-sm font-medium text-gray-700'>CNPJ</label>
          <div className='mt-2 flex gap-2'>
            <div className='flex items-center'>
              <InputMask
                id='cnpj'
                name='cnpj'
                mask="99.999.999/9999-99"
                value={cnpj}
                onChange={(e) => setCnpj(e.target.value)}
                className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#cc4747] focus:border-[#cc4747] sm:text-sm'
                placeholder='00.000.000/0000-00'
              />
					  </div>
				  </div>
      </div>

      {/* CATEGORY */}
      <div>
          <label className='block text-sm font-medium text-gray-700'>Tipo de Restaurante</label>
          <div className='mt-2 space-y-2'>
              <select
			  id="categoryy"
                  name='category'
                  className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-[#cc4747] focus:border-[#cc4747]'
				  onChange={handleChange} // Chamando a função ao mudar a seleção
				  >
                  <option value="Brasileira">Brasileira</option>
                  <option value="Italiana">Italiana</option>
                  <option value="Saudável">Saudável</option>
                  <option value="Lanches">Lanches</option>
                  <option value="Chinesa">Chinesa</option>
                  <option value="Carnes">Carnes</option>
                  <option value="Árabe">Árabe</option>
                  <option value="Contemporânea">Contemporânea</option>
                  <option value="Frutos do Mar">Frutos do Mar</option>
                  <option value="Vegetariana">Vegetariana</option>
                  <option value="Japonesa">Japonesa</option>
                  <option value="Hot Dog">Hot Dog</option>
                  <option value="Sorvetes">Sorvetes</option>
                  <option value="Açaí">Açaí</option>
                  <option value="Doces e Bolos">Doces e Bolos</option>
                  <option value="Salgados">Salgados</option>
                  <option value="Mexicana">Mexicana</option>
                  <option value="Pastel">Pastel</option>
              </select>
          </div>
      </div>

      {/* LOCATE */}
      <div>
          <label htmlFor='locate' className='block text-sm font-medium text-gray-700'>
              Location
          </label>
          <div className='mt-1'>
              <input
                  id='locate'
                  name='locate'
                  type='text'
                  required
                  value={locate}
                  onChange={(e) => setLocate(e.target.value)}
                  className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#cc4747] focus:border-[#cc4747] sm:text-sm'
              />
          </div>
      </div>

			<div>
				<button
					type='submit'
					className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
						loading
							? "bg-[#d97575] cursor-not-allowed"
							: "bg-[#bf1919] hover:bg-[#a73737] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#cc4747]"
					}`}
					disabled={loading}
				>
					{loading ? "Signing up..." : "Sign up"}
				</button>
			</div>
		</form>
	);
};
export default SignUpForm;
