[![npm version](https://badge.fury.io/js/ember-dynamic-stylesheet.svg)](https://badge.fury.io/js/ember-dynamic-stylesheet)
[![Build Status](https://travis-ci.org/null-null-null/ember-dynamic-stylesheet.svg?branch=master)](https://travis-ci.org/null-null-null/ember-dynamic-stylesheet)

# ember-dynamic-stylesheet

Dynamically alter an Ember.js stylesheet. Let's you:

* Add and remove classes
* Manage dynamic keyframes

## Installation

`ember install ember-dynamic-stylesheet`

## Usage

First, inject `ember-dynamic-stylesheet`:

```js
export default Ember.Component.extend({
  dynamicStylesheet: Ember.inject.service()
});
```

Then use `insertRule` to insert rules:

```js
this.get('dynamicStylesheet').insertRule('.foo { color: red; }');
```

And `deleteRule` to delete them:

```js
this.get('dynamicStylesheet').deleteRule('.foo { color: red; }');
```
