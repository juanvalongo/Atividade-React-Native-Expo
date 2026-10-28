# Catálogo de Livros 📚

Aplicativo mobile desenvolvido com **React Native e Expo** para a atividade individual da disciplina de Coding Mobile do curso de Análise e Desenvolvimento de Sistemas (ADS), no Senac Pernambuco.

## 🎯 Objetivo

Consumir dados de uma API pública e exibir uma lista de livros na tela do aplicativo, praticando conceitos fundamentais do React Native e a integração com serviços externos.

## 🚀 Tecnologias utilizadas

- **React Native:** desenvolvimento da interface mobile.
- **Expo:** ambiente de desenvolvimento e execução do aplicativo.
- **JavaScript:** linguagem utilizada na implementação.
- **Open Library API:** serviço utilizado para consultar informações sobre livros.

## 📚 Funcionalidades

- Consulta de livros por meio de uma API pública.
- Exibição dos títulos dos livros.
- Exibição dos nomes dos autores, quando disponíveis.
- Exibição das capas dos livros, quando disponíveis.
- Listagem dos resultados utilizando o componente `FlatList`.

## 🔗 API utilizada

O projeto utiliza a API de pesquisa da Open Library para consultar livros relacionados à programação.

Endpoint utilizado:

`https://openlibrary.org/search.json?q=programming&limit=20`

Documentação oficial: https://openlibrary.org/developers/api

## ⚙️ Como executar o projeto

### Pré-requisitos

- Node.js instalado.
- npm instalado.
- Expo Go instalado em um dispositivo compatível, caso queira testar no celular.

### Instalação e execução

1. Clone o repositório:

   ```bash
   git clone https://github.com/juanvalongo/Atividade-React-Native-Expo.git
   ```

2. Entre na pasta do projeto:

   ```bash
   cd Atividade-React-Native-Expo
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o Expo:

   ```bash
   npx expo start
   ```

5. Siga as instruções exibidas no terminal para executar o aplicativo em um dispositivo ou emulador compatível.

## 🧠 Conceitos praticados

- Componentes funcionais no React Native.
- Gerenciamento de estado com `useState`.
- Efeitos com `useEffect`.
- Requisições HTTP utilizando `fetch`.
- Consumo e interpretação de dados JSON.
- Renderização de listas com `FlatList`.
- Exibição de imagens remotas com `Image`.

## 👨‍💻 Autor

Estudante de Análise e Desenvolvimento de Sistemas (ADS) — Senac Pernambuco.

---

Projeto acadêmico desenvolvido para fins de aprendizagem e prática de integração com APIs.
