import { multi } from "./air-port-codes-node";
import { UI, ui } from "./ui";

const nomeAeroporto = document.getElementById("termo");

nomeAeroporto.addEventListener("keyup", e => {
  const termo = e.target.value;

  if (termo !== "") {
    ui.iniciarProgresso();
    const api = multi({
      key: "1cc506036b",
      secret: "45f119807683d7f",
      limit: 20
    });
    api.request(termo);
    api.onSuccess = data => {
      ui.listarResultados(data);
    };
    api.onError = data => {
      ui.notificar(data.message);
    };
  }
});
