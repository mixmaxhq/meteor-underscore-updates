/**
 * This file extends Meteor's Underscore with selected methods from the latest version of Underscore,
 * copied from its source.
 */

// Internal function that returns an efficient (for current engines) version
// of the passed-in callback, to be repeatedly applied in other Underscore
// functions.
var optimizeCb = function(func, context, argCount) {
  if (context === void 0) return func;
  switch (argCount == null ? 3 : argCount) {
    case 1: return function(value) {
      return func.call(context, value);
    };
    case 2: return function(value, other) {
      return func.call(context, value, other);
    };
    case 3: return function(value, index, collection) {
      return func.call(context, value, index, collection);
    };
    case 4: return function(accumulator, value, index, collection) {
      return func.call(context, accumulator, value, index, collection);
    };
  }
  return function() {
    return func.apply(context, arguments);
  };
};

// A mostly-internal function to generate callbacks that can be applied
// to each element in a collection, returning the desired result — either
// identity, an arbitrary callback, a property matcher, or a property accessor.
var cb = function(value, context, argCount) {
  if (value == null) return _.identity;
  if (_.isFunction(value)) return optimizeCb(value, context, argCount);
  if (_.isObject(value)) return _.matcher(value);
  return _.property(value);
};

// Returns the results of applying the iteratee to each element of the object
  // In contrast to _.map it returns an object
_.mapObject = function(obj, iteratee, context) {
  iteratee = cb(iteratee, context);
  var keys = _.keys(obj),
    length = keys.length,
    results = {};
  for (var index = 0; index < length; index++) {
    var currentKey = keys[index];
    results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
  }
  return results;
};
