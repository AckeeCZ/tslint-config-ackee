module.exports = {
    'defaultSeverity': 'error',
    'extends': [
        'tslint-config-airbnb',
        'tslint-no-unused-expression-chai'
    ],
    'jsRules': true,
    'rules': {
        'align': [true, 'parameters'],
        'import-name': false,
        'max-line-length': false,
        'member-ordering': {
            'severity': 'warning',
            'options': 'statics-first'
        },
        'no-angle-bracket-type-assertion': {
            'severity': 'warning'
        },
        'no-namespace': [true, 'allow-declarations'],
        'no-parameter-reassignment': false,
        'no-unused-variable': [true, {"ignore-pattern": "^_"}],
        'object-curly-spacing': {
            'severity': 'warning',
            'options': ['always']
        },
        'ordered-imports': {
            'severity': 'warning'
        },
        'prefer-array-literal': false,
        'semicolon': {
            'severity': 'warning',
            'options': ['always']
        },
        'ter-arrow-parens': false,
        'ter-indent': [
            true,
            4,
            { 'SwitchCase': 1 },
        ],
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
