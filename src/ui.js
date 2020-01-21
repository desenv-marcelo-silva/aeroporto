class UI {
  constructor() {
    this.display = document.getElementById("lista-aeroporto");
    this.notify = document.getElementById("notificacao");
  }

  listarResultados(dados) {
    let lista = dados.airports;
    let outPutTableRows = "";
    if (lista.length > 0) {
      lista.map(aeroporto => {
        outPutTableRows += `<tr>
        <td>${aeroporto.name}</td>
        <td>${aeroporto.iata}</td>
        <td>${aeroporto.state.type}</td>
        <td>${aeroporto.city}</td>
        <td>${aeroporto.state.name}</td>
        <td>${aeroporto.country.name}</td>
        </tr>`;
      });
    }
    this.display.innerHTML = outPutTableRows;
    this.notify.innerHTML = `
    <article class="message is-primary">
      <div class="message-body">
        Mostrando <span class="tag is-success">
        ${lista.length}</span> Resultados para ${dados.term.toUpperCase()}
      </div>
    </article>`;
  }

  notificar(mensagem) {
    this.notify.innerHTML = `
      <article class="message is-danger">
         <div class="mesage-body">${mensagem}</div>
      </article>`;

    setTimeout(() => {
      this.limparMensagem();
    }, 3000);
  }

  limparMensagem() {
    const alertaAtivo = document.querySelector(".is-danger");
    if (alertaAtivo) {
      alertaAtivo.remove();
    }
  }

  iniciarProgresso() {
    const spinner = document.getElementById("loading");
    spinner.classList.add("is-loading");
    setTimeout(() => {
      this.finalizarProgresso();
    }, 3000);
  }

  finalizarProgresso() {
    const spinner = document.getElementById("loading");
    spinner.classList.remove("is-loading");
  }
}

export const ui = new UI();
