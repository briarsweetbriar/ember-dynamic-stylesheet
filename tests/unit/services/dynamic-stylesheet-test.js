import { moduleFor, test } from 'ember-qunit';

moduleFor('service:dynamic-stylesheet', 'Unit | Service | dynamic stylesheet', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

test('on init, it creates a new stylesheet and appends it to the head', function(assert) {
  const numberOfStyles = document.styleSheets.length;

  this.subject();

  assert.equal(document.styleSheets.length, numberOfStyles + 1, 'stylesheet was added');
});

test('`insertRule` inserts the provided rule into the dynamic stylesheet', function(assert) {
  const service = this.subject();
  const rule = '.foo { text-align: center; }';

  service.insertRule(rule);

  const numberOfStyles = document.styleSheets.length;
  const actual = document.styleSheets[numberOfStyles - 1].cssRules[0].cssText;

  assert.equal(actual, rule, 'rule was added');
});

test('`insertRule` inserts the provided rule into the dynamic stylesheet', function(assert) {
  const service = this.subject();
  const rule = '.foo { text-align: center; }';

  service.insertRule(rule);
  service.deleteRule(rule);

  const numberOfStyles = document.styleSheets.length;

  assert.equal(document.styleSheets[numberOfStyles - 1].cssRules.length, 0, 'rule was removed');
});
