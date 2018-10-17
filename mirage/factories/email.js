import { Factory,faker } from 'ember-cli-mirage';

export default Factory.extend({
  id() {
    return faker.random.number();

  },
  from() {
    return faker.name.findName();
  },
  to() {
    return faker.name.findName();
  },
  subject(){

    return faker.lorem.words();

  },
  message(){
    return faker.lorem.paragraphs();
  }
});
