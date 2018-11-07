import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | star-button', function(hooks) {
  setupRenderingTest(hooks);
  test('show filled stars if starred is true', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('starred', true);
    await render(hbs`
      <StarButton data-test="star-button" @starred={{starred}}  />
      `);

      assert.dom('[data-test="star-button"]').hasText('★');
  //  assert.equal(this.element.textContent.trim(), '');
  });

  test('show empty stars if starred is false', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('starred', false);
    await render(hbs`
      <StarButton data-test="star-button" @starred={{starred}}  />
      `);

      assert.dom('[data-test="star-button"]').hasText('☆');
  //  assert.equal(this.element.textContent.trim(), '');
  });



});
