## File structure

Most of the time drivers, context builders and test files are stored within the same directory. Example naming conventions:
1. **<component_name>.ts** - component file.
1. **<component_name>.driver.ts** - driver file.
1. **<component_name>.context.ts** - file which holds render methods and properties which could be passed to render method.
1. **<component_name>.spec.ts** - test implementations.


P.S If you prefer to store test related files in  `__tests__` directory driver, context and test files can be stored in it.
