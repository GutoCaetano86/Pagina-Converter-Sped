

// importar arquivo TXT
document.getElementById('lerArquivo').addEventListener('click', function () {
  const input = document.getElementById('arquivo');
  const file = input.files[0];
  const leitor = new FileReader();

  document.getElementById('lerArquivo').textContent = 'Processando Planilha';
  document.getElementById('lerArquivo').classList.add('loading');

  leitor.onload = function (e) {
    const conteudo = e.target.result;
    var EFD = conteudo.replace(/\r/g, '').split('\n').filter(Boolean); // Remove linhas vazias
    var workbook = XLSX.utils.book_new();

    // Faça algo com o array EFD aqui

    //variaveis dos registros
    var R0000 = [];
    var R0100 = [];
    var R0120 = [];
    var R0150 = [];
    var R0200 = [];
    var R0208 = [];
    var R0300 = [];
    var R0450 = [];
    var R0600 = [];
    var RA001 = [];
    var RA110 = [];
    var RA170 = [];
    var RC100 = [];
    var RC120 = [];
    var RC180 = [];
    var RC188 = [];
    var RC198 = [];
    var RC381 = [];
    var RC396 = [];
    var RC505 = [];
    var RC601 = [];
    var RC990 = [];
    var RD100 = [];
    var RD111 = [];
    var RD205 = [];
    var RD501 = [];
    var RD600 = [];
    var RD609 = [];
    var RF010 = [];
    var RF120 = [];
    var RF139 = [];
    var RM001 = [];
    var RM110 = [];
    var RM205 = [];
    var RM215 = [];
    var RM230 = [];
    var RM400 = [];
    var RM505 = [];
    var RM600 = [];
    var RM611 = [];
    var RM625 = [];
    var RM800 = [];
    var R0001 = [];
    var R0110 = [];
    var R0140 = [];
    var R0175 = [];
    var R0205 = [];
    var R0210 = [];
    var R0305 = [];
    var R0460 = [];
    var R0900 = [];
    var RA010 = [];
    var RA111 = [];
    var RA990 = [];
    var RC110 = [];
    var RC170 = [];
    var RC181 = [];
    var RC191 = [];
    var RC199 = [];
    var RC385 = [];
    var RC500 = [];
    var RC509 = [];
    var RC605 = [];
    var RD001 = [];
    var RD101 = [];
    var RD200 = [];
    var RD209 = [];
    var RD505 = [];
    var RD601 = [];
    var RD990 = [];
    var RF100 = [];
    var RF129 = [];
    var RF150 = [];
    var RM100 = [];
    var RM115 = [];
    var RM210 = [];
    var RM220 = [];
    var RM300 = [];
    var RM410 = [];
    var RM510 = [];
    var RM605 = [];
    var RM615 = [];
    var RM630 = [];
    var RM810 = [];
    var R0035 = [];
    var R0111 = [];
    var R0145 = [];
    var R0190 = [];
    var R0206 = [];
    var R0220 = [];
    var R0400 = [];
    var R0500 = [];
    var R0990 = [];
    var RA100 = [];
    var RA120 = [];
    var RC001 = [];
    var RC010 = [];
    var RC111 = [];
    var RC175 = [];
    var RC185 = [];
    var RC195 = [];
    var RC380 = [];
    var RC395 = [];
    var RC501 = [];
    var RC600 = [];
    var RC609 = [];
    var RD010 = [];
    var RD105 = [];
    var RD201 = [];
    var RD500 = [];
    var RD509 = [];
    var RD605 = [];
    var RF001 = [];
    var RF111 = [];
    var RF130 = [];
    var RF990 = [];
    var RM105 = [];
    var RM200 = [];
    var RM211 = [];
    var RM225 = [];
    var RM350 = [];
    var RM500 = [];
    var RM515 = [];
    var RM610 = [];
    var RM620 = [];
    var RM700 = [];
    var RM990 = [];

    var IDENT_ESTAB;
    var nNF;
    var nCODPART;
    var nCODITEM;
    var nCODINDBEM;
    var COD_CRED;
    var COD_AJ;
    var ALIQ_PIS;
    var ALIQ_COFINS;

    // Filtrar e processar registros R0000, R0001 e R0150
    EFD.forEach(function (registro) {

      if (registro.trim()) {
        var tipoRegistro = registro.substring(1, 5);
        var n, registroFormatado;

        if (tipoRegistro === "0000") {
          n = R0000.length + 1;
          registroFormatado = "1|" + n + registro;
          R0000.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "0001") {
          n = R0001.length + 1;
          registroFormatado = "1|" + n + registro;
          R0001.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "0035") {
          n = R0035.length + 1;
          registroFormatado = "1|" + n + registro;
          R0035.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "0100") {
          n = R0100.length + 1;
          registroFormatado = "1|" + n + registro;
          R0100.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "0110") {
          n = R0110.length + 1;
          registroFormatado = "1|" + n + registro;
          R0110.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "0111") {
          n = R0111.length + 1;
          registroFormatado = "1|" + n + registro;
          R0111.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "0120") {
          n = R0120.length + 1;
          registroFormatado = "1|" + n + registro;
          R0120.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "0140") {
          n = R0140.length + 1;
          registroFormatado = "1|" + n + registro;
          R0140.push(registroFormatado.split("|"));

          IDENT_ESTAB = R0140[R0140.length - 1][3];
        }
        else if (tipoRegistro === "0145") {
          n = R0145.length + 1;
          registroFormatado = "1|" + n + registro;
          R0145.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "0150") {
          n = R0150.length + 1;
          registroFormatado = IDENT_ESTAB + "|1|" + n + registro;
          R0150.push(registroFormatado.split("|"));

          nCODPART = R0150[R0150.length - 1][4];
        }
        //dependencia cod parceiro
        else if (tipoRegistro === "0175") {
          n = R0175.length + 1;
          registroFormatado = R0150.length + "|" + nCODPART + "|" + n + registro;
          R0175.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "0190") {
          n = R0190.length + 1;
          registroFormatado = "1|" + n + registro;
          R0190.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "0200") {
          n = R0200.length + 1;
          registroFormatado = "1|" + n + registro;
          R0200.push(registroFormatado.split("|"));

          nCODITEM = R0200[R0200.length - 1][4];
        }
        //dependencia codigo item 0200
        else if (tipoRegistro === "0205") {
          n = R0205.length + 1;
          registroFormatado = R0200.length + "|" + nCODITEM + "|" + n + registro;
          R0205.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "0206") {
          n = R0206.length + 1;
          registroFormatado = R0200.length + "|" + nCODITEM + "|" + n + registro;
          R0206.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "0208") {
          n = R0208.length + 1;
          registroFormatado = R0200.length + "|" + nCODITEM + "|" + n + registro;
          R0208.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "0210") {
          n = R0210.length + 1;
          registroFormatado = R0200.length + "|" + nCODITEM + "|" + n + registro;
          R0210.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "0220") {
          n = R0220.length + 1;
          registroFormatado = R0200.length + "|" + nCODITEM + "|" + n + registro;
          R0220.push(registroFormatado.split("|"));
        }//fim dependencia 0200

        else if (tipoRegistro === "0300") {
          n = R0300.length + 1;
          registroFormatado = "1|" + n + registro;
          R0300.push(registroFormatado.split("|"));

          nCODINDBEM = R0300[R0300.length - 1][4];
        }
        //dependencia codigo item 0300
        else if (tipoRegistro === "0305") {
          n = R0305.length + 1;
          registroFormatado = R0300.length + "|" + nCODINDBEM + "|" + n + registro;
          R0305.push(registroFormatado.split("|"));
        }//fim dependencia 0300

        else if (tipoRegistro === "0400") {
          n = R0400.length + 1;
          registroFormatado = "1|" + n + registro;
          R0400.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "0450") {
          n = R0450.length + 1;
          registroFormatado = "1|" + n + registro;
          R0450.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "0460") {
          n = R0460.length + 1;
          registroFormatado = "1|" + n + registro;
          R0460.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "0500") {
          n = R0500.length + 1;
          registroFormatado = "1|" + n + registro;
          R0500.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "0600") {
          n = R0600.length + 1;
          registroFormatado = "1|" + n + registro;
          R0600.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "0900") {
          n = R0900.length + 1;
          registroFormatado = "1|" + n + registro;
          R0900.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "0990") {
          n = R0990.length + 1;
          registroFormatado = "1|" + n + registro;
          R0990.push(registroFormatado.split("|"));
        }

        //------------------------------------------- REGISTRO A

        else if (tipoRegistro === "A001") {
          n = RA001.length + 1;
          registroFormatado = "1|" + n + registro;
          RA001.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "A010") {
          n = RA010.length + 1;
          registroFormatado = "1|" + n + registro;
          RA010.push(registroFormatado.split("|"));

          IDENT_ESTAB = RA010[RA010.length - 1][3];
        }

        //------------------------------------------- REGISTRO A100 Dependencias CNPJ do A010, E NF/COD_PARTIC DO A100

        else if (tipoRegistro === "A100") {
          n = RA100.length + 1;
          registroFormatado = IDENT_ESTAB + "|1|" + n + registro;
          RA100.push(registroFormatado.split("|"));

          nNF = RA100[RA100.length - 1][10];
          nCODPART = RA100[RA100.length - 1][6];
        }
        else if (tipoRegistro === "A110") {
          n = RA110.length + 1;
          registroFormatado = IDENT_ESTAB + "|" + RA100.length + "|" + nNF + "|" + nCODPART + "|" + n + registro;
          RA110.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "A111") {
          n = RA111.length + 1;
          registroFormatado = IDENT_ESTAB + "|" + RA100.length + "|" + nNF + "|" + nCODPART + "|" + n + registro;
          RA111.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "A120") {
          n = RA120.length + 1;
          registroFormatado = IDENT_ESTAB + "|" + RA100.length + "|" + nNF + "|" + nCODPART + "|" + n + registro;
          RA120.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "A170") {
          n = RA170.length + 1;
          registroFormatado = IDENT_ESTAB + "|" + RA100.length + "|" + nNF + "|" + nCODPART + "|" + n + registro;
          RA170.push(registroFormatado.split("|"));
        }

        //------------------------------------------- FECHA DEPENDENCIA REG A
        else if (tipoRegistro === "A990") {
          n = RA990.length + 1;
          registroFormatado = "1|" + n + registro;
          RA990.push(registroFormatado.split("|"));
        }


        //------------------------------------------- REGISTRO C
        else if (tipoRegistro === "C001") {
          n = RC001.length + 1;
          registroFormatado = "1|" + n + registro;
          RC001.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "C010") {
          n = RC010.length + 1;
          registroFormatado = "1|" + n + registro;
          RC010.push(registroFormatado.split("|"));

          IDENT_ESTAB = RC010[RC010.length - 1][3];
        }

        //------------------------------------------- REGISTRO C100 Dependencias CNPJ do C010, E NF/COD_PARTIC DO C100
        else if (tipoRegistro === "C100") {
          n = RC100.length + 1;
          registroFormatado = IDENT_ESTAB + "|1|" + n + registro;
          RC100.push(registroFormatado.split("|"));

          nNF = RC100[RC100.length - 1][10];
          nCODPART = RC100[RC100.length - 1][6];
        }
        else if (tipoRegistro === "C110") {
          n = RC110.length + 1;
          registroFormatado = IDENT_ESTAB + "|" + RC100.length + "|" + nNF + "|" + nCODPART + "|" + n + registro;
          RC110.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "C111") {
          n = RC111.length + 1;
          registroFormatado = IDENT_ESTAB + "|" + RC100.length + "|" + nNF + "|" + nCODPART + "|" + n + registro;
          RC111.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "C120") {
          n = RC120.length + 1;
          registroFormatado = IDENT_ESTAB + "|" + RC100.length + "|" + nNF + "|" + nCODPART + "|" + n + registro;
          RC120.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "C170") {
          n = RC170.length + 1;
          registroFormatado = IDENT_ESTAB + "|" + RC100.length + "|" + nNF + "|" + nCODPART + "|" + n + registro;
          RC170.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "C175") {
          n = RC175.length + 1;
          registroFormatado = IDENT_ESTAB + "|" + RC100.length + "|" + nNF + "|" + nCODPART + "|" + n + registro;
          RC175.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "C180") {
          n = RC180.length + 1;
          registroFormatado = IDENT_ESTAB + "|1|" + "|" + n + registro;
          RC180.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "C181") {
          n = RC181.length + 1;
          registroFormatado = IDENT_ESTAB + "|1|" + "|" + n + registro;
          RC181.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "C185") {
          n = RC185.length + 1;
          registroFormatado = IDENT_ESTAB + "|1|" + "|" + n + registro;
          RC185.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "C188") {
          n = RC188.length + 1;
          registroFormatado = IDENT_ESTAB + "|1|" + "|" + n + registro;
          RC188.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "C191") {
          n = RC191.length + 1;
          registroFormatado = IDENT_ESTAB + "|1|" + "|" + n + registro;
          RC191.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "C195") {
          n = RC195.length + 1;
          registroFormatado = IDENT_ESTAB + "|1|" + "|" + n + registro;
          RC195.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "C198") {
          n = RC198.length + 1;
          registroFormatado = IDENT_ESTAB + "|1|" + "|" + n + registro;
          RC198.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "C199") {
          n = RC199.length + 1;
          registroFormatado = IDENT_ESTAB + "|1|" + "|" + n + registro;
          RC199.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "C380") {
          n = RC380.length + 1;
          registroFormatado = IDENT_ESTAB + "|1|" + "|" + n + registro;
          RC380.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "C381") {
          n = RC381.length + 1;
          registroFormatado = IDENT_ESTAB + "|1|" + "|" + n + registro;
          RC381.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "C385") {
          n = RC385.length + 1;
          registroFormatado = IDENT_ESTAB + "|1|" + "|" + n + registro;
          RC385.push(registroFormatado.split("|"));
        }

        //------------------------------------------- Registro C395 (Pai do C396)
        else if (tipoRegistro === "C395") {
          n = RC395.length + 1;
          registroFormatado = IDENT_ESTAB + "|1|" + "|" + n + registro;
          RC395.push(registroFormatado.split("|"));

          nNF = RC395[RC395.length - 1][8];
          nCODPART = RC395[RC395.length - 1][5];
        }
        else if (tipoRegistro === "C396") {
          n = RC396.length + 1;
          registroFormatado = IDENT_ESTAB + "|" + RC395.length + "|" + nNF + "|" + nCODPART + "|" + n + registro;
          RC396.push(registroFormatado.split("|"));
        }

        //------------------------------------------- Fim Registros C395/C396


        //------------------------------------------- Registro C500 - Entrada Energia Elétrica
        else if (tipoRegistro === "C500") {
          n = RC500.length + 1;
          registroFormatado = IDENT_ESTAB + "|1|" + "|" + n + registro;
          RC500.push(registroFormatado.split("|"));

          nNF = RC500[RC500.length - 1][9];
          nCODPART = RC500[RC500.length - 1][4];
        }
        else if (tipoRegistro === "C501") {
          n = RC501.length + 1;
          registroFormatado = IDENT_ESTAB + "|" + RC500.length + "|" + nNF + "|" + nCODPART + "|" + n + registro;
          RC501.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "C505") {
          n = RC505.length + 1;
          registroFormatado = IDENT_ESTAB + "|" + RC500.length + "|" + nNF + "|" + nCODPART + "|" + n + registro;
          RC505.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "C509") {
          n = RC509.length + 1;
          registroFormatado = IDENT_ESTAB + "|" + RC500.length + "|" + nNF + "|" + nCODPART + "|" + n + registro;
          RC509.push(registroFormatado.split("|"));
        }

        //------------------------------------------- Registro C600 - Saída Energia Elétrica
        else if (tipoRegistro === "C600") {
          n = RC600.length + 1;
          registroFormatado = IDENT_ESTAB + "|1|" + "|" + n + registro;
          RC600.push(registroFormatado.split("|"));

          nNF = RC600[RC600.length - 1][9];
          nCODPART = RC600[RC600.length - 1][4];
        }
        else if (tipoRegistro === "C601") {
          n = RC601.length + 1;
          registroFormatado = IDENT_ESTAB + "|" + RC600.length + "|" + nNF + "|" + nCODPART + "|" + n + registro;
          RC601.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "C605") {
          n = RC605.length + 1;
          registroFormatado = IDENT_ESTAB + "|" + RC600.length + "|" + nNF + "|" + nCODPART + "|" + n + registro;
          RC605.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "C609") {
          n = RC609.length + 1;
          registroFormatado = IDENT_ESTAB + "|" + RC600.length + "|" + nNF + "|" + nCODPART + "|" + n + registro;
          RC609.push(registroFormatado.split("|"));
        }

        //------------------------------------------- Fecha C500/C600
        //------------------------------------------- FECHA DEPENDENCIA do CNPJ C010
        else if (tipoRegistro === "C990") {
          n = RC990.length + 1;
          registroFormatado = "1|" + n + registro;
          RC990.push(registroFormatado.split("|"));
        }

        //------------------------------------------- ENCERRAMENTO BLOCO C

        //------------------------------------------- BLOCO D
        else if (tipoRegistro === "D001") {
          n = RD001.length + 1;
          registroFormatado = "1|" + n + registro;
          RD001.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "D010") {
          n = RD010.length + 1;
          registroFormatado = "1|" + n + registro;
          RD010.push(registroFormatado.split("|"));

          IDENT_ESTAB = RD010[RD010.length - 1][3];
        }

        //------------------------------------------- REGISTRO D100 - Dependencias CNPJ do D010, E NF/COD PARTIC DO D100
        else if (tipoRegistro === "D100") {
          n = RD100.length + 1;
          registroFormatado = IDENT_ESTAB + "|1|" + n + registro;
          RD100.push(registroFormatado.split("|"));

          nNF = RD100[RD100.length - 1][11];
          nCODPART = RD100[RD100.length - 1][6];
        }
        else if (tipoRegistro === "D101") {
          n = RD101.length + 1;
          registroFormatado = IDENT_ESTAB + "|" + RD100.length + "|" + nNF + "|" + nCODPART + "|" + n + registro;
          RD101.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "D105") {
          n = RD105.length + 1;
          registroFormatado = IDENT_ESTAB + "|" + RD100.length + "|" + nNF + "|" + nCODPART + "|" + n + registro;
          RD105.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "D111") {
          n = RD111.length + 1;
          registroFormatado = IDENT_ESTAB + "|" + RD100.length + "|" + nNF + "|" + nCODPART + "|" + n + registro;
          RD111.push(registroFormatado.split("|"));
        }

        //------------------------------------------- REGISTRO D200 - Dependencias CNPJ do D010
        else if (tipoRegistro === "D200") {
          n = RD200.length + 1;
          registroFormatado = IDENT_ESTAB + "|1|" + n + registro;
          RD200.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "D201") {
          n = RD201.length + 1;
          registroFormatado = IDENT_ESTAB + "|1|" + n + registro;
          RD201.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "D205") {
          n = RD205.length + 1;
          registroFormatado = IDENT_ESTAB + "|1|" + n + registro;
          RD205.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "D209") {
          n = RD209.length + 1;
          registroFormatado = IDENT_ESTAB + "|1|" + n + registro;
          RD209.push(registroFormatado.split("|"));
        }

        //------------------------------------------- REGISTRO D500 - Dependencias CNPJ do D010
        else if (tipoRegistro === "D500") {
          n = RD500.length + 1;
          registroFormatado = IDENT_ESTAB + "|1|" + n + registro;
          RD500.push(registroFormatado.split("|"));

          nNF = RD500[RD500.length - 1][11];
          nCODPART = RD500[RD500.length - 1][6];
        }
        else if (tipoRegistro === "D501") {
          n = RD501.length + 1;
          registroFormatado = IDENT_ESTAB + "|" + RD500.length + "|" + nNF + "|" + nCODPART + "|" + n + registro;
          RD501.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "D505") {
          n = RD505.length + 1;
          registroFormatado = IDENT_ESTAB + "|" + RD500.length + "|" + nNF + "|" + nCODPART + "|" + n + registro;
          RD505.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "D509") {
          n = RD509.length + 1;
          registroFormatado = IDENT_ESTAB + "|" + RD500.length + "|" + nNF + "|" + nCODPART + "|" + n + registro;
          RD509.push(registroFormatado.split("|"));
        }

        //------------------------------------------- REGISTRO D600 - Dependencias CNPJ do D010
        else if (tipoRegistro === "D600") {
          n = RD600.length + 1;
          registroFormatado = IDENT_ESTAB + "|1|" + n + registro;
          RD600.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "D601") {
          n = RD601.length + 1;
          registroFormatado = IDENT_ESTAB + "|1|" + n + registro;
          RD601.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "D605") {
          n = RD605.length + 1;
          registroFormatado = IDENT_ESTAB + "|1|" + n + registro;
          RD605.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "D609") {
          n = RD609.length + 1;
          registroFormatado = IDENT_ESTAB + "|1|" + n + registro;
          RD609.push(registroFormatado.split("|"));
        }

        //-------------------------------------------------- Encerramento bloco D
        else if (tipoRegistro === "D990") {
          n = RD990.length + 1;
          registroFormatado = IDENT_ESTAB + "|1|" + n + registro;
          RD990.push(registroFormatado.split("|"));
        }

        //------------------------------------------- ABERTURA BLOCO F
        else if (tipoRegistro === "F001") {
          n = RF001.length + 1;
          registroFormatado = "1|" + n + registro;
          RF001.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "F010") {
          n = RF010.length + 1;
          registroFormatado = "1|" + n + registro;
          RF010.push(registroFormatado.split("|"));

          IDENT_ESTAB = RF010[RF010.length - 1][3];
        }

        //------------------------------------------- REGISTRO F100 - Dependencias CNPJ do F010
        else if (tipoRegistro === "F100") {
          n = RF100.length + 1;
          registroFormatado = IDENT_ESTAB + "|" + RF010.length + "|" + n + registro;
          RF100.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "F111") {
          n = RF111.length + 1;
          registroFormatado = IDENT_ESTAB + "|" + RF010.length + "|" + n + registro;
          RF111.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "F120") {
          n = RF120.length + 1;
          registroFormatado = IDENT_ESTAB + "|" + RF010.length + "|" + n + registro;
          RF120.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "F129") {
          n = RF129.length + 1;
          registroFormatado = IDENT_ESTAB + "|" + RF010.length + "|" + n + registro;
          RF129.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "F130") {
          n = RF130.length + 1;
          registroFormatado = IDENT_ESTAB + "|" + RF010.length + "|" + n + registro;
          RF130.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "F139") {
          n = RF139.length + 1;
          registroFormatado = IDENT_ESTAB + "|" + RF010.length + "|" + n + registro;
          RF139.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "F150") {
          n = RF150.length + 1;
          registroFormatado = IDENT_ESTAB + "|" + RF010.length + "|" + n + registro;
          RF150.push(registroFormatado.split("|"));
        }

        //-------------------------------------------------- ENCERRAMENTO BLOCO F
        else if (tipoRegistro === "F990") {
          n = RF990.length + 1;
          registroFormatado = "1|" + n + registro;
          RF990.push(registroFormatado.split("|"));
        }

        //------------------------------------------- ABERTURA BLOCO M
        else if (tipoRegistro === "M001") {
          n = RM001.length + 1;
          registroFormatado = "1|" + n + registro;
          RM001.push(registroFormatado.split("|"));
        }

        //------------------------------------------- REGISTRO M100 - PIS
        else if (tipoRegistro === "M100") {
          n = RM100.length + 1;
          registroFormatado = "1|" + n + registro;
          RM100.push(registroFormatado.split("|"));

          COD_CRED = RM100[RM100.length - 1][3];
          ALIQ_PIS = RM100[RM100.length - 1][6];
        }

        //------------------------------------------- REGISTRO M100 - Dependencias TIPO DE CREDITO e ALIQUTOA do M100 E TIPO AJUSTE DO M110
        else if (tipoRegistro === "M105") {
          n = RM105.length + 1;
          registroFormatado = COD_CRED + "|" + ALIQ_PIS + "|" + RM100.length + "|" + n + registro;
          RM105.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "M110") {
          n = RM110.length + 1;
          registroFormatado = COD_CRED + "|" + ALIQ_PIS + "|" + RM100.length + "|" + n + registro;
          RM110.push(registroFormatado.split("|"));

          COD_AJ = RM105[RM105.length - 1][7];
        }
        else if (tipoRegistro === "M115") {
          n = RM115.length + 1;
          registroFormatado = COD_CRED + "|" + ALIQ_PIS + "|" + RM100.length + "|" + COD_AJ + "|" + n + registro;
          RM115.push(registroFormatado.split("|"));
        }

        //------------------------------------------- REGISTRO M200
        else if (tipoRegistro === "M200") {
          n = RM200.length + 1;
          registroFormatado = "1|" + n + registro;
          RM200.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "M205") {
          n = RM205.length + 1;
          registroFormatado = "1|" + n + registro;
          RM205.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "M210") {
          n = RM210.length + 1;
          registroFormatado = "1|" + n + registro;
          RM210.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "M211") {
          n = RM211.length + 1;
          registroFormatado = "1|" + n + registro;
          RM211.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "M215") {
          n = RM215.length + 1;
          registroFormatado = "1|" + n + registro;
          RM215.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "M220") {
          n = RM220.length + 1;
          registroFormatado = "1|" + n + registro;
          RM220.push(registroFormatado.split("|"));

          COD_AJ = RM220[RM220.length - 1][5];
        }
        else if (tipoRegistro === "M225") {
          n = RM225.length + 1;
          registroFormatado = COD_AJ + "|" + RM220.length + "|" + n + registro;
          RM225.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "M230") {
          n = RM230.length + 1;
          registroFormatado = "1|" + n + registro;
          RM230.push(registroFormatado.split("|"));
        }

        //------------------------------------------- REGISTRO M300
        else if (tipoRegistro === "M300") {
          n = RM300.length + 1;
          registroFormatado = "1|" + n + registro;
          RM300.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "M350") {
          n = RM350.length + 1;
          registroFormatado = "1|" + n + registro;
          RM350.push(registroFormatado.split("|"));
        }

        //------------------------------------------- REGISTRO M400
        else if (tipoRegistro === "M400") {
          n = RM400.length + 1;
          registroFormatado = "1|" + n + registro;
          RM400.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "M410") {
          n = RM410.length + 1;
          registroFormatado = "1|" + n + registro;
          RM410.push(registroFormatado.split("|"));
        }
        //------------------------------------------- ENCERRAMENTO PIS

        //------------------------------------------- REGISTRO M500 - COFINS
        else if (tipoRegistro === "M500") {
          n = RM500.length + 1;
          registroFormatado = "1|" + n + registro;
          RM500.push(registroFormatado.split("|"));

          COD_CRED = RM500[RM500.length - 1][3];
          ALIQ_COFINS = RM500[RM500.length - 1][6];
        }

        //------------------------------------------- REGISTRO M500 - Dependencias TIPO DE CREDITO e ALIQUTOA do M500 E TIPO AJUSTE DO M510
        else if (tipoRegistro === "M505") {
          n = RM505.length + 1;
          registroFormatado = COD_CRED + "|" + ALIQ_COFINS + "|" + RM500.length + "|" + n + registro;
          RM505.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "M510") {
          n = RM510.length + 1;
          registroFormatado = COD_CRED + "|" + ALIQ_COFINS + "|" + RM500.length + "|" + n + registro;
          RM510.push(registroFormatado.split("|"));

          COD_AJ = RM505[RM505.length - 1][7];
        }
        else if (tipoRegistro === "M515") {
          n = RM515.length + 1;
          registroFormatado = COD_CRED + "|" + ALIQ_COFINS + "|" + RM500.length + "|" + COD_AJ + "|" + n + registro;
          RM515.push(registroFormatado.split("|"));
        }

        //------------------------------------------- REGISTRO M600
        else if (tipoRegistro === "M600") {
          n = RM600.length + 1;
          registroFormatado = "1|" + n + registro;
          RM600.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "M605") {
          n = RM605.length + 1;
          registroFormatado = "1|" + n + registro;
          RM605.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "M610") {
          n = RM610.length + 1;
          registroFormatado = "1|" + n + registro;
          RM610.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "M611") {
          n = RM611.length + 1;
          registroFormatado = "1|" + n + registro;
          RM611.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "M615") {
          n = RM615.length + 1;
          registroFormatado = "1|" + n + registro;
          RM615.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "M620") {
          n = RM620.length + 1;
          registroFormatado = "1|" + n + registro;
          RM620.push(registroFormatado.split("|"));

          COD_AJ = RM620[RM620.length - 1][5];
        }
        else if (tipoRegistro === "M625") {
          n = RM625.length + 1;
          registroFormatado = COD_AJ + "|" + RM620.length + "|" + n + registro;
          RM625.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "M630") {
          n = RM630.length + 1;
          registroFormatado = "1|" + n + registro;
          RM630.push(registroFormatado.split("|"));
        }

        //------------------------------------------- REGISTRO M700
        else if (tipoRegistro === "M700") {
          n = RM700.length + 1;
          registroFormatado = "1|" + n + registro;
          RM700.push(registroFormatado.split("|"));
        }

        //------------------------------------------- REGISTRO M800
        else if (tipoRegistro === "M800") {
          n = RM800.length + 1;
          registroFormatado = "1|" + n + registro;
          RM800.push(registroFormatado.split("|"));
        }
        else if (tipoRegistro === "M810") {
          n = RM810.length + 1;
          registroFormatado = "1|" + n + registro;
          RM810.push(registroFormatado.split("|"));
        }
        //------------------------------------------- ENCERRAMENTO COFINS

        //------------------------------------------- ENCERRAMENTO BLOCO M
        else if (tipoRegistro === "M990") {
          n = RM990.length + 1;
          registroFormatado = "1|" + n + registro;
          RM990.push(registroFormatado.split("|"));
        }


      }
    });


    // Gerar o arquivo Excel
    var workbook = XLSX.utils.book_new();

    // Definir os títulos das colunas
    var headersR0000 = ['Item Pai','Seq','REG','COD_VER','TIPO_ESCRIT','IND_SIT_ESP','NUM_REC_ANTERIOR','DT_INI','DT_FIN','NOME','CNPJ','UF','COD_MUN','SUFRAMA','IND_NAT_PJ','IND_ATIV'];
    R0000.unshift(headersR0000);

    var headersR0001 = ['Item Pai','Seq','REG','IND_MOV'];
    R0001.unshift(headersR0001);

    var headersR0035 = ['Item Pai','Seq','REG','COD_SCP', 'DESC_SCP', 'INF_COMP'];
    R0035.unshift(headersR0035);

    var headersR0100 = ['Item Pai', 'Seq', 'REG', 'NOME', 'CPF', 'CRC', 'CNPJ', 'CEP', 'END', 'NUM', 'COMPL', 'BAIRRO', 'FONE', 'FAX', 'EMAIL', 'COD_MUN'];
    R0100.unshift(headersR0100);

    var headersR0110 = ['Item Pai', 'Seq', 'REG', 'COD_INC_TRIB', 'IND_APRO_CRED', 'COD_TIPO_CONT', 'IND_REG_CUM'];
    R0110.unshift(headersR0110);

    var headersR0111 = ['Item Pai', 'Seq', 'REG', 'REC_BRU_NCUM_TRIB_MI', 'REC_BRU_NCUM_NT_MI', 'REC_BRU_ NCUM_EXP', 'REC_BRU_CUM', 'REC_BRU_TOTAL'];
    R0111.unshift(headersR0111);

    var headersR0120 = ['Item Pai', 'Seq', 'REG', 'REC_BRU_NCUM_TRIB_MI', 'MES_REFER', 'INF_COMP'];
    R0120.unshift(headersR0120);

    var headersR0140 = ['Item Pai', 'Seq', 'REG', 'COD_EST', 'NOME', 'CNPJ', 'UF', 'IE', 'COD_MUN', 'IM', 'SUFRAMA'];
    R0140.unshift(headersR0140);

    var headersR0145 = ['Item Pai', 'Seq', 'REG', 'COD_INC_TRIB', 'VL_REC_TOT', 'VL_REC_ATIV', 'VL_REC_DEMAIS_ATIV', 'INFO_COMPL'];
    R0145.unshift(headersR0145);

    var headersR0150 = ['COD ESTAB', 'Item Pai', 'Seq', 'REG', 'COD_PART', 'NOME', 'COD_PAIS', 'CNPJ', 'CPF', 'IE', 'COD_MUN', 'SUFRAMA', 'END', 'NUM', 'COMPL', 'BAIRRO'];
    R0150.unshift(headersR0150);

    var headersR0175 = ['Item Pai', 'COD_PART', 'Seq', 'REG', 'DT_ALT', 'NR_CAMPO', 'CONT_ANT'];
    R0175.unshift(headersR0175);

    var headersR0190 = ['Item Pai', 'Seq', 'REG', 'UNID', 'DESCR'];
    R0190.unshift(headersR0190);

    var headersR0200 = ['COD ESTAB', 'Item Pai', 'Seq', 'REG', 'COD_ITEM', 'DESCR_ITEM', 'COD_BARRA', 'COD_ANT_ITEM', 'UNID_INV', 'TIPO_ITEM', 'COD_NCM', 'EX_IPI', 'COD_GEN', 'COD_LST', 'ALIQ_ICMS'];
    R0200.unshift(headersR0200);

    var headersR0205 = ['Item Pai', 'COD_ITEM', 'Seq', 'REG', 'DESCR_ANT_ITEM', 'DT_INI', 'DT_FIM', 'COD_ANT_ITEM'];
    R0205.unshift(headersR0205);

    var headersR0206 = ['Item Pai', 'COD_ITEM', 'Seq', 'REG', 'COD_COMB'];
    R0206.unshift(headersR0206);

    var headersR0208 = ['Item Pai', 'COD_ITEM', 'Seq', 'REG', 'COD_TAB', 'COD_GRU', 'MARCA_COM'];
    R0208.unshift(headersR0208);

    var headersR0210 = ['Item Pai', 'COD_ITEM', 'Seq', 'REG', 'COD_ITEM_COMP', 'QTD_COMP', 'PERDA'];
    R0210.unshift(headersR0210);

    var headersR0220 = ['Item Pai', 'COD_ITEM', 'Seq', 'REG', 'UNID_CONV', 'FAT_CONV', 'COD_BARRA'];
    R0220.unshift(headersR0220);

    var headersR0300 = ['Item Pai', 'Seq', 'REG', 'COD_IND_BEM', 'IDENT_MERC', 'DESCR_ITEM', 'COD_PRNC', 'COD_CTA', 'NR_PARC'];
    R0300.unshift(headersR0300);

    var headersR0305 = ['Item Pai', 'COD_IND_BEM', 'Seq', 'REG', 'COD_CCUS', 'FUNC', 'VIDA_UTIL'];
    R0305.unshift(headersR0305);

    var headersR0400 = ['Item Pai', 'Seq', 'REG', 'COD_NAT', 'DESCR_NAT'];
    R0400.unshift(headersR0400);

    var headersR0450 = ['Item Pai', 'Seq', 'REG', 'COD_INF', 'TXT'];
    R0450.unshift(headersR0450);

    var headersR0460 = ['Item Pai', 'Seq', 'REG', 'COD_OBS', 'TXT'];
    R0460.unshift(headersR0460);

    var headersR0500 = ['Item Pai', 'Seq', 'REG', 'DT_ALT', 'COD_ NAT_CC', 'IND_CTA', 'NÍVEL', 'COD_CTA', 'NOME_CTA', 'COD_CTA_REF', 'CNPJ_EST'];
    R0500.unshift(headersR0500);

    var headersR0600 = ['Item Pai', 'Seq', 'REG', 'DT_ALT', 'COD_CCUS', 'CCUS'];
    R0600.unshift(headersR0600);

    var headersR0900 = ['Item Pai', 'Seq', 'REG', 'REC_TOTAL_BLOCO_A', 'REC_NRB_BLOCO_A', 'REC_TOTAL_BLOCO_C', 'REC_NRB_BLOCO_C', 'REC_TOTAL_BLOCO_D', 'REC_NRB_BLOCO_D', 'REC_TOTAL_BLOCO_F', 'REC_NRB_BLOCO_F', 'REC_TOTAL_BLOCO_I', 'REC_NRB_BLOCO_I', 'REC_TOTAL_BLOCO_1', 'REC_NRB_BLOCO_1', 'REC_TOTAL_PERIODO', 'REC_TOTAL_NRB_PERÍODO'];
    R0900.unshift(headersR0900);

    var headersR0990 = ['Item Pai', 'Seq', 'REG', 'QTD_LIN_0'];
    R0990.unshift(headersR0990);

    var headersA001 = ['Item Pai', 'Seq', 'REG', 'IND_MOV']
    A001.unshift(headersA001);

    var headersA010 = ['Item Pai', 'Seq', 'REG', 'CNPJ']
    A010.unshift(headersA010);

    var headersA100 = ['CNPJ', 'Item', 'Item Pai', 'Reg', 'IND_OPER', 'IND_EMIT', 'COD_PART', 'COD_SIT', 'SER', 'SUB SER', 'NUM_DOC', 'CHV_NFSE', 'DT_DOC', 'DT_EXE_SERV', 'VL_DOC', 'IND_PGTO', 'VL_DESC', 'VL_BC_PIS', 'VL_PIS', 'VL_BC_COFINS', 'VL_COFINS', 'VL_PIS_RET', 'VL_COFINS_RET', 'VL_ISS']
    A100.unshift(headersA100);

    var headersA110 = ['CNPJ', 'Item Pai', 'NUM_DOC', 'COD_PART', 'Seq', 'REG', 'COD_INF', 'TXT_COMPL']
    A110.unshift(headersA110);

    var headersA111 = ['CNPJ', 'Item Pai', 'NUM_DOC', 'COD_PART', 'Seq', 'REG', 'NUM_PROC', 'IND_PROC']
    A111.unshift(headersA111);

    var headersA120 = ['CNPJ', 'Item Pai', 'NUM_DOC', 'COD_PART', 'Seq', 'REG', 'VL_TOT_SERV', 'VL_BC_PIS', 'VL_PIS_IMP', 'DT_PAG_PIS', 'VL_BC_COFINS', 'VL_COFINS_IMP', 'DT_PAG_COFINS', 'LOC_EXE_SERV']
    A120.unshift(headersA120);

    var headersA170 = ['CNPJ', 'Item Pai', 'NUM_DOC', 'COD_PART', 'Seq', 'REG', 'NUM_ITEM', 'COD_ITEM', 'DESCR_COMPL', 'VL_ITEM', 'VL_DESC', 'NAT_BC_CRED', 'IND_ORIG_CRED', 'CST_PIS', 'VL_BC_PIS', 'ALIQ_PIS', 'VL_PIS', 'CST_COFINS', 'VL_BC_COFINS', 'ALIQ_COFINS', 'VL_COFINS', 'COD_CTA', 'COD_CCUS']
    A170.unshift(headersA170);

    var headersA990 = ['Item Pai', 'Seq', 'REG', 'QTD_LIN_0']
    A990.unshift(headersA990);

    var headersC001 = ['Item Pai', 'Seq', 'REG', 'IND_MOV']
    C001.unshift(headersC001);

    var headersC010 = ['Item Pai', 'Seq', 'REG', 'CNPJ', 'IND_ESCRI']
    C010.unshift(headersC010);

    var headersC100 = ['CNPJ', 'Item', 'Item Pai', 'Reg', 'IND_OPER', 'IND_EMIT', 'COD_PART', 'COD_MOD', 'COD_SIT', 'SER', 'NUM_DOC', 'CHV_NFE', 'DT_DOC', 'DT_E_S', 'VL_DOC', 'IND_PGTO', 'VL_DESC', 'VL_ABAT_NT', 'VL_MERC', 'IND_FRT', 'VL_FRT', 'VL_SEG', 'VL_OUT_DA', 'VL_BC_ICMS', 'VL_ICMS', 'VL_BC_ICMS_ST', 'VL_ICMS_ST', 'VL_IPI', 'VL_PIS', 'VL_COFINS', 'VL_PIS_ST', 'VL_COFINS_ST']
    C100.unshift(headersC100);

    var headersC110 = ['CNPJ', 'Item Pai', 'NUM_DOC', 'COD_PART', 'Seq', 'REG', 'COD_INF', 'TXT_COMPL']
    C110.unshift(headersC110);

    var headersC111 = ['CNPJ', 'Item Pai', 'NUM_DOC', 'COD_PART', 'Seq', 'REG', 'NUM_PROC', 'IND_PROC']
    C111.unshift(headersC111);

    var headersC120 = ['CNPJ', 'Item Pai', 'NUM_DOC', 'COD_PART', 'Seq', 'REG', 'COD_DOC_IMP', 'NUM_DOC_IMP', 'VL_PIS_IMP', 'VL_COFINS_IMP', 'NUM_ACDRAW']
    C120.unshift(headersC120);

    var headersC170 = ['CNPJ', 'Item Pai', 'NUM_DOC', 'COD_PART', 'Seq', 'REG', 'NUM_ITEM', 'COD_ITEM', 'DESCR_COMPL', 'QTD', 'UNID', 'VL_ITEM', 'VL_DESC', 'IND_MOV', 'CST_ICMS', 'CFOP', 'COD_NAT', 'VL_BC_ICMS', 'ALIQ_ICMS', 'VL_ICMS', 'VL_BC_ICMS_ST', 'ALIQ_ST', 'VL_ICMS_ST', 'IND_APUR', 'CST_IPI', 'COD_ENQ', 'VL_BC_IPI', 'ALIQ_IPI', 'VL_IPI', 'CST_PIS', 'VL_BC_PIS', 'ALIQ_PIS', 'QUANT_BC_PIS', 'ALIQ_PIS_QUANT', 'VL_PIS', 'CST_COFINS', 'VL_BC_COFINS', 'ALIQ_COFINS', 'QUANT_BC_COFINS', 'ALIQ_COFINS_QUANT', 'VL_COFINS', 'COD_CTA']
    C170.unshift(headersC170);
    
    var headersC175 = ['CNPJ', 'Item Pai', 'NUM_DOC', 'COD_PART', 'Seq', 'REG', 'CFOP', 'VL_OPR', 'VL_DESC', 'CST_PIS', 'VL_BC_PIS', 'ALIQ_PIS', 'QUANT_BC_PIS', 'ALIQ_PIS_QUANT', 'VL_PIS', 'CST_COFINS', 'VL_BC_COFINS', 'ALIQ_COFINS', 'QUANT_BC_COFINS', 'ALIQ_COFINS_QUANT', 'VL_COFINS', 'COD_CTA', 'INFO_COMPL']
    C175.unshift(headersC175);

    var headersC180 = ['CNPJ', 'Item Pai', 'Seq', 'Reg', 'COD_MOD', 'DT_DOC_INI', 'DT_DOC_FIN', 'COD_ITEM', 'COD_NCM', 'EX_IPI', 'VL_TOT_ITEM']
    C180.unshift(headersC180);

    var headersC181 = ['CNPJ', 'Item Pai', 'Seq', 'Reg', 'CST_PIS', 'CFOP', 'VL_ITEM', 'VL_DESC', 'VL_BC_PIS', 'ALIQ_PIS', 'QUANT_BC_PIS', 'ALIQ_PIS_QUANT', 'VL_PIS', 'COD_CTA']
    C181.unshift(headersC181);

    var headersC185 = ['CNPJ', 'Item Pai', 'Seq', 'Reg', 'CST_COFINS', 'CFOP', 'VL_ITEM', 'VL_DESC', 'VL_BC_COFINS', 'ALIQ_COFINS', 'QUANT_BC_COFINS', 'ALIQ_COFINS_QUANT', 'VL_COFINS', 'COD_CTA']
    C185.unshift(headersC185);

    var headersC188 = ['CNPJ', 'Item Pai', 'Seq', 'Reg', 'NUM_PROC', 'IND_PROC']
    C188.unshift(headersC188);
    
    var headersC191 = ['CNPJ', 'Item Pai', 'Seq', 'Reg', 'CNPJ_CPF_PART', 'CST_PIS', 'CFOP', 'VL_ITEM', 'VL_DESC', 'VL_BC_PIS', 'ALIQ_PIS', 'QUANT_BC_PIS', 'ALIQ_PIS_QUANT', 'VL_PIS', 'COD_CTA']
    C191.unshift(headersC191);

    var headersC195 = ['CNPJ', 'Item Pai', 'Seq', 'Reg', 'CNPJ_CPF_PART', 'CST_COFINS', 'CFOP', 'VL_ITEM', 'VL_DESC', 'VL_BC_COFINS', 'ALIQ_COFINS', 'QUANT_BC_COFINS', 'ALIQ_COFINS_QUANT', 'VL_COFINS', 'COD_CTA']
    C195.unshift(headersC195);

    var headersC198 = ['CNPJ', 'Item Pai', 'Seq', 'Reg', 'NUM_PROC', 'IND_PROC']
    C198.unshift(headersC198);

    var headersC199 = ['CNPJ', 'Item Pai', 'Seq', 'Reg', 'COD_DOC_IMP', 'NUM_DOC__IMP', 'VL_PIS_IMP', 'VL_COFINS_IMP', 'NUM_ACDRAW']
    C199.unshift(headersC199);

    var headersC380 = ['CNPJ', 'Item Pai', 'Seq', 'Reg', 'COD_MOD', 'DT_DOC_INI', 'DT_DOC_FIN', 'NUM_DOC_INI', 'NUM_DOC_FIN', 'VL_DOC', 'VL_DOC_CANC']
    C380.unshift(headersC380);

    var headersC381 = ['CNPJ', 'Item Pai', 'Seq', 'Reg', 'COD_MOD', 'DT_DOC_INI', 'CST_PIS', 'COD_ITEM', 'VL_ITEM', 'VL_BC_PIS', 'ALIQ_PIS', 'QUANT_BC_PIS', 'ALIQ_PIS_QUANT', 'VL_PIS', 'COD_CTA']
    C381.unshift(headersC381);

    var headersC385 = ['CNPJ', 'Item Pai', 'Seq', 'Reg', 'CST_COFINS', 'COD_ITEM', 'VL_ITEM', 'VL_BC_COFINS', 'ALIQ_COFINS', 'QUANT_BC_COFINS', 'ALIQ_COFINS_QUANT', 'VL_COFINS', 'COD_CTA']
    C385.unshift(headersC385);

    var headersC395 = ['CNPJ', 'Item Pai', 'Seq', 'Reg', 'CST_COFINS', 'COD_MOD', 'COD_PART', 'SER', 'SUB_SER', 'NUM_DOC', 'DT_DOC', 'VL_DOC']
    C395.unshift(headersC395);

    var headersC396 = ['CNPJ', 'Item Pai', 'NUM_DOC', 'COD_PART', 'Seq', 'REG', 'COD_ITEM', 'VL_ITEM', 'VL_DESC', 'NAT_BC_CRED', 'CST_PIS', 'VL_BC_PIS', 'ALIQ_PIS', 'VL_PIS', 'CST_COFINS', 'VL_BC_COFINS', 'ALIQ_COFINS', 'VL_COFINS', 'COD_CTA']
    C396.unshift(headersC396);

    var headersC500 = ['CNPJ', 'Item Pai', 'Seq', 'Reg', 'COD_PART', 'COD_MOD', 'COD_SIT', 'SER', 'SUB', 'NUM_DOC', 'DT_DOC', 'DT_ENT', 'VL_DOC', 'VL_ICMS', 'COD_INF', 'VL_PIS', 'VL_COFINS', 'CHV_DOCe']
    C500.unshift(headersC500);

    var headersC501 = ['CNPJ', 'Item Pai', 'NUM_DOC', 'COD_PART', 'Seq', 'REG', 'CST_PIS', 'VL_ITEM', 'NAT_BC_CRED', 'VL_BC_PIS', 'ALIQ_PIS', 'VL_PIS', 'COD_CTA']
    C501.unshift(headersC501);

    var headersC505 = ['CNPJ', 'Item Pai', 'NUM_DOC', 'COD_PART', 'Seq', 'REG', 'CST_COFINS', 'VL_ITEM', 'NAT_BC_CRED', 'VL_BC_COFINS', 'ALIQ_COFINS', 'VL_COFINS', 'COD_CTA']
    C505.unshift(headersC505);

    var headersC509 = ['CNPJ', 'Item Pai', 'NUM_DOC', 'COD_PART', 'Seq', 'REG', 'NUM_PROC', 'IND_PROC']
    C509.unshift(headersC509);

    var headersC600 = ['CNPJ', 'Item Pai', 'Seq', 'Reg', 'COD_MOD', 'COD_MUN', 'SER', 'SUB', 'COD_CONS', 'QTD_CONS', 'QTD_CANC', 'DT_DOC', 'VL_DOC', 'VL_DESC', 'CONS', 'VL_FORN', 'VL_SERV_NT', 'VL_TERC', 'VL_DA', 'VL_BC_ICMS', 'VL_ICMS', 'VL_BC_ICMS_ST', 'VL_ICMS_ST', 'VL_PIS', 'VL_COFINS']
    C600.unshift(headersC600);

    var headersC601 = ['CNPJ', 'Item Pai', 'NUM_DOC', 'COD_PART', 'Seq', 'REG', 'CST_PIS', 'VL_ITEM', 'VL_BC_PIS', 'ALIQ_PIS', 'VL_PIS', 'COD_CTA']
    C601.unshift(headersC601);

    var headersC605 = ['CNPJ', 'Item Pai', 'NUM_DOC', 'COD_PART', 'Seq', 'REG', 'CST_COFINS', 'VL_ITEM', 'VL_BC_COFINS', 'ALIQ_COFINS', 'VL_COFINS', 'COD_CTA']
    C605.unshift(headersC605);

    var headersC609 = ['CNPJ', 'Item Pai', 'NUM_DOC', 'COD_PART', 'Seq', 'REG', 'NUM_PROC', 'IND_PROC']
    C609.unshift(headersC609);

    var headersC990 = ['Item Pai', 'Seq', 'REG', 'QTD_LIN_0']
    C990.unshift(headersC990);

    var headersD001 = ['Item Pai', 'Seq', 'REG', 'IND_MOV']
    D001.unshift(headersD001);

    var headersD010 = ['Item Pai', 'Seq', 'REG', 'CNPJ']
    D010.unshift(headersD010);

    var headersD100 = ['CNPJ', 'Item', 'Item Pai', 'Reg', 'IND_OPER', 'IND_EMIT', 'COD_PART', 'COD_MOD', 'COD_SIT', 'SER', 'SUB', 'NUM_DOC', 'CHV_CTE', 'DT_DOC', 'DT_A_P', 'TP_CT-e', 'CHV_CTE_REF', 'VL_DOC', 'VL_DESC', 'IND_FRT', 'VL_SERV', 'VL_BC_ICMS', 'VL_ICMS', 'VL_NT', 'COD_INF', 'COD_CTA']
    D100.unshift(headersD100);

    var headersD101 = ['CNPJ', 'Item Pai', 'NUM_DOC', 'COD_PART', 'Seq', 'Reg', 'IND_NAT_FRT', 'VL_ITEM', 'CST_PIS', 'NAT_BC_CRED', 'VL_BC_PIS', 'ALIQ_PIS', 'VL_PIS', 'COD_CTA']
    D101.unshift(headersD101);

    var headersD105 = ['CNPJ', 'Item Pai', 'NUM_DOC', 'COD_PART', 'Seq', 'Reg', 'IND_NAT_FRT', 'VL_ITEM', 'CST_COFINS', 'NAT_BC_CRED', 'VL_BC_COFINS', 'ALIQ_COFINS', 'VL_COFINS', 'COD_CTA']
    D105.unshift(headersD105);

    var headersD111 = ['CNPJ', 'Item Pai', 'NUM_DOC', 'COD_PART', 'Seq', 'Reg', 'NUM_PROC', 'IND_PROC']
    D111.unshift(headersD111);

    var headersD200 = ['CNPJ', 'Item', 'Item Pai', 'Reg', 'COD_MOD', 'COD_SIT', 'SER', 'SUB', 'NUM_DOC_INI', 'NUM_DOC_FIN', 'CFOP', 'DT_REF', 'VL_DOC', 'VL_DESC']
    D200.unshift(headersD200);

    var headersD201 = ['CNPJ', 'item Pai', 'Seq', 'Reg', 'CST_PIS', 'VL_ITEM', 'VL_BC_PIS', 'ALIQ_PIS', 'VL_PIS', 'COD_CTA']
    D201.unshift(headersD201);

    var headersD205 = ['CNPJ', 'item Pai', 'Seq', 'Reg', 'CST_COFINS', 'VL_ITEM', 'VL_BC_COFINS', 'ALIQ_COFINS', 'VL_COFINS', 'COD_CTA']
    D205.unshift(headersD205);

    var headersD209 = ['CNPJ', 'item Pai', 'Seq', 'Reg', 'NUM_PROC', 'IND_PROC']
    D209.unshift(headersD209);

    var headersD500 = ['CNPJ', 'Item', 'Item Pai', 'Reg', 'IND_OPER', 'IND_EMIT', 'COD_PART', 'COD_MOD', 'COD_SIT', 'SER', 'SUB', 'NUM_DOC', 'DT_DOC', 'DT_A_P', 'VL_DOC', 'VL_DESC', 'VL_SERV', 'VL_SERV_NT', 'VL_TERC', 'VL_DA', 'VL_BC_ICMS', 'VL_ICMS', 'COD_INF', 'VL_PIS', 'VL_COFINS']
    D500.unshift(headersD500);

    var headersD501 = ['CNPJ', 'Item Pai', 'NUM_DOC', 'COD_PART', 'Seq', 'Reg', 'CST_PIS', 'VL_ITEM', 'NAT_BC_CRED', 'VL_BC_PIS', 'ALIQ_PIS', 'VL_PIS', 'COD_CTA']
    D501.unshift(headersD501);

    var headersD505 = ['CNPJ', 'Item Pai', 'NUM_DOC', 'COD_PART', 'Seq', 'Reg', 'CST_COFINS', 'VL_ITEM', 'NAT_BC_CRED', 'VL_BC_COFINS', 'ALIQ_COFINS', 'VL_COFINS', 'COD_CTA']
    D505.unshift(headersD505);

    var headersD509 = ['CNPJ', 'Item Pai', 'NUM_DOC', 'COD_PART', 'Seq', 'Reg', 'NUM_PROC', 'IND_PROC']
    D509.unshift(headersD509);

    var headersD600 = ['CNPJ', 'Item', 'Item Pai', 'Reg', 'COD_MOD', 'COD_MUN', 'SER', 'SUB', 'IND_REC', 'QTD_CONS', 'DT_DOC_INI', 'DT_DOC_FIN', 'VL_DOC', 'VL_DESC', 'VL_SERV', 'VL_SERV_NT', 'VL_TERC', 'VL_DA', 'VL_BC_ICMS', 'VL_ICMS', 'VL_PIS', 'VL_COFINS']
    D600.unshift(headersD600);

    var headersD601 = ['CNPJ', 'Item Pai', 'Seq', 'Reg', 'COD_CLASS', 'VL_ITEM', 'VL_DESC', 'CST_PIS', 'VL_BC_PIS', 'ALIQ_PIS', 'VL_PIS', 'COD_CTA']
    D601.unshift(headersD601);

    var headersD605 = ['CNPJ', 'Item Pai', 'Seq', 'Reg', 'COD_CLASS', 'VL_ITEM', 'VL_DESC', 'CST_COFINS', 'VL_BC_COFINS', 'ALIQ_COFINS', 'VL_COFINS', 'COD_CTA']
    D605.unshift(headersD605);

    var headersD609 = ['CNPJ', 'Item Pai', 'Seq', 'Reg', 'NUM_PROC', 'IND_PROC']
    D609.unshift(headersD609);

    var headersD990 = ['Item Pai', 'Seq', 'REG', 'QTD_LIN_0']
    D990.unshift(headersD990);

    var headersF001 = ['Item Pai', 'Seq', 'REG', 'IND_MOV']
    F001.unshift(headersF001);

    var headersF010 = ['Item Pai', 'Seq', 'REG', 'CNPJ']
    F010.unshift(headersF010);

    var headersF100 = ['CNPJ', 'Item Pai', 'Seq', 'Reg', 'IND_OPER', 'COD_PART', 'COD_ITEM', 'DT_OPER', 'VL_OPER', 'CST_PIS', 'VL_BC_PIS', 'ALIQ_PIS', 'VL_PIS', 'CST_COFINS', 'VL_BC_COFINS', 'ALIQ_COFINS', 'VL_COFINS', 'NAT_BC_CRED', 'IND_ORIG_CRED', 'COD_CTA', 'COD_CCUS', 'DESC_DOC_OPER']
    F100.unshift(headersF100);

    var headersF111 = ['CNPJ', 'Item Pai', 'Seq', 'Reg', 'NUM_PROC', 'IND_PROC']
    F111.unshift(headersF111);

    var headersF120 = ['CNPJ', 'Item Pai', 'Seq', 'Reg', 'NAT_BC_CRED', 'IDENT_BEM_IMOB', 'IND_ORIG_CRED', 'IND_UTIL_BEM_IMOB', 'VL_OPER_DEP', 'PARC_OPER_NAO_BC_CRED', 'CST_PIS', 'VL_BC_PIS', 'ALIQ_PIS', 'VL_PIS', 'CST_COFINS', 'VL_BC_COFINS', 'ALIQ_COFINS', 'VL_COFINS', 'COD_CTA', 'COD_CCUS', 'DESC_ BEM_IMOB']
    F120.unshift(headersF120);

    var headersF129 = ['CNPJ', 'Item Pai', 'Seq', 'Reg', 'NUM_PROC', 'IND_PROC']
    F129.unshift(headersF129);

    var headersF130 = ['CNPJ', 'Item Pai', 'Seq', 'Reg', 'NAT_BC_CRED', 'IDENT_BEM_IMOB', 'IND_ORIG_CRED', 'IND_UTIL_BEM_IMOB', 'MES_OPER_AQUIS', 'VL_OPER_DEP', 'PARC_OPER_NAO_BC_CRED', 'VL_BC_CRED', 'IND_NR_PARC', 'CST_PIS', 'VL_BC_PIS', 'ALIQ_PIS', 'VL_PIS', 'CST_COFINS', 'VL_BC_COFINS', 'ALIQ_COFINS', 'VL_COFINS', 'COD_CTA', 'COD_CCUS', 'DESC_ BEM_IMOB']
    F130.unshift(headersF130);

    var headersF139 = ['CNPJ', 'Item Pai', 'Seq', 'Reg', 'NUM_PROC', 'IND_PROC']
    F139.unshift(headersF139);

    var headersF150 = ['CNPJ', 'Item Pai', 'Seq', 'Reg', 'NAT_BC_CRED', 'VL_TOT_EST', 'EST_IMP', 'VL_BC_EST', 'VL_BC_MEN_EST', 'CST_PIS', 'ALIQ_PIS', 'VL_CRED_PIS', 'CST_COFINS', 'ALIQ_COFINS', 'VL_CRED_COFINS', 'DESC_EST', 'COD_CTA']
    F150.unshift(headersF150);

    var headersF990 = ['Item Pai', 'Seq', 'REG', 'QTD_LIN_0']
    F990.unshift(headersF990);

    var headersM001 = ['Item Pai', 'Seq', 'REG', 'IND_MOV']
    M001.unshift(headersM001);

    var headersM100 = ['Item Pai', 'Seq', 'REG', 'COD_CRED', 'IND_CRED_ORI', 'VL_BC_PIS', 'ALIQ_PIS', 'QUANT_BC_PIS', 'ALIQ_PIS_QUANT', 'VL_CRED', 'VL_AJUS_ACRES', 'VL_AJUS_REDUC', 'VL_CRED_DIF', 'VL_CRED_DISP', 'IND_DESC_CRED', 'VL_CRED_DESC', 'SLD_CRED']
    M100.unshift(headersM100);

    var headersM105 = ['COD_CRED', 'ALIQ_PIS', 'Item Pai', 'Seq', 'REG', 'NAT_BC_CRED', 'CST_PIS', 'VL_BC_PIS_TOT', 'VL_BC_PIS_CUM', 'VL_BC_PIS_NC', 'VL_BC_PIS', 'QUANT_BC_PIS_TOT', 'QUANT_BC_PIS', 'DESC_CRED']
    M105.unshift(headersM105);

    var headersM110 = ['COD_CRED', 'ALIQ_PIS', 'Item Pai', 'Seq', 'REG', 'IND_AJ', 'VL_AJ', 'COD_AJ', 'NUM_DOC', 'DESCR_AJ', 'DT_REF']
    M110.unshift(headersM110);

    var headersM115 = ['COD_CRED', 'ALIQ_PIS', 'Item Pai', 'COD_AJ', 'Seq', 'REG', 'DET_VALOR_AJ', 'CST_PIS', 'DET_BC_CRED', 'DET_ALIQ', 'DT_OPER_AJ', 'DESC_AJ', 'COD_CTA', 'INFO_COMPL']
    M115.unshift(headersM115);

    var headersM200 = ['Item Pai', 'Seq', 'REG', 'VL_TOT_CONT_NC_PER', 'VL_TOT_CRED_DESC', 'VL_TOT_CRED_DESC_ANT', 'VL_TOT_CONT_NC_DEV', 'VL_RET_NC', 'VL_OUT_DED_NC', 'VL_CONT_NC_REC', 'VL_TOT_CONT_CUM_PER', 'VL_RET_CUM', 'VL_OUT_DED_CUM', 'VL_CONT_CUM_REC', 'VL_TOT_CONT_REC']
    M200.unshift(headersM200);

    var headersM205 = ['Item Pai', 'Seq', 'REG', 'NUM_CAMPO', 'COD_REC', 'VL_DEBITO']
    M205.unshift(headersM205);

    var headersM210 = ['Item Pai', 'Seq', 'REG', 'COD_CONT', 'VL_REC_BRT', 'VL_BC_CONT', 'VL_AJUS_ACRES_BC_PIS', 'VL_AJUS_REDUC_BC_PIS', 'VL_BC_CONT_AJUS', 'ALIQ_PIS_QUANT', 'QUANT_BC_PIS', 'ALIQ_PIS_QUANT', 'VL_CONT_APUR', 'VL_AJUS_ACRES', 'VL_AJUS_REDUC', 'VL_CONT_DIFER', 'VL_CONT_DIFER_ANT', 'VL_CONT_PER']
    M210.unshift(headersM210);

    var headersM211 = ['Item Pai', 'Seq', 'REG', 'IND_TIP_COOP', 'VL_BC_CONT_ANT_EXC_COOP', 'VL_EXC_COOP_GER', 'VL_EXC_ESP_COOP', 'VL_BC_CONT']
    M211.unshift(headersM211);

    var headersM215 = ['Item Pai', 'Seq', 'REG', 'IND_AJ_BC', 'VL_AJ_BC', 'COD_AJ_BC', 'NUM_DOC', 'DESCR_AJ_BC', 'DT_REF', 'COD_CTA', 'CNPJ', 'INFO_COMPL']
    M215.unshift(headersM215);

    var headersM220 = ['Item Pai', 'Seq', 'REG', 'IND_AJ_BC', 'VL_AJ', 'COD_AJ', 'NUM_DOC', 'DESCR_AJ', 'DT_REF']
    M220.unshift(headersM220);

    var headersM225 = ['COD_AJ', 'Item Pai', 'Seq', 'REG', 'DET_VALOR_AJ', 'CST_PIS', 'DET_BC_CRED', 'DET_ALIQ', 'DT_OPER_AJ', 'DESC_AJ', 'COD_CTA', 'INFO_COMPL']
    M225.unshift(headersM225);

    var headersM230 = ['Item Pai', 'Seq', 'REG', 'CNPJ', 'VL_VEND', 'VL_NAO_RECEB', 'VL_CONT_DIF', 'VL_CRED_DIF', 'COD_CRED']
    M230.unshift(headersM230);

    var headersM300 = ['Item Pai', 'Seq', 'REG', 'COD_CONT', 'VL_CONT_APUR_DIFER', 'NAT_CRED_DESC', 'VL_CRED_DESC_DIFER', 'VL_CONT_DIFER_ANT', 'PER_APUR', 'DT_RECEB']
    M300.unshift(headersM300);

    var headersM350 = ['Item Pai', 'Seq', 'REG', 'VL_TOT_FOL', 'VL_EXC_BC', 'VL_TOT_BC', 'ALIQ_PIS_FOL', 'VL_TOT_CONT_FOL']
    M350.unshift(headersM350);

    var headersM400 = ['Item Pai', 'Seq', 'REG', 'CST_PIS', 'VL_TOT_REC', 'COD_CTA', 'DESC_COMPL']
    M400.unshift(headersM400);

    var headersM410 = ['Item Pai', 'Seq', 'REG', 'NAT_REC', 'VL_REC', 'COD_CTA', 'DESC_COMPL']
    M410.unshift(headersM410);

    var headersM500 = ['Item Pai', 'Seq', 'REG', 'COD_CRED', 'IND_CRED_ORI', 'VL_BC_COFINS', 'ALIQ_COFINS', 'QUANT_BC_COFINS', 'ALIQ_COFINS_QUANT', 'VL_CRED', 'VL_AJUS_ACRES', 'VL_AJUS_REDUC', 'VL_CRED_DIF', 'VL_CRED_DISP', 'IND_DESC_CRED', 'VL_CRED_DESC', 'SLD_CRED']
    M500.unshift(headersM500);

    var headersM505 = ['COD_CRED', 'ALIQ_COFINS', 'Item Pai', 'Seq', 'REG', 'NAT_BC_CRED', 'CST_COFINS', 'VL_BC_COFINS_TOT', 'VL_BC_COFINS_CUM', 'VL_BC_COFINS_NC', 'VL_BC_COFINS', 'QUANT_BC_COFINS_TOT', 'QUANT_BC_COFINS', 'DESC_CRED']
    M505.unshift(headersM505);

    var headersM510 = ['COD_CRED', 'ALIQ_COFINS', 'Item Pai', 'Seq', 'REG', 'IND_AJ', 'VL_AJ', 'COD_AJ', 'NUM_DOC', 'DESCR_AJ', 'DT_REF']
    M510.unshift(headersM510);

    var headersM515 = ['COD_CRED', 'ALIQ_COFINS', 'Item Pai', 'COD_AJ', 'Seq', 'REG', 'DET_VALOR_AJ', 'CST_COFINS', 'DET_BC_CRED', 'DET_ALIQ', 'DT_OPER_AJ', 'DESC_AJ', 'COD_CTA', 'INFO_COMPL']
    M515.unshift(headersM515);

    var headersM600 = ['Item Pai', 'Seq', 'REG', 'VL_TOT_CONT_NC_PER', 'VL_TOT_CRED_DESC', 'VL_TOT_CRED_DESC_ANT', 'VL_TOT_CONT_NC_DEV', 'VL_RET_NC', 'VL_OUT_DED_NC', 'VL_CONT_NC_REC', 'VL_TOT_CONT_CUM_PER', 'VL_RET_CUM', 'VL_OUT_DED_CUM', 'VL_CONT_CUM_REC', 'VL_TOT_CONT_REC']
    M600.unshift(headersM600);

    var headersM605 = ['Item Pai', 'Seq', 'REG', 'NUM_CAMPO', 'COD_REC', 'VL_DEBITO']
    M605.unshift(headersM605);

    var headersM610 = ['Item Pai', 'Seq', 'REG', 'COD_CONT', 'VL_REC_BRT', 'VL_BC_CONT', 'VL_AJUS_ACRES_BC_COFINS', 'VL_AJUS_REDUC_BC_COFINS', 'VL_BC_CONT_AJUS', 'ALIQ_COFINS_QUANT', 'QUANT_BC_COFINS', 'ALIQ_COFINS_QUANT', 'VL_CONT_APUR', 'VL_AJUS_ACRES', 'VL_AJUS_REDUC', 'VL_CONT_DIFER', 'VL_CONT_DIFER_ANT', 'VL_CONT_PER']
    M610.unshift(headersM610);

    var headersM611 = ['Item Pai', 'Seq', 'REG', 'IND_TIP_COOP', 'VL_BC_CONT_ANT_EXC_COOP', 'VL_EXC_COOP_GER', 'VL_EXC_ESP_COOP', 'VL_BC_CONT']
    M611.unshift(headersM611);

    var headersM615 = ['Item Pai', 'Seq', 'REG', 'IND_AJ_BC', 'VL_AJ_BC', 'COD_AJ_BC', 'NUM_DOC', 'DESCR_AJ_BC', 'DT_REF', 'COD_CTA', 'CNPJ', 'INFO_COMPL']
    M615.unshift(headersM615);

    var headersM620 = ['Item Pai', 'Seq', 'REG', 'IND_AJ_BC', 'VL_AJ', 'COD_AJ', 'NUM_DOC', 'DESCR_AJ', 'DT_REF']
    M620.unshift(headersM620);

    var headersM625 = ['COD_AJ', 'Item Pai', 'Seq', 'REG', 'DET_VALOR_AJ', 'CST_COFINS', 'DET_BC_CRED', 'DET_ALIQ', 'DT_OPER_AJ', 'DESC_AJ', 'COD_CTA', 'INFO_COMPL']
    M625.unshift(headersM625);

    var headersM630 = ['Item Pai', 'Seq', 'REG', 'CNPJ', 'VL_VEND', 'VL_NAO_RECEB', 'VL_CONT_DIF', 'VL_CRED_DIF', 'COD_CRED']
    M630.unshift(headersM630);

    var headersM700 = ['Item Pai', 'Seq', 'REG', 'COD_CONT', 'VL_CONT_APUR_DIFER', 'NAT_CRED_DESC', 'VL_CRED_DESC_DIFER', 'VL_CONT_DIFER_ANT', 'PER_APUR', 'DT_RECEB']
    M700.unshift(headersM700);

    var headersM800 = ['Item Pai', 'Seq', 'REG', 'CST_COFINS', 'VL_TOT_REC', 'COD_CTA', 'DESC_COMPL']
    M800.unshift(headersM800);

    var headersM810 = ['Item Pai', 'Seq', 'REG', 'NAT_REC', 'VL_REC', 'COD_CTA', 'DESC_COMPL']
    M810.unshift(headersM810);

    var headersM990 = ['Item Pai', 'Seq', 'REG', 'QTD_LIN_0']
    M990.unshift(headersM990);

    //Salvar nas sheets
    var worksheetR0000 = XLSX.utils.aoa_to_sheet(R0000);
    XLSX.utils.book_append_sheet(workbook, worksheetR0000, 'R0000');

    var worksheetR0001 = XLSX.utils.aoa_to_sheet(R0001);
    XLSX.utils.book_append_sheet(workbook, worksheetR0001, 'R0001');

    var worksheetR0140 = XLSX.utils.aoa_to_sheet(R0140);
    XLSX.utils.book_append_sheet(workbook, worksheetR0140, 'R0140');

    var worksheetR0150 = XLSX.utils.aoa_to_sheet(R0150);
    XLSX.utils.book_append_sheet(workbook, worksheetR0150, 'R0150');

    var worksheetRC010 = XLSX.utils.aoa_to_sheet(RC010);
    XLSX.utils.book_append_sheet(workbook, worksheetRC010, 'RC010');

    var worksheetRC100 = XLSX.utils.aoa_to_sheet(RC100);
    XLSX.utils.book_append_sheet(workbook, worksheetRC100, 'RC100');

    var worksheetRC170 = XLSX.utils.aoa_to_sheet(RC170);
    XLSX.utils.book_append_sheet(workbook, worksheetRC170, 'RC170');

    // Ajustar largura das colunas automaticamente
    var sheetNames = workbook.SheetNames;
    sheetNames.forEach(function (sheetName) {
      var worksheet = workbook.Sheets[sheetName];
      var worksheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      var columnWidths = worksheetData.reduce(function (widths, row) {
        row.forEach(function (cell, columnIndex) {
          var cellValue = cell ? cell.toString() : '';
          var cellLength = cellValue.length;
          widths[columnIndex] = Math.max(widths[columnIndex] || 0, cellLength);
        });

        return widths;
      }, []);

      var columnDefs = columnWidths.map(function (width) {
        return { wch: width };
      });

      worksheet['!cols'] = columnDefs;
    });

    // Gerar o arquivo
    var data = XLSX.write(workbook, { bookType: 'xlsx', type: 'binary' });
    var blob = new Blob([s2ab(data)], { type: 'application/octet-stream' });
    var url = URL.createObjectURL(blob);

    // Criar link de download
    var link = document.createElement('a');
    link.href = url;
    link.download = file.name + '.xlsx';
    link.click();

    document.getElementById('lerArquivo').classList.remove('loading');
    document.getElementById('lerArquivo').textContent = 'Ler Arquivo';
  }

  leitor.readAsText(file);
});

function s2ab(s) {
  var buf = new ArrayBuffer(s.length);
  var view = new Uint8Array(buf);
  for (var i = 0; i < s.length; i++) {
    view[i] = s.charCodeAt(i) & 0xFF;
  }
  return buf;
}


