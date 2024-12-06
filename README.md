
### Graragem de Veículos
Este é uma atualização do **Programa** que simula o *Backend* de um sistema de uma **Garagem de Veículos** usando *Express*

---

### Dependências
Essas são as dependências para o funcionamento correto do programa:

| Nome       | Link para Download                                  |
|------------|-----------------------------------------------------|
| NodeJS     | https://nodejs.org/en/download/package-manager      |
| Express    | https://expressjs.com/pt-br/starter/installing.html |
| Insomnia   | https://insomnia.rest/download                      |

Observação: o Insomnia é utilizado para acessar outros métodos além de GET

### Instalando as dependências

#### NodeJS
   1. Abra o **terminal**
   
      - Windows
      ```
      Windows + R : digite "cmd" ou "powershell"
      ```
   
      - Linux
      ```
      Ctrl + Alt + T
      ```
   
   2. Insira o seguinte comando

      ```
      cd <caminho-do-arquivo>
      ```

   3. Então
      ```
      npm init -y
      ```

#### Express

   1. Abra o **terminal**
   
      - Windows
      ```
      Windows + R : digite "cmd" ou "powershell"
      ```
   
      - Linux
      ```
      Ctrl + Alt + T
      ```
   
   2. Insira o seguinte comando

      ```
      cd <caminho-do-arquivo>
      ```

   3. Então
      ```
      npm i --save-dev express
      ```

---

### Inicializando
   1. Instale *App.js* e *routes*

   2. Crie uma pasta nomeada **garagem-de-veiculos**
      - Na localização onde se deseja criar a pasta, insira o seguinte comando
      ```
      mkdir garagem-de-veiculos
      ```

   3. Mova *App.js* e *routes* para a pasta **garagem-de-veiculos**
      - No **terminal**
      ```
      move <caminho-dos-arquivos> <caminho-da-pasta-alvo>
      ```

   4. Abra o arquivo **garagem-de-veiculos**
      - No **terminal**
      ```
      cd <caminho-do-arquivo>
      ```
   
   5. Insira o seguinte comando
      ```
      node --watch "./app.js"
      ```

   6. Entre na seguinte URL usando um navegador de Internet
      ```
      https://127.0.0.1:8080/
      ```

   7. Altere a URL para uma das seguintes opções
      - Rota cliente
         ```
         https://127.0.0.1:8080/clientes
         ```

      - Rota veículo
         ```
         https://127.0.0.1:8080/veiculos
         ```

   8. Para acessar *outros métodos HTTP* além de GET, utilize a aplicação **Insomnia**

   9. Para desligar o servidor, use no **terminal** o seguinte atalho
      ```
      Ctrl + C
      ```

   #### Aplicação por João Flores e Rogério Filho
   

⠀
