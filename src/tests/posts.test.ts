import axios from 'axios';

test('Should get posts', async function () {
  const response = await axios({
    url: 'http://localhost:3333/posts',
    method: 'get'
  })
  const posts = response.data;

  expect(posts).toHaveLength(1);
})