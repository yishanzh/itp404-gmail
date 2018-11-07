import { module, test } from 'qunit';
import { visit, currentURL, click, fillIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import window from 'ember-window-mock';


module('Acceptance | emails', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);


  test('visiting / displays starred and unstarred emails', async function(assert) {
    server.create('email', {starred: true});
    server.create('email', {starred: true});
    server.create('email', {starred: false});
    server.create('email', {starred: false});
    server.create('email', {starred: false});

    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('[data-test="starred-email"]').exists({ count:2});
    assert.dom('[data-test="unstarred-email"]').exists({ count:3});

  });

  test('visiting / viewing a single email and all of the attributes are rendered', async function(assert) {
    server.create('email', {
      subject: 'My Subject',
      from: 'Susan',
      to: 'Jasmine',
      message: 'hello'
    });

    await visit('/emails/1');

      assert.dom('[data-test="subject"]').hasText('Subject: My Subject');
      assert.dom('[data-test="from"]').hasText('From: Susan');
      assert.dom('[data-test="to"]').hasText('To: Jasmine');
      assert.dom('[data-test="msg"]').hasText('Message: hello');

  });




  test('deleting an email', async function(assert) {
    server.createList('email', 2);
    window.confirm = () => true; //assuming it is true so we can verify other things

    await visit('/emails/1');
    await click('[data-test="delete-email"]');
    assert.dom('[data-test="unstarred-email"]').exists({ count: 1 });
  });

  test('creating an email', async function(assert) {
    assert.dom('[data-test="unstarred-email"]').exists({ count: 0 });
    await visit('/emails/new');
    //input fillIn first
    await fillIn('#subject', 'new email subject');
    await fillIn('#from', 'Susan');
    await fillIn('#to', 'Jasmine');
    await fillIn('#msg', 'Hello!');

    //import click helper first
    await click('[data-test="submit"]');

    assert.equal(currentURL(), '/')
    assert.dom('[data-test="unstarred-email"]').exists({ count: 1 });

  });

});
