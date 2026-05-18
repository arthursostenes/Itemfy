let lista = [];

function adicionarItem() {

  let nome = document.getElementById("nomeItem").value.trim();
  let quantidade = document.getElementById("quantidadeItem").value;

  // Verifica se os campos estão vazios
  if(nome === "" || quantidade === ""){
    alert("Preencha todos os campos!");
    return;
  }

  // Verifica se o item já existe
  let itemExistente = lista.find(item =>
    item.nome.toLowerCase() === nome.toLowerCase()
  );

  if(itemExistente){
    alert("ERRO: Este item já foi cadastrado!");
    return;
  }

  // Cria o item
  let item = {
    nome: nome,
    quantidade: quantidade
  };

  // Adiciona na lista
  lista.push(item);

  // Atualiza tabela
  atualizarTabela();

  // Limpa os campos
  document.getElementById("nomeItem").value = "";
  document.getElementById("quantidadeItem").value = "";
}

function atualizarTabela(){

  let tabela = document.getElementById("listaItens");

  tabela.innerHTML = "";

  lista.forEach((item, indice) => {

    tabela.innerHTML += `
      <tr>
        <td>${item.nome}</td>
        <td>${item.quantidade}</td>
        <td>
          <button class="remover" onclick="removerItem(${indice})">
            Remover
          </button>
        </td>
      </tr>
    `;
  });
}

function removerItem(indice){

  lista.splice(indice, 1);

  atualizarTabela();
}
