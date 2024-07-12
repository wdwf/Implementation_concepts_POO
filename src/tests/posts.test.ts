import axios from 'axios';

import * as crypto from 'crypto';
import { savePost, deletePost, getPost, getPosts } from '../Services/postsService';
import { ClearData } from '../Data/postData';

const generate = function () {
  return crypto.randomBytes(20).toString('hex');
}

const request = function (url: string, method: string, data?: any) {
  return axios({ url, method, data, validateStatus: () => true })
}

describe("Methods for work with posts", function () {
  beforeAll(() => {
    ClearData()
  })

  test('Should get posts', async function () {
    // given - dado que...
    const post1 = await savePost({ title: generate(), content: generate() });
    const post2 = await savePost({ title: generate(), content: generate() });
    const post3 = await savePost({ title: generate(), content: generate() });

    // when - quando acontecer
    const response = await request('http://localhost:3333/posts', 'get');

    expect(response.status).toBe(200);

    // then - então
    const posts = response.data;
    expect(posts).toHaveLength(3);
    await deletePost(post1.rows[0].id);
    await deletePost(post2.rows[0].id);
    await deletePost(post3.rows[0].id);
  })

  test('Should save a post', async function () {
    const data = { title: generate(), content: generate() };
    const response = await request('http://localhost:3333/posts', 'post', data);

    expect(response.status).toBe(201);

    const posts = response.data;
    expect(posts.rows[0].title).toBe(data.title);
    expect(posts.rows[0].content).toBe(data.content);
    await deletePost(posts.rows[0].id);
  })

  test('Should not save a post', async function () {
    //check not duplicate post
    const data = { title: generate(), content: generate() };
    const response1 = await request('http://localhost:3333/posts', 'post', data);
    const response2 = await request('http://localhost:3333/posts', 'post', data);

    expect(response2.status).toBe(409);

    const post = response1.data;

    await deletePost(post.rows[0].id)
  });

  test('Should update a post', async function () {
    const post = await savePost({ title: generate(), content: generate() });
    post.rows[0].title = generate();
    post.rows[0].content = generate();

    const response = await request(`http://localhost:3333/posts/${post.rows[0].id}`, 'put', post);

    expect(response.status).toBe(204);

    const updatePost = await getPost(post.rows[0].id);
    expect(updatePost.rows[0].title).toBe(post.rows[0].title);
    expect(updatePost.rows[0].content).toBe(post.rows[0].content);
    await deletePost(post.rows[0].id);
  })

  test('Should not update a post', async function () {
    const post = {
      id: 1
    }
    const response = await request(`http://localhost:3333/posts/${post.id}`, 'put', post);
    expect(response.status).toBe(404);
  });

  test('Should delete a posts', async function () {
    const post = await savePost({ title: generate(), content: generate() });
    const response = await request(`http://localhost:3333/post/${post.rows[0].id}`, 'delete');

    expect(response.status).toBe(204);

    const posts = await getPosts();
    expect(posts.rows).toHaveLength(0);
    await deletePost(post.rows[0].id);
  })
})