import DS from 'ember-data';

export default DS.Model.extend({
  starred: DS.attr('boolean'),
  from: DS.attr('string'),
  to: DS.attr('string'),
  subject: DS.attr('string'),
  message: DS.attr('string')
});
