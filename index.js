module.exports = {
    'defaultSeverity': 'error',
    'extends': [
        'tslint:recommended',
        'tslint-eslint-rules'
    ],
    // will be copied in future: https://github.com/palantir/tslint/pull/3641
    'jsRules': {
        'quotemark': [true, 'single'],
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
        'max-line-length': false,
        'ter-max-len': [true, 160, 4, {
            'ignoreComments': true,
            'ignoreUrls': true,
            'ignorePattern': '^\\s*var\\s.+=\\s*require\\s*\\('
        }],
        'interface-name': false,
        'variable-name': [true, 'check-format', 'allow-leading-underscore'],
        'arrow-parens': false,
        'object-literal-sort-keys': {
            'severity': 'warning',
            'options': ['ignore-case', 'match-declaration-order', 'shorthand-first']
        },
        'ordered-imports': {
            'severity': 'warning'
        },
        'member-ordering': {
            'severity': 'warning',
            'options': 'statics-first'
        }
    },
    'rules': {
        'quotemark': [true, 'single'],
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
        'max-line-length': false,
        'ter-max-len': [true, 160, 4, {
            'ignoreComments': true,
            'ignoreUrls': true,
            'ignorePattern': '^\\s*var\\s.+=\\s*require\\s*\\('
        }],
        'interface-name': false,
        'variable-name': [true, 'check-format', 'allow-leading-underscore'],
        'arrow-parens': false,
        'no-namespace': [true, 'allow-declarations'],
        'no-angle-bracket-type-assertion': {
            'severity': 'warning'
        },
        'object-literal-sort-keys': {
            'severity': 'warning',
            'options': ['ignore-case', 'match-declaration-order', 'shorthand-first']
        },
        'ordered-imports': {
            'severity': 'warning'
        },
        'member-ordering': {
            'severity': 'warning',
            'options': 'statics-first'
        }
    },
    'rulesDirectory': []
}
