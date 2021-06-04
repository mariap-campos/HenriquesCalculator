const names = [
    "maria", 
    "paula",
    "maria paula",
    "maria paula frias", 
    "maria paula campos", 
    "maria paula frias campos", 
    "henrique", 
    "henrique brasil", 
    "henrique sousa", 
    "henrique brasil de sousa",
    "henrique brasil sousa",
    "ma",
    "pique",
    "henry",
    "mash",
    "maria p",
    "maria p.",
    "henrique b.",
    "henrique b. s.",
    "maria p. f. c.",
    "mpfc",
    "hbs",
    "m",
    "h",
]

const frasesBoas = [
    "100% VOCÊS SÃO PERFEITOS UM PRO OUTRO ♡",
    "100% VOCE ENCONTROU SUA ALMA GEMÊA! ♡",
    "1000000000000% ♡",
    "100% DE CHANCE DE VOCÊS CASAREM ♡",
    "100% DE PASSAREM O RESTO DA VIDA JUNTINHOS ♡",
    "100000000000000000000000000000000000000000000% ♡",
    "PORCENTAGEM TÃO ALTA QUE QUEBROU O PROGRAMA",
    "100% MAIS QUE PERFEITOS UM PARA O OUTRO ♡",
    "1000000% UM AMOR DESSES BICHO",
    "MIL MILHÕES%"
];

const frasesRuins = [
    "NOPE",
    "0%",
    "-100% É MELHOR VOCE FUGIR",
    "VISH QUE PESADELO, 0%",
    "MELHOR NEM PENSAR NISSO 0%",
    "0% DE CHANCE DE DAR CERTO",
    "QUANTO É 0% - 100%?",
    "ECA",
    "FOGE ENQUANTO AINDA DÁ TEMPO"
];

$( ".btn" ).click(function() {
    const randomIndex = Math.floor(Math.random() * frasesBoas.length); 
    const randomIndex2 = Math.floor(Math.random() * frasesBoas.length); 
    $( ".resultado" ).removeClass( "show" );
    $( ".spinner" ).addClass( "show" );
    $('.resultado').text('')
    setTimeout(function(){ 
        $( ".spinner" ).removeClass( "show" );
        $( ".resultado" ).addClass( "show" );
        if (names.includes($("#fname1").val().toLowerCase()) && names.includes($("#fname2").val().toLowerCase())) {
            $('.resultado').text(frasesBoas[randomIndex]);
        } else {
            $('.resultado').text(frasesRuins[randomIndex2])
        }
    }, 1300);
  });