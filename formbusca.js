function verificaform(){
  if(document.getElementById("sc").value == " "){
	alert("Pesquisa sem conteúdo");
	document.getElementById("sc").style.borderColor = "red";
	document.getElementById("sc").style.backgroundColor = "#ffe5e5";
	document.getElementById("sc").focus();
    return false;
  }else{
    alert("Você será redirecionado para a página da sua pesquisa")
    document.getElementById("sc").style.borderColor = "green";
	  document.getElementById("sc").style.backgroundColor = "#98FB98";
	  document.getElementById("sc").focus();
  }
  return true;
}