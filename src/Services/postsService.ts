import * as postsData from '../Data/postData';

interface post {
  title: string;
  content: string;
}

export function getPosts() {
  return postsData.getPosts()
}


export async function getPost(id: string) {
  const post = await postsData.getPost(id);
  if (!post.rowCount) throw new Error('Post not found');
  return post;
}

export async function savePost(post: post) {
  const existingPost = await postsData.getPostByTitle(post.title);
  if (existingPost.rowCount) throw new Error('Post already exists');
  return postsData.savePost(post);
}

export async function updatePost(id: string, post: any) {
  await getPost(id);
  return postsData.updatePost(id, post)
}

export async function deletePost(id: string) {
  await getPost(id);
  return postsData.deletePost(id);
}