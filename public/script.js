/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
  'use strict';

  var supportsIntegrity = 'integrity' in document.createElement('script');
  var badge = document.getElementById('sri-badge');

  if (!badge) {
    return;
  }

  function insertBadge() {
    var successHtml = '<div data-sri-status="pass">' +
                       '<img src="/badge/pass.svg" alt="Pass Badge">' +
                       '<p>Your browser supports SRI</p>' +
                     '</div>';
    var failHtml = '<div data-sri-status="fail">' +
                     '<img src="/badge/fail.svg" alt="Fail Badge">' +
                     '<p>Your browser does not support SRI</p>' +
                   '</div>';

    badge.classList.add(supportsIntegrity ? 'success' : 'fail');
    badge.innerHTML = supportsIntegrity ? successHtml : failHtml;
  }

  window.addEventListener('load', insertBadge, false);

}());
