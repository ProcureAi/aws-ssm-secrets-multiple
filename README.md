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
- uses: aws-actions/configure-aws-credentials@v1
  with:
    aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
    aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
    aws-region: ${{ secrets.AWS_REGION }}

- uses: ProcureAi/aws-ssm-secrets-multiple@v1.0.0
  with:
    SSM_PARAMETERS: |
      FOO=/app/production/foo,
      BAR=/app/production/bar,

- run: |
    echo "this is your secret: $FOO"
```
