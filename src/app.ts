import app from './api/v1/server';
const port = 3000;

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
