const db = require('../db');

class PostController {
    async createPost(req, res) {
        const { title, content, user_id } = req.body;
        const newPost = await db.query('INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *', [title, content, user_id])
        res.json(newPost.rows[0]);
    }

    async getPostByUser(req, res) {
        const id = req.query.id;
        const posts = await db.query('SELECT * FROM post WHERE user_id = $1', [id]);
        res.json(posts.rows[0]);
    } //http://localhost:8080/api/post?id=1


    async deletePost(req, res) {
        const id = req.params.id;
        const post = await db.query('DELETE FROM post WHERE id = $1', [id]);
        res.json(post.rows[0]);
    }
}

module.exports = new PostController();