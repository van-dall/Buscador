function buscarDados()  {
    const form = document.forms["form"]
    const url = form.url.value;

    fetch(url)
    .then(r => r.ok ? r.text() : 'Erro: ${r.status} ${r.statusText}')
    .then(txt => form.resultado.value = txt)
    .catch(err => alert(err))
    return false;

}