import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | truncate-text', function(hooks) {
  setupRenderingTest(hooks);


  test('truncate the text and make sure it is within 148 characters', async function(assert) {
    this.set('params', 'zdgsgfxjhgckgkjfkjhvkjhvkjhkhkjhasdflasdhlakjsdhvkhjchxxxjhgcgczdgsgfxjhgckgkjfkjhvkjhvkjhkhkjhasdflasdhlakjsdhvkhjchxxxjhgcgczdgsgfxjhgckgkjfkjhvkjhvkjhkhkjhasdflasdhlakjsdhvkhjchxxxjhgcgc');

    await render(hbs`{{truncate-text params}}`);

    assert.equal(this.element.textContent.trim(), 'zdgsgfxjhgckgkjfkjhvkjhvkjhkhkjhasdflasdhlakjsdhvkhjchxxxjhgcgczdgsgfxjhgckgkjfkjhvkjhvkjhkhkjhasdflasdhlakjsdhvkhjchxxxjhgcgczdgsgfxjhgckgkjfkjhvkj' + '...');


  });

  test('do not truncate if the text has less than 149 characters', async function(assert) {
    this.set('params', 'abcde');

    await render(hbs`{{truncate-text params}}`);

    assert.equal(this.element.textContent.trim(), 'abcde');
  });



  // Replace this with your real tests.
  // test('it renders', async function(assert) {
  //   this.set('inputValue', '1234');
  //
  //   await render(hbs`{{truncate-text inputValue}}`);
  //
  //   assert.equal(this.element.textContent.trim(), '1234');
  // });
});
