module.exports = {
    'defaultSeverity': 'error',
    'extends': [
        'tslint-config-airbnb',
        'tslint-no-unused-expression-chai'
    ],
    'jsRules': true,
    'rules': {
        'align': [true, 'parameters'],
        'cyclomatic-complexity': [true, 10],
        'early-exit': {
            'severity': 'warning'
        },
        'import-name': false,
        'indent': [true, 'spaces', 4],
        'max-line-length': false,
        'member-ordering': {
            'severity': 'warning',
            'options': 'statics-first'
        },
        'no-angle-bracket-type-assertion': {
            'severity': 'warning'
        },
        'no-console': {
            'severity': 'warning',
        },
        'no-namespace': [true, 'allow-declarations'],
        'no-parameter-reassignment': false,
        'no-return-undefined': {
            'severity': 'warning'
        },
        'no-unnecessary-else': {
            'severity': 'warning'
        },
        'no-unused': true,
        'object-curly-spacing': {
            'severity': 'warning',
            'options': ['always']
        },
        'ordered-imports': {
            'severity': 'warning'
        },
        'prefer-array-literal': false,
        'prefer-while': {
            'severity': 'warning'
        },
        'semicolon': {
            'severity': 'warning',
            'options': ['always']
        },
        'space-before-function-paren': [true, {
            'anonymous': 'never',
            'named': 'never',
            'asyncArrow': 'always',
            'method': 'never',
            'constructor': 'never'
        }],
        'ter-arrow-parens': false,
        'ter-indent': false,
        'ter-max-len': [true, 160, 4, {
            'ignoreComments': true,
            'ignoreUrls': true,
            'ignorePattern': '^\\s*var\\s.+=\\s*require\\s*\\('
        }],
        'trailing-comma': [true, {
            'multiline': {
                'objects': 'always',
                'arrays': 'always',
                'imports': 'ignore',
                'exports': 'ignore',
                'functions': 'ignore'
            },
            'singleline': {
                'imports': 'ignore',
                'exports': 'ignore',
                'functions': 'ignore'
            }
        }],
        'variable-name': [true, 'check-format', 'allow-leading-underscore'],
    },
    'rulesDirectory': ['tslint-consistent-codestyle']
}
