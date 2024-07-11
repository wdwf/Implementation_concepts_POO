import db from "../Infra/database";

interface post {
  title: string;
  content: string;
}


export function getPosts() {
  return db.query('select * from blog.post ORDER BY id ASC;');
}

export function getPost(id: string) {
  return db.query('select * from blog.post where id = $1', [id]);
}

export function savePost(post: post) {
  return db.query('insert into blog.post (title, content) values ($1, $2) returning *', [post.title, post.content]);
}

export function updatePost(id: string, post: post) {
  return db.query('update blog.post set title = $1, content = $2 where id = $3) ', [post.title, post.content, id]);
}

export function deletePost(id: string) {
  return db.query('delete from blog.post where id = $1', [id]);
}
