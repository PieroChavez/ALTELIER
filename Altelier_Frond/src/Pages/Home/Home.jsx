import { Box, useMediaQuery, Typography } from "@mui/material";
// import { useSelector } from "react-redux"; // 🔴 No se usará porque no hay conexión al backend
// import Navbar from "scenes/navbar"; // 🔴 No se usará en esta versión visual
// import UserWidget from "scenes/widgets/UserWidget"; // 🔴 Reemplazado por componente simulado
// import MyPostWidget from "scenes/widgets/MyPostWidget"; // 🔴 Reemplazado por input simulado
// import PostsWidget from "scenes/widgets/PostsWidget"; // 🔴 Reemplazado por publicaciones falsas
// import AdvertWidget from "scenes/widgets/AdvertWidget"; // 🔴 Reemplazado
// import FriendListWidget from "scenes/widgets/FriendListWidget"; // 🔴 Reemplazado

const Home = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");



  const nombreUsuario = localStorage.getItem("nombre") || "Nombre no disponible";
  const rolUsuario = localStorage.getItem("rol") || "Rol no disponible";

  // Simulamos datos de usuario
  const user = {
    _id: "abc123",
    picturePath: "https://i.pravatar.cc/150?img=5",
    name: nombreUsuario,
  rol: rolUsuario,
  };

  // Simulamos publicaciones
  const posts = [
    {
      id: 1,
      user: "Carlos Ríos",
      content: "Hoy preparé un Chemex increíble 🤎 #coffeeLovers",
    },
    {
      id: 2,
      user: "Valeria Pérez",
      content: "El arte latte es una pasión 🎨☕️",
    },
  ];

  return (
    <Box>
      {/* <Navbar /> 🔴 Se comenta para vista visual únicamente */}

      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        {/* 🟢 Columna izquierda: UserWidget simulado */}
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <Box
            p="1rem"
            bgcolor="#f9fafb"
            borderRadius="1rem"
            boxShadow="0 0 10px rgba(0,0,0,0.1)"
            textAlign="center"
          >
            <img
              src={user.picturePath}
              alt="Usuario"
              style={{ borderRadius: "50%", width: "80px", marginBottom: "1rem" }}
            />
            <Typography variant="h6">{user.name}</Typography>
            <Typography variant="body2" color="textSecondary">
              Barista Creativa
            </Typography>
          </Box>
        </Box>

        {/* 🟢 Columna central: input para nueva publicación + posts simulados */}
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <Box
            p="1rem"
            bgcolor="#ffffff"
            borderRadius="1rem"
            mb="1rem"
            boxShadow="0 0 10px rgba(0,0,0,0.1)"
          >
            <Typography variant="h6">¿Qué estás pensando?</Typography>
            <input
              type="text"
              placeholder="Comparte algo sobre café..."
              style={{
                marginTop: "0.5rem",
                width: "100%",
                padding: "0.75rem",
                borderRadius: "0.5rem",
                border: "1px solid #ccc",
              }}
            />
          </Box>

          {/* Publicaciones simuladas */}
          {posts.map((post) => (
            <Box
              key={post.id}
              p="1rem"
              bgcolor="#f0f0f0"
              borderRadius="1rem"
              mb="1rem"
              boxShadow="0 0 5px rgba(0,0,0,0.05)"
            >
              <Typography variant="subtitle1" fontWeight="bold">
                {post.user}
              </Typography>
              <Typography variant="body1">{post.content}</Typography>
            </Box>
          ))}
        </Box>

        {/* 🟢 Columna derecha: Anuncios y amigos simulados (solo en pantallas grandes) */}
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            <Box
              p="1rem"
              bgcolor="#fff3cd"
              borderRadius="1rem"
              boxShadow="0 0 10px rgba(0,0,0,0.1)"
              mb="2rem"
            >
              <Typography variant="h6">Anuncio</Typography>
              <Typography variant="body2">
                ¡Nuevo curso de barismo nivel intermedio! ✨
              </Typography>
            </Box>

            <Box
              p="1rem"
              bgcolor="#d1fae5"
              borderRadius="1rem"
              boxShadow="0 0 10px rgba(0,0,0,0.1)"
            >
              <Typography variant="h6">Amigos</Typography>
              <Typography variant="body2">Lucía Vargas</Typography>
              <Typography variant="body2">Diego Rojas</Typography>
              <Typography variant="body2">Laura Jiménez</Typography>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Home;
