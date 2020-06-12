import faker from 'faker'

var listBlog = [];

for (let index = 0; index < 10; index++) {
  let data = {
    id: Math.round(Math.random() * 99999),
    title: faker.lorem.sentence(10),
    abstract: faker.lorem.paragraph(5),
    fullName: faker.name.firstName() + ' ' + faker.name.lastName(),
    create_at: faker.date.past()
  }
  listBlog.push(data);
}
export default listBlog;

console.log('data = > ', listBlog);
