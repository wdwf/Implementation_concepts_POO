import db from "../Infra/database";

export function getPosts() {
  return db.query('select * from blog.post');
}