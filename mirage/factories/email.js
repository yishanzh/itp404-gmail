import { Factory,faker } from 'ember-cli-mirage';

export default Factory.extend({
  id(i) {
    return i + 1;

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
  },
  starred(){
    return false;
  }
});
