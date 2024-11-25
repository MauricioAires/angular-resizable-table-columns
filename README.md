# Angular Resizable Table Columns



https://github.com/user-attachments/assets/05d6ca70-f7b8-4d4a-97e1-c7f79c75c3fa



### 🎉 Sobre o projeto

Angular Resizable Table Columns é uma diretiva para Angular que permite adicionar funcionalidade de redimensionamento às colunas de tabelas. Com esta funcionalidade, os usuários podem ajustar dinamicamente a largura das colunas, proporcionando maior flexibilidade e usabilidade em interfaces que exibem grandes volumes de dados.

**Recursos principais:**
- Suporte a redimensionamento por arrastar;
- Fácil integração em projetos Angular;
- Personalização de estilos e comportamentos;
- Compatível com versões modernas do Angular.

**Exemplo de uso básico:**
```html
<thead>
  <tr>
    <th resizable>ID</th>
    <th resizable>Name</th>
    <th resizable>Address</th>
    <th resizable>City</th>
    <th resizable>State</th>
    <th resizable>ZIP</th>
  </tr>
</thead>
```

**Personalização da barra de redimensionamento:**
Você pode personalizar o estilo da barra de redimensionamento com a seguinte configuração:
```css
:host ::ng-deep {
  .resizable-bar {
    background: red !important;
  }
}
```

Ideal para dashboards, relatórios e tabelas interativas com dados ajustáveis!


### 🛠️ Tecnologias

- [Typescript](https://www.typescriptlang.org/)
- [Angular](https://angular.dev/)

### 🚀 Iniciando o projeto

```sh
# Clonar aplicação
$ git clone https://github.com/MauricioAires/angular-resizable-table-columns

# Acessar a aplicação
$ cd angular-resizable-table-columns

# Execute yarn para instalar as dependências
$ npm install

# Para iniciar a aplicação
$ npm run start

```


### 📝 Licença

Distribuído sob a licença MIT.
Veja [LICENSE](LICENSE) para mais informações.


### 🎯  Resultado

Acesse o site pronto nest link [aqui](https://angular-resizable-table-columns.vercel.app/)!

### 👨‍💻 Autor

Feito por Mauricio Aires 👋🏽
