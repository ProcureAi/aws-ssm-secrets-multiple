# AWS System Manager - Get multiple variables 

![Github Action](https://flat.badgen.net/badge/Github/Action/green?icon=github)
![MIT license](https://flat.badgen.net/badge/License/MIT/green)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

This actions gets multiple parameters from AWS System Manager and maps them to github action secrets

## Inputs

### `SSM_PARAMETERS`

**Required** The list of parameters

## Example usage

```yaml
uses: ProcureAi/aws-ssm-secrets-multiple@v1.0.0
with:
  SSM_PARAMETERS: |
    FOO=/app/production/foo,
    BAR=/app/production/bar,
```
