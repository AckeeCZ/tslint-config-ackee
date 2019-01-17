module.exports = {
    'defaultSeverity': 'error',
    'extends': [
        'tslint-config-airbnb',
        'tslint-no-unused-expression-chai'
    ],
    'jsRules': true,
    'rules': {
        'align': [true, 'parameters'],
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
        'variable-name': [true, 'check-format', 'allow-leading-underscore'],
    },
    'rulesDirectory': ['tslint-consistent-codestyle']
}
