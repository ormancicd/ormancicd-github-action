# Orman CI/CD GitHub Action

Bu GitHub Action geçici olarak ağaç bağışladığınızı varsayan bir mesaj oynatır.

## Örnek Kullanım
 
[demo.yml](demo.yml) dosyasından erişebilir veya aşağıdaki scripti kopyalayıp kullanabilirsiniz.

```
name: Orman CI/CD Demo

on:
  push:
    branches: [ main, action ]
  pull_request:
    branches: [ main, action ]

  workflow_dispatch:
  
jobs:
  orman_cicd:
    runs-on: ubuntu-latest
    name: Yazdığınız her kod, bir ağaç olsun!
    steps:
    - name: Orman CI/CD
      uses: ormancicd/ormancicd-github-action@v0.0.1
      id: orman_cicd
      with:
        organization-id: 1
        planting-area-id: 34
        agac-sayisi: 100
    - name: Orman CI/CD Response
      run: echo "${{ steps.orman_cicd.outputs.response }}"
```
