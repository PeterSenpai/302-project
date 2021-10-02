import app from './app.js';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`========= Backend: I am running! =========`);
  console.log(`Server is up and running on PORT: ${PORT}`);
});
