const names = [
    "Maria Paula Frias Campos", "Maria Paula","Maria" , "Maria Paula Frias", "Maria Paula Campos", "Henrique Brasil", "Henrique", "Henrique Sousa", "Henrique Brasil Sousa",
]

$( ".btn" ).click(function() {
    console.log(names.includes($("#fname1").val()));
    console.log($("#fname2").val());
    if (names.includes($("#fname1").val()) && names.includes($("#fname2").val())) {
        $('.resultado').text('100% VOCÊS SÃO PERFEITOS UM PRO OUTRO <3')
    } else {
        $('.resultado').text('0% NEM PENSE NISSO')
    }
  });