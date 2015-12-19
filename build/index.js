'use strict';

var getPropFromSource = function getPropFromSource(html, prop) {

  if (typeof html !== 'string') {

    return '';
  }

  var regex = new RegExp('<img.*?' + prop + '="(.*?)"|<img.*?' + prop + '=\'(.*?)\'/');
  var matches = html.match(regex);

  if (Array.isArray(matches) === false || matches.length < 2) {

    return '';
  }

  return matches[1];
};

module.exports = {
  getSource: function getSource(html) {

    return getPropFromSource(html, 'src');
  },
  getAltText: function getAltText(html) {

    return getPropFromSource(html, 'alt');
  },
  getWidth: function getWidth(html) {

    return getPropFromSource(html, 'width');
  },
  getHeight: function getHeight(html) {

    return getPropFromSource(html, 'height');
  }
};
