import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const port = 3000;
app.use(cors());

app.get('/get-vk-posts', async (req, res) => {
    try {
        const accessToken = '220e9fee220e9fee220e9feee1211b551f2220e220e9fee47184d64237af57ea6d50fe9';
        const groupId = 222565930;
        const apiUrl = `https://api.vk.com/method/wall.get?owner_id=-${groupId}&count=10&access_token=${accessToken}&v=5.131`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
