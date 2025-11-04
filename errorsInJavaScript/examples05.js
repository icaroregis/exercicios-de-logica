// ! O bloco `finally` é uma seção de código que sempre é executada após os blocos `try` e `catch`, independentemente de ter ocorrido uma exceção. Este bloco é executado mesmo que a exceção não tenha acontecido. Ficou curioso? Vamos dar uma olhada:

try {
  // execute algum código
} catch (error) {
  // trate o erro
} finally {
  // execute sempre este código
}

// ? Esta é a estrutura básica do try/catch/finally bloco. Veja: não importa o que esteja dentro de `if` try e `else` catch, o conteúdo do finally bloco será executado depois deles, permitindo que você realize alguma limpeza ou ações posteriores!

// ! O bloco `finally` lida com atividades que são arriscadas ou não, após a execução dos blocos `try` e `catch`. Se o seu bloco lançar uma exceção ou não, não importa — o bloco garante que as tarefas necessárias sejam concluídas. Por exemplo, ao interagir com um banco de dados, você deve fechar a conexão. Isso é feito com `close`. catch/try/finally

let dbConnection;

try {
  dbConnection = openDatabase(); // try to open a connection
  // try some operations
} catch (error) {
  console.error('An error occurred!', error); // catch and handle exceptions
} finally {
  dbConnection.close(); // always close the connection
}

// * Embora este exemplo possa não ser algo que você enfrente imediatamente, é importante entender a aplicação do bloco finally na vida real.
