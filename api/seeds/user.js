import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import dotenv from "dotenv";

dotenv.config();

const maleNames = ["Steakhouse", "Grill Master", "Meat Haven", "Carnivore's Delight", "Prime Cuts", "BBQ Bliss", "Rib Rack", "Beef Bistro", "Chophouse", "Meat Feast"];

const femaleNames = [
"Green Garden",
"Veggie Delight",
"Herbivore Haven",
"Plant Power",
"Veggie Bistro",
"Leafy Greens",
"Roots & Shoots",
"Garden Fresh",
"Veggie Feast",
"Plant-Based Paradise"
];

const genderPreferences = ["male", "female", "both"];

const bioDescriptors = [
	"Ambiente acolhedor",
	"Familiar",
	"Ambiente romântico",
	"Música ao vivo",
	"Assentos ao ar livre",
	"Pet-friendly",
	"Farm-to-table",
	"Opções veganas",
	"Opções sem glúten",
	"Coquetéis artesanais",
	"Extensa carta de vinhos",
	"Happy hour",
	"Brunch de fim de semana",
	"Lanches noturnos",
	"Menu sazonal",
	"Especiais do chef",
	"Ingredientes locais",
	"Vista para o mar",
	"Jantar no terraço",
	"Edifício histórico",
];

const generateBio = () => {
	const descriptors = bioDescriptors.sort(() => 0.5 - Math.random()).slice(0, 3);
	return descriptors.join(" | ");
};

const generateRandomUser = (gender, index) => {
	const names = gender === "male" ? maleNames : femaleNames;
	const name = names[index];
	const age = Math.floor(Math.random() * (45 - 21 + 1) + 21);
	return {
		name,
		email: `${name.toLowerCase()}${age}@example.com`,
		password: bcrypt.hashSync("123", 10),
		age,
		gender,
		genderPreference: genderPreferences[Math.floor(Math.random() * genderPreferences.length)],
		bio: generateBio(),
		image: `/${gender}/${index + 1}.jpg`,
	};
};

const seedUsers = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI);

		await User.deleteMany({});

		const maleUsers = maleNames.map((_, i) => generateRandomUser("male", i));
		const femaleUsers = femaleNames.map((_, i) => generateRandomUser("female", i));

		const allUsers = [...maleUsers, ...femaleUsers];

		await User.insertMany(allUsers);

		console.log("Database seeded successfully with users having concise bios");
	} catch (error) {
		console.error("Error seeding database:", error);
	} finally {
		mongoose.disconnect();
	}
};

seedUsers();
