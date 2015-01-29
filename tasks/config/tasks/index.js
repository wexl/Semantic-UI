var
  config = require('./config')
;

module.exports = {

  title      : 'Semantic UI',
  repository : 'https://github.com/Semantic-Org/Semantic-UI',
  url        : 'http://www.semantic-ui.com/',

  banner: ''
    + ' /*' + '\n'
    + ' * # <%= title %> - <%= version %>' + '\n'
    + ' * <%= repository %>' + '\n'
    + ' * <%= url %>' + '\n'
    + ' *' + '\n'
    + ' * Copyright 2014 Contributors' + '\n'
    + ' * Released under the MIT license' + '\n'
    + ' * http://opensource.org/licenses/MIT' + '\n'
    + ' *' + '\n'
    + ' */' + '\n',

  log: {
    created: function(file) {
      return 'Created: ' + file;
    },
    modified: function(file) {
      return 'Modified: ' + file;
    }
  },

  regExp: {

    comments: {

      // remove all comments from config files (.variable)
      variables : {
        in  : /\/\*[\s\S]+\/\* End Config \*\//m,
        out : '',
      },

      // adds uniform spacing around comments
      large: {
        in  : /(\/\*\*\*\*[\s\S]+?\*\/)/mg,
        out : '\n\n$1\n'
      },
      small: {
        in  : /(\/\*---[\s\S]+?\*\/)/mg,
        out : '\n$1\n'
      },
      tiny: {
        in  : /(\/\* [\s\S]+? \*\/)/mg,
        out : '\n$1'
      }
    }
  },

  settings: {

    /* Remove Files in Clean */
    del: {
      silent : true
    },

    /* Comment Banners */
    header: {
      title      : config.title,
      version    : config.version,
      repository : config.repository,
      url        : config.url
    },

    /* Minified CSS Settings */
    minify: {
      processImport       : false,
      keepSpecialComments : 0
    },

    /* What Browsers to Prefix */
    prefix: {
      browsers: [
        'last 2 version',
        '> 1%',
        'opera 12.1',
        'safari 6',
        'ie 9',
        'bb 10',
        'android 4'
      ]
    },

    /* File Renames */
    rename: {
      json      : { extname : '.json' },
      minJS     : { extname : '.min.js' },
      minCSS    : { extname : '.min.css' },
      rtlCSS    : { extname : '.rtl.css' },
      rtlMinCSS : { extname : '.rtl.min.css' }
    },

    /* Sourcemaps */
    sourcemap: {
      includeContent : true,
      sourceRoot     : '/src'
    },

    /* Minified JS Settings */
    uglify: {
      mangle : true
    },

    /* Copy Folder Recursively */
    wrench: {
      recursive: {
        forceDelete       : true,
        excludeHiddenUnix : true,
        preserveFiles     : true
      }
    }
  }
};