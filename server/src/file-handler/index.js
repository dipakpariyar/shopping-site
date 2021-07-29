const sharp = require('sharp');
// import path from 'path';
// import validateToken from '../../auth/validateToken';

function compressAndResize(body, fileName) {
  // console.log('param in file compressor', body, fileName);
  // const { token, content, type } = body;
  // if (content === 'profile' && type === 'profilePic') {
  // const user = await validateToken(token);
  // const inputFile = path.join(process.cwd(), 'build', 'public', 'assets', 'user', `${10000000 + parseInt(user.id, 10)}`, content, fileName);
  const thumbnailName = `thumbnail-${Date.now()}.jpeg`;
  // const outputFile = path.join(process.cwd(), 'build', 'public', 'assets', 'user', `${10000000 + parseInt(user.id, 10)}`, content, thumbnailName);
  sharp('test1.jpeg')
    .resize(320, 240).jpeg({ quality: 50 })
    .toFile(thumbnailName)
    .then((res) => {
      console.log('image compressed file', res);
    });
// }
}
compressAndResize();
