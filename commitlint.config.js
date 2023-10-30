module.exports = {
    extends: ['@commitlint/config-conventional'],
    plugins: [
        {
          rules: {
            "check-issue-number": ({ subject }) => {
              if (!subject) {
                return [false, "Your subject is empty or there is a space missing before."]
              }
              return [true]
            }
          }
        }
      ],
    rules: {
        "type-enum": [
          2,
          "always",
          [
            "build",
            "ci",
            "docs",
            "feat",
            "fix",
            "perf",
            "refactor",
            "style",
            "test",
            "revert",
            "chore"
          ],
        ],
        "scope-enum": [
          2, 
          "always", 
          [
            "bo",
            "server",
            "theme",
            "siteapp",
          ]
        ],
        "check-issue-number": [2, "always"]
      },
};
