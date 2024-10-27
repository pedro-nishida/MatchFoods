import express from "express";

const router = express.Router();

const biografia = "Sou apaixonada por gastronomia. Sou vegetariana e adoro pratos criativos, como massas artesanais e saladas frescas. Valorizo restaurantes que usam ingredientes orgânicos e locais. Gosto de ambientes aconchegantes e adoro experimentar novos sabores, especialmente menus degustação.";
const biografia_man = "Gosto de explorar a culinária local. Sou fã de churrasco, mas também aprecio pratos saudáveis e leves. Gosto de ambientes descontraídos, onde posso relaxar e curtir boas conversas enquanto experimento novos sabores e cervejas artesanais."
// Simulando dados de amigos
const friends = [
  { id: 1, nome: "Maria Tereza", idade: 25, genero: "feminino",bio:biografia, dieta: "vegetariana", foto: "https://res.cloudinary.com/ddtc9ytr7/image/upload/v1729817894/samples/woman-on-a-football-field.jpg" },
  { id: 2, nome: "Ana Cristina", idade: 23, genero: "feminino",bio:biografia, dieta: "onívora", foto: "https://res.cloudinary.com/ddtc9ytr7/image/upload/v1729817894/samples/upscale-face-1.jpg" },
  { id: 3, nome: "Luana Pereira", idade: 29, genero: "feminino",bio:biografia, dieta: "carnívora", foto: "https://res.cloudinary.com/ddtc9ytr7/image/upload/v1729817894/cld-sample.jpg" },
  { id: 4, nome: "João Silva", idade: 25, genero: "masculino",bio:biografia_man, dieta: "onívoro", foto: "https://res.cloudinary.com/ddtc9ytr7/image/upload/v1729817893/samples/man-portrait.jpg" },
  { id: 5, nome: "Luiza Resende", idade: 23, genero: "feminino",bio:biografia, dieta: "vegetariana", foto: "https://res.cloudinary.com/ddtc9ytr7/image/upload/v1729817893/samples/outdoor-woman.jpg" },
  { id: 6, nome: "Manuela Garcia", idade: 29, genero: "feminino",bio:biografia, dieta: "carnívora", foto: "https://res.cloudinary.com/ddtc9ytr7/image/upload/v1729817885/samples/bike.jpg" },
  { id: 7, nome: "Geovana Morais", idade: 25, genero: "feminino",bio:biografia, dieta: "onívora", foto: "https://res.cloudinary.com/ddtc9ytr7/image/upload/v1729817889/samples/two-ladies.jpg" },
  { id: 8, nome: "Carlos Eduardo", idade: 23, genero: "masculino",bio:biografia_man, dieta: "carnívoro", foto: "https://res.cloudinary.com/ddtc9ytr7/image/upload/v1729817885/samples/people/smiling-man.jpg" },
  { id: 9, nome: "Lucas Henrique", idade: 29, genero: "masculino",bio:biografia_man, dieta: "onívoro", foto: "https://res.cloudinary.com/ddtc9ytr7/image/upload/v1729817885/samples/people/kitchen-bar.jpg" },
  { id: 10, nome: "Manoel Oliveira", idade: 25, genero: "masculino",bio:biografia_man, dieta: "carnívoro", foto: "https://res.cloudinary.com/ddtc9ytr7/image/upload/v1729817893/samples/man-on-a-street.jpg" },
  { id: 11, nome: "Pedro Moreira", idade: 23, genero: "masculino",bio:biografia_man, dieta: "vegetariano", foto: "https://res.cloudinary.com/ddtc9ytr7/image/upload/v1729817893/samples/look-up.jpg" },
  { id: 12, nome: "Cristiano Rodrigues", idade: 29, genero: "masculino",bio:biografia_man, dieta: "onívoro", foto: "https://res.cloudinary.com/ddtc9ytr7/image/upload/v1729817892/samples/smile.jpg" },
	
];

// Rota para pegar um amigo por ID
router.get("/:id", (req, res) => {
  const friendId = parseInt(req.params.id);
  const friend = friends.find(f => f.id === friendId);

  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({ message: "Amigo não encontrado" });
  }
});

export default router;
