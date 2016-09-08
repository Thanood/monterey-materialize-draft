define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function App() {
    _classCallCheck(this, App);

    this.tiles = [{ title: 'App launcher', icon: 'http://icons.iconarchive.com/icons/bokehlicia/captiva/256/rocket-icon.png' }, { title: 'Chrome', icon: 'https://cdn0.iconfinder.com/data/icons/jfk/512/chrome-512.png' }, { title: 'File explorer', icon: 'http://www.sevenforums.com/geek/gars/images/4/7/types/thumb_Libraries-2.png' }, { title: 'cmd', icon: 'https://cdn0.iconfinder.com/data/icons/cosmo-multimedia/40/terminal-512.png' }];

    this.message = 'Hello World!';
  };
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.use.plugin('aurelia-materialize-bridge', function (b) {
      return b.useAll();
    });

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"materialize-css/css/materialize.css\"></require>\n  <require from=\"./styles.css\"></require>\n  <require from=\"./side-nav.html\"></require>\n  <md-colors md-primary-color=\"#70519E\" md-accent-color=\"#EE6085\"></md-colors>\n  <!-- <md-colors md-primary-color=\"#EE6085\" md-accent-color=\"#70519E\"></md-colors> -->\n  <header>\n    <side-nav></side-nav>\n  </header>\n  <main>\n    <h5 class=\"accent-text\">Monterey-Cli</h5>\n    <hr />\n    <md-card repeat.for=\"tile of tiles\" md-title.bind=\"tile.title\" class=\"tile-card\">\n      <div class=\"center\">\n        <img src.bind=\"tile.icon\" style=\"height: 64px;\" />\n      </div>\n    </md-card>\n  </main>\n</template>\n"; });
define('text!nav-bar.html', ['module'], function(module) { module.exports = "<template bindable=\"router\">\r\n  <md-navbar fixed=\"true\">\r\n    <a href=\"#\" class=\"brand-logo left\"><span class=\"flow-text\">${router.title}</span></a>\r\n    <ul class=\"right hide-on-med-and-down\">\r\n      <li md-waves repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\">\r\n        <a href.bind=\"row.href\">${row.title}</a>\r\n      </li>\r\n    </ul>\r\n  </md-navbar>\r\n</template>\r\n"; });
define('text!side-nav.html', ['module'], function(module) { module.exports = "<template bindable=\"router\">\r\n  <md-sidenav view-model.ref=\"sideNav\" md-fixed=\"true\">\n    <div>\n      <h4 class=\"primary-text center\">Monterey</h4>\n    </div>\n    <div class=\"center\">\n      <button md-button><i class=\"material-icons\">add</i></button>\n      <button md-button><i class=\"material-icons\">create</i></button>\n      <button md-button><i class=\"material-icons\">remove</i></button>\n    </div>\n    <div style=\"margin-top: 15px; padding: 0 12px;\">\n      <md-input md-label=\"search projects\"></md-input>\n      <md-collection>\n        <md-collection-item class=\"accent-text\">aurelia-materialize-bridge</md-collection-item>\n        <md-collection-item class=\"accent-text active\">Monterey-Cli</md-collection-item>\n        <md-collection-item class=\"accent-text\">v-grid</md-collection-item>\n        <md-collection-item class=\"accent-text\">Monterey</md-collection-item>\n      </md-collection>\n    </div>\n    <!-- <ul>\n      <li md-waves><a>About</a></li>\n      <li md-waves><a>Installation</a></li>\n      <li md-waves><a>Project Status</a></li>\n      <li md-waves><a>Help/Docs</a></li>\n    </ul> -->\n  </md-sidenav>\n</template>\r\n"; });
define('text!styles.css', ['module'], function(module) { module.exports = "header {\n  padding: 0 320px;\n}\n\nmain {\n  padding: 15px 20px 0 320px;\n}\n\n.tile-card {\n  display: inline-block;\n  margin-right: 15px;\n  width: 190px;\n}\n"; });
//# sourceMappingURL=app-bundle.js.map