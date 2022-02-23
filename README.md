## Getting started

### Change node version

```zsh
nvm use # fnm use
```

### Install dependencies

```zsh
npm ci
```

### Start the project

```zsh
npm run start
```

## Product description

Subscription form which allows user to subscribe to some imaginary product by providing his/her email.

Requirements:

1. Show form which contains email and submit button.
1. On submit create subscription using subscription service.
1. Disable form submit button while subscription service is processing a request.
1. After subscription service is submitted emit subscription created event to analytics service.

## Testing
1. [Drivers pattern to provide reusable test kits](docs/drivers-pattern-to-provide-test-kits.md).
1. [Context](docs/context-builders.md).
1. [Mocking vs providing test kit](docs/mocking-vs-providing-test-kits.md).
1. [File structure](docs/file-structure.md).

## References

1. [Testing library](https://testing-library.com/docs/react-testing-library/cheatsheet)
