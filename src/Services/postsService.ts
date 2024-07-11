import * as postsData from '../Data/postData';

interface post {
  title: string;
  content: string;
}

export function getPosts() {
  return postsData.getPosts()
}


export function getPost(id: string) {
  return postsData.getPost(id)
}

export function savePost(post: post) {
  return postsData.savePost(post)
}

export function updatePost(id: string, post: any) {
  return postsData.updatePost(id, post)
}

export function deletePost(id: string) {
  return postsData.deletePost(id);
}