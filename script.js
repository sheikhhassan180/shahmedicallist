const products = [
    {
        company: "All Products", 
        company: "SYRUPS",
        items: [
            { serialno: "1", name: "ACEFYL COUGH SYP", tp: "13%", ext: "12%", bonus: "16+2", tax: "0.00" },
            { serialno: "2", name: "ACEFYL GREEN SYP", tp: "13%", ext: "3%", bonus: "20+1", tax: "0.00" },
            { serialno: "3", name: "HYDROLINE SYP", tp: "13%", ext: "3%", bonus: "20+1", tax: "0.00" },
            { serialno: "4", name: "HYDROLINE DM SYP", tp: "13%", ext: "0%", bonus: "", tax: "0.00" },
            { serialno: "5", name: "DOLLOR SYP", tp: "13%", ext: "15%", bonus: "15+3", tax: "0.00" },
            { serialno: "6", name: "DOLLOR DS SYP", tp: "13%", ext: "15%", bonus: "15+3", tax: "0.00" },
            { serialno: "7", name: "PULMONOL SYP", tp: "13%", ext: "15%", bonus: "15+3", tax: "0.00" },
            { serialno: "8", name: "CIPLET 125 SYP", tp: "13%", ext: "13%", bonus: "15+2", tax: "0.00" },
            { serialno: "9", name: "CIPLET 250 SYP", tp: "13%", ext: "13%", bonus: "15+2", tax: "0.00" },
            { serialno: "10", name: "CEBOSH PLAN SYP", tp: "13%", ext: "21%", bonus: "10PEC23%", tax: "0.00" },
            { serialno: "11", name: "CEBOSH DS SYP", tp: "13%", ext: "21%", bonus: "10PEC23%", tax: "0.00" },
            { serialno: "12", name: "BRUFEEN SYP", tp: "13%", ext: "0%", bonus: "20+1", tax: "0.00" },
            { serialno: "13", name: "BRUFEEN DS SYP", tp: "13%", ext: "0%", bonus: "20+1", tax: "0.00" },
            { serialno: "14", name: "ARINAC SYP", tp: "13%", ext: "0%", bonus: "20+1", tax: "0.00" },
            { serialno: "15", name: "MUCAINE SYP", tp: "13%", ext: "3%", bonus: "20+1", tax: "0.00" },
            { serialno: "16", name: "ZYRTEC SYP", tp: "13%", ext: "3%", bonus: "20+1", tax: "0.00" },
            { serialno: "17", name: "COLENTICON GEL SYP", tp: "13%", ext: "6%", bonus: "10PEC8%", tax: "0.00" },
            { serialno: "18", name: "OSSOBON D SYP", tp: "13%", ext: "10%", bonus: "5PEC12%", tax: "0.00" },
            { serialno: "19", name: "OSNATE D SYP", tp: "13%", ext: "18%", bonus: "5PEC20%", tax: "0.00" },
            { serialno: "20", name: "SIROLINE SYP", tp: "13%", ext: "7%", bonus: "10PEC 10%", tax: "0.00" },

            { serialno: "21", name: "KLARICID DS SYP", tp: "13%", ext: "3%", bonus: "", tax: "0.00" },
            { serialno: "22", name: "AZOMAX SYP", tp: "13%", ext: "5%", bonus: "10PEC7%", tax: "0.00" },
            { serialno: "23", name: "CELCOR 125 SYP", tp: "13%", ext: "15%", bonus: "5PEC17%", tax: "0.00" },
            { serialno: "24", name: "CELCOR 250 SYP", tp: "13%", ext: "20%", bonus: "5PEC22%", tax: "0.00" },
            { serialno: "25", name: "COMBINOL EE SYP", tp: "13%", ext: "13%", bonus: "10PEC15%", tax: "0.00" },
            { serialno: "26", name: "XYLOR SYP", tp: "13%", ext: "10%", bonus: "10PEC12%", tax: "0.00" },
            { serialno: "27", name: "ZEZOT SYP", tp: "13%", ext: "18%", bonus: "", tax: "0.00" },
            { serialno: "28", name: "MEFNAC SYP", tp: "13%", ext: "10%", bonus: "10PEC12%", tax: "0.00" },
            { serialno: "29", name: "TRISIL SYP", tp: "13%", ext: "10%", bonus: "", tax: "0.00" },
            { serialno: "30", name: "OLCUF PLAN SYP", tp: "13%", ext: "15%", bonus: "", tax: "0.00" },

            { serialno: "31", name: "OLCUF PLUS SYP", tp: "13%", ext: "15%", bonus: "", tax: "0.00" },
            { serialno: "32", name: "MYTIL 125 SYP", tp: "13%", ext: "13%", bonus: "", tax: "0.00" },
            { serialno: "33", name: "VERMOX SYP", tp: "13%", ext: "3%", bonus: "10PEC5%", tax: "0.00" },
            { serialno: "34", name: "URODONAL SYP", tp: "13%", ext: "7%", bonus: "", tax: "0.00" },
            { serialno: "35", name: "HYLIXIA SYP", tp: "13%", ext: "12%", bonus: "", tax: "0.00" },
            { serialno: "36", name: "DROMAX 125 SYP", tp: "13%", ext: "20%", bonus: "", tax: "0.00" },
            { serialno: "37", name: "DROMAX 250 SYP", tp: "13%", ext: "20%", bonus: "", tax: "0.00" },
            { serialno: "38", name: "VELORA 125 SYP", tp: "13%", ext: "7%", bonus: "", tax: "0.00" },
            { serialno: "39", name: "VELORA 250 SYP", tp: "13%", ext: "7%", bonus: "", tax: "0.00" },
            { serialno: "40", name: "BABYNOL SYP", tp: "13%", ext: "5%", bonus: "", tax: "0.00" },

            { serialno: "41", name: "BEIVERA SYP", tp: "13%", ext: "10%", bonus: "", tax: "0.00" },
            { serialno: "42", name: "LEDERPLEX SYP", tp: "13%", ext: "2%", bonus: "10PEC4%", tax: "0.00" },
            { serialno: "43", name: "DR KOFF SYP", tp: "13%", ext: "10%", bonus: "", tax: "0.00" },
            { serialno: "44", name: "RETUS COUGH SYP", tp: "13%", ext: "8%", bonus: "10PEC10%", tax: "0.00" },
            { serialno: "45", name: "OSO D SYP", tp: "13%", ext: "5%", bonus: "", tax: "0.00" },
            { serialno: "46", name: "MAXPAN 100 SYP", tp: "13%", ext: "20%", bonus: "5PEC21%", tax: "0.00" },
            { serialno: "46", name: "MAXPAN 200 SYP", tp: "13%", ext: "20%", bonus: "5PEC21%", tax: "0.00" },

            { serialno: "47", name: "CALAMOX PLAN/DS", tp: "13%", ext: "4%", bonus: "", tax: "0.00" },
            { serialno: "48", name: "VOMILUX SYP", tp: "13%", ext: "3%", bonus: "", tax: "0.00" },
            { serialno: "49", name: "PROSPAN SYP", tp: "13%", ext: "3%", bonus: "", tax: "TP-4%" },
            { serialno: "50", name: "AZITMA SYP", tp: "13%", ext: "5%", bonus: "", tax: "0.00" },

            { serialno: "51", name: "LEXOBRON SYP", tp: "13%", ext: "2%", bonus: "", tax: "0.00" },
            { serialno: "52", name: "CEFEXOL PLAN/DS SYP", tp: "13%", ext: "24%", bonus: "", tax: "0.00" },
            { serialno: "53", name: "ICEF SYP", tp: "13%", ext: "32%", bonus: "", tax: "0.00" },
            { serialno: "54", name: "QPALGITE SYP", tp: "13%", ext: "9%", bonus: "", tax: "0.00" },
            { serialno: "55", name: "QPLEX SYP", tp: "13%", ext: "8%", bonus: "", tax: "0.00" },
            { serialno: "56", name: "FERPLEX 120 SYP", tp: "13%", ext: "14%", bonus: "", tax: "0.00" },
            { serialno: "57", name: "COFREST SYP", tp: "13%", ext: "7%", bonus: "", tax: "0.00" },
            { serialno: "58", name: "FIXITIL SYP", tp: "13%", ext: "12%", bonus: "", tax: "0.00" },
            { serialno: "59", name: "CEDROX 125/250 SYP", tp: "13%", ext: "22%", bonus: "", tax: "0.00" },
            { serialno: "60", name: "REGNUM SYP", tp: "13%", ext: "22%", bonus: "", tax: "0.00" },

            { serialno: "61", name: "CEFIM SYP", tp: "13%", ext: "1%", bonus: "10PEC2%", tax: "0.00" },
            { serialno: "62", name: "MOTILIUM SYP", tp: "13%", ext: "6%", bonus: "10PEC8%", tax: "0.00" },
            { serialno: "63", name: "BARIZOLD SYP", tp: "13%", ext: "10%", bonus: "", tax: "0.00" },
            { serialno: "64", name: "CEFALOR 125 SYP", tp: "13%", ext: "14%", bonus: "", tax: "0.00" },
            { serialno: "65", name: "CEFALOR 250 SYP", tp: "13%", ext: "14%", bonus: "", tax: "0.00" },
            { serialno: "66", name: "LINZIM PLAN SYP", tp: "13%", ext: "24%", bonus: "", tax: "0.00" },
            { serialno: "67", name: "LINZIM DS SYP", tp: "13%", ext: "24%", bonus: "", tax: "0.00" },
            { serialno: "68", name: "EPITIZE SYP", tp: "13%", ext: "10%", bonus: "", tax: "0.00" },
            { serialno: "69", name: "HEOMOCARE SYP", tp: "13%", ext: "20%", bonus: "", tax: "0.00" },
            { serialno: "70", name: "AZOTEK SYP", tp: "13%", ext: "28%", bonus: "", tax: "0.00" },

            { serialno: "71", name: "OMIXIM SYP", tp: "13%", ext: "17%", bonus: "", tax: "0.00" },
            { serialno: "72", name: "WAYBAC SYP", tp: "13%", ext: "30%", bonus: "", tax: "0.00" },
            { serialno: "73", name: "FEXICEFF SYP", tp: "13%", ext: "30%", bonus: "", tax: "0.00" },
            { serialno: "74", name: "BRIVERA SYP", tp: "13%", ext: "9%", bonus: "", tax: "0.00" },
            { serialno: "75", name: "RUBIFER SYP", tp: "13%", ext: "7%", bonus: "", tax: "0.00" },
            { serialno: "76", name: "RELTUS DM SYP", tp: "13%", ext: "4%", bonus: "10PEC5%", tax: "0.00" },
            { serialno: "77", name: "MACLACIN 250 SYP", tp: "13%", ext: "8%", bonus: "", tax: "0.00" },
            { serialno: "78", name: "EFROXIL SYP", tp: "13%", ext: "15%", bonus: "", tax: "0.00" },
            { serialno: "79", name: "CIBCOS IV SYP", tp: "13%", ext: "17%", bonus: "", tax: "0.00" },
            { serialno: "80", name: "PLAZO SYP", tp: "13%", ext: "10%", bonus: "", tax: "0.00" },
        ]
        },
        {
            company: "TAB/CAP",
            items: [
            { serialno: "81", name: "AV-SARTAN 5/80", tp: "13%", ext: "12%", bonus: "5PEC14%", tax: "0.00" },
            { serialno: "82", name: "AV-SARTAN 5/160", tp: "13%", ext: "10%", bonus: "5PEC12%", tax: "0.00" },
            { serialno: "83", name: "AV-SARTAN 10/160", tp: "13%", ext: "10%", bonus: "5PEC12%", tax: "0.00" },
            { serialno: "84", name: "ANAFORTAN PLUS", tp: "13%", ext: "20%", bonus: "5PEC23%", tax: "0.00" },
            { serialno: "85", name: "AZOMAX 250 CAP", tp: "13%", ext: "2%", bonus: "5PEC4%", tax: "0.00" },
            { serialno: "85", name: "AZOMAX 500 TAB", tp: "13%", ext: "5%", bonus: "5PEC7%", tax: "0.00" },
            { serialno: "86", name: "MOM FOLIC 400MG TAB", tp: "13%", ext: "15%", bonus: "", tax: "0.00" },
            { serialno: "87", name: "SURBEX Z TAB", tp: "13%", ext: "0%", bonus: "", tax: "0.00" },
            { serialno: "88", name: "NUBEROL FORTE TAB", tp: "13%", ext: "2%", bonus: "10PEC3%", tax: "0.00" },
            { serialno: "89", name: "PANADOL TAB", tp: "13%", ext: "NET", bonus: "640", tax: "0.00" },
            { serialno: "90", name: "XOBIX 7.5 TAB", tp: "13%", ext: "3%", bonus: "5PEC4%", tax: "0.00" },

            { serialno: "91", name: "CYROCIN 250 TAB +1", tp: "13%", ext: "5%", bonus: "5PEC6%", tax: "0.00" },
            { serialno: "92", name: "CYROCIN 500 TAB +1", tp: "13%", ext: "5%", bonus: "5PEC6%", tax: "0.00" },
            { serialno: "93", name: "SERT 50 TAB", tp: "13%", ext: "2%", bonus: "", tax: "0.00" },
            { serialno: "94", name: "SARTAN 50 TAB", tp: "13%", ext: "2%", bonus: "", tax: "0.00" },
            { serialno: "95", name: "KLARICID 250 TAB", tp: "13%", ext: "2%", bonus: "5PEC3%", tax: "0.00" },
            { serialno: "95", name: "KLARICID 500 TAB", tp: "13%", ext: "2%", bonus: "5PEC3%", tax: "0.00" },
            { serialno: "96", name: "FONAZ TAB", tp: "13%", ext: "10%", bonus: "", tax: "0.00" },
            { serialno: "97", name: "RIGIX TAB", tp: "13%", ext: "0%", bonus: "5PEC1%", tax: "0.00" },
            { serialno: "98", name: "MOTILIUM TAB", tp: "13%", ext: "5%", bonus: "5PEC7%", tax: "0.00" },
            { serialno: "99", name: "OSNATE D TAB", tp: "13%", ext: "5%", bonus: "5PEC7%", tax: "0.00" },
            { serialno: "100", name: "NEOPROX 500 TAB", tp: "13%", ext: "2%", bonus: "", tax: "0.00" },

            { serialno: "101", name: "BREXIN TAB    OLD BOX", tp: "13%", ext: "5%", bonus: "5PEC7%", tax: "0.00" },
            { serialno: "102", name: "TUCANA 400 TAB", tp: "13%", ext: "4%", bonus: "5PEC5%", tax: "0.00" },
            { serialno: "103", name: "INSPRA 10 TAB", tp: "13%", ext: "12%", bonus: "", tax: "0.00" },
            { serialno: "104", name: "S.T MOM TAB", tp: "13%", ext: "10%", bonus: "5PEC12%", tax: "0.00" },
            { serialno: "105", name: "TRISIL TAB", tp: "13%", ext: "3%", bonus: "", tax: "0.00" },
            { serialno: "106", name: "SITA MET 50/500", tp: "13%", ext: "2%", bonus: "3PEC3%", tax: "0.00" },
            { serialno: "107", name: "SITA MET 50/100", tp: "13%", ext: "4%", bonus: "", tax: "0.00" },
            { serialno: "108", name: "SITA MET XR 50/500", tp: "13%", ext: "4%", bonus: "", tax: "0.00" },
            { serialno: "109", name: "TERBEDERM 125 TAB", tp: "13%", ext: "3%", bonus: "", tax: "0.00" },
            { serialno: "110", name: "TERBEDERM FORTE TAB", tp: "13%", ext: "4%", bonus: "5PEC5%", tax: "0.00" },

            { serialno: "111", name: "SINAXAMOL TAB", tp: "13%", ext: "17%", bonus: "", tax: "0.00" },
            { serialno: "112", name: "IMODIUM CAP", tp: "13%", ext: "5%", bonus: "5PEC7%", tax: "0.00" },
            { serialno: "113", name: "APRANAX 550", tp: "13%", ext: "5%", bonus: "3PEC6%", tax: "0.00" },
            { serialno: "114", name: "UNIX 100 TAB", tp: "13%", ext: "8%", bonus: "5PEC10%", tax: "0.00" },
            { serialno: "115", name: "SPRONAX TAB", tp: "13%", ext: "5%", bonus: "", tax: "0.00" },
            { serialno: "116", name: "CECLOR 250 CAP", tp: "13%", ext: "16%", bonus: "5PEC18%", tax: "0.00" },
            { serialno: "116", name: "CECLOR 500 CAP", tp: "13%", ext: "18%", bonus: "3PEC20%", tax: "0.00" },
            { serialno: "117", name: "INOQIN 250 TAB", tp: "13%", ext: "17%", bonus: "", tax: "0.00" },
            { serialno: "117", name: "INOQIN 500 TAB", tp: "13%", ext: "17%", bonus: "", tax: "0.00" },
            { serialno: "118", name: "INOSITA PLUS 50/500", tp: "13%", ext: "1%", bonus: "", tax: "0.00" },
            { serialno: "118", name: "INOSITA PLUS 50/850", tp: "13%", ext: "2%", bonus: "", tax: "0.00" },
            { serialno: "118", name: "INOSITA PLUS 50/1000", tp: "13%", ext: "2%", bonus: "", tax: "0.00" },
            { serialno: "119", name: "ANTAIL TAB", tp: "13%", ext: "3%", bonus: "5PEC4%", tax: "0.00" },
            { serialno: "120", name: "TRAMAL TAB", tp: "13%", ext: "3%", bonus: "5PEC4%", tax: "0.00" },

            { serialno: "121", name: "TRAMAPAR TAB", tp: "13%", ext: "13%", bonus: "10PEC15%", tax: "0.00" },
            { serialno: "122", name: "DICLORAN TAB", tp: "13%", ext: "2%", bonus: "", tax: "0.00" },
            { serialno: "123", name: "JOVIT TAB    LP", tp: "13%", ext: "3%", bonus: "", tax: "0.00" },
            { serialno: "124", name: "CELBEX 100/200 CAP", tp: "13%", ext: "4%", bonus: "5PEC5%", tax: "0.00" },
            { serialno: "124", name: "CELBEX 200 CAP", tp: "13%", ext: "2%", bonus: "5PEC3%", tax: "0.00" },
            { serialno: "125", name: "GLYZIAMET 50/500", tp: "13%", ext: "40%", bonus: "3PEC42%", tax: "0.00" },
            { serialno: "125", name: "GLYZIAMET 50/1000", tp: "13%", ext: "40%", bonus: "3PEC42%", tax: "0.00" },
            { serialno: "126", name: "ARINAC TAB", tp: "13%", ext: "2%", bonus: "", tax: "0.00" },
            { serialno: "127", name: "ARINAC FORTE TAB    LP", tp: "13%", ext: "3%", bonus: "", tax: "0.00" },
            { serialno: "128", name: "GIVA M 50/500", tp: "13%", ext: "10%", bonus: "3PEC12%", tax: "0.00" },
            { serialno: "128", name: "GIVA M 50/850", tp: "13%", ext: "10%", bonus: "3PEC12%", tax: "0.00" },
            { serialno: "128", name: "GIVA M 50/1000", tp: "13%", ext: "10%", bonus: "3PEC12%", tax: "0.00" },
            { serialno: "129", name: "GABICA 100 TAB", tp: "13%", ext: "3%", bonus: "", tax: "0.00" },
            { serialno: "130", name: "ARTIFEN TAB", tp: "13%", ext: "2%", bonus: "3PEC3%", tax: "0.00" },

            { serialno: "131", name: "EZOMOL 20 CAP", tp: "13%", ext: "3%", bonus: "", tax: "0.00" },
            { serialno: "131", name: "EZOMOL 40 CAP", tp: "13%", ext: "3%", bonus: "", tax: "0.00" },
            { serialno: "132", name: "GIVA 50 TAB", tp: "13%", ext: "8%", bonus: "", tax: "0.00" },
            { serialno: "132", name: "GIVA 100 TAB", tp: "13%", ext: "8%", bonus: "", tax: "0.00" },
            { serialno: "133", name: "KLARICID XL TAB", tp: "13%", ext: "3%", bonus: "", tax: "0.00" },
            { serialno: "134", name: "MELFAX 7.5 TAB", tp: "13%", ext: "12%", bonus: "", tax: "0.00" },
            { serialno: "135", name: "OSNATE 800", tp: "13%", ext: "18%", bonus: "", tax: "0.00" },
            { serialno: "136", name: "DYCLO P 50", tp: "13%", ext: "5%", bonus: "", tax: "0.00" },
            { serialno: "137", name: "BARILOL 5 TAB", tp: "13%", ext: "3%", bonus: "", tax: "0.00" },
            { serialno: "138", name: "DOMEL TAB", tp: "13%", ext: "8%", bonus: "", tax: "0.00" },
            { serialno: "139", name: "ROSUBAR 10", tp: "13%", ext: "10%", bonus: "", tax: "0.00" },
            { serialno: "139", name: "ROSUBAR 20", tp: "13%", ext: "10%", bonus: "", tax: "0.00" },
            { serialno: "140", name: "BEASY 5", tp: "13%", ext: "12%", bonus: "", tax: "0.00" },
            { serialno: "140", name: "BEASY 10", tp: "13%", ext: "12%", bonus: "", tax: "0.00" },
            { serialno: "140", name: "BEASY 20", tp: "13%", ext: "12%", bonus: "", tax: "0.00" },

            { serialno: "141", name: "HELEZOL 20 CAP", tp: "13%", ext: "30%", bonus: "", tax: "0.00" },
            { serialno: "141", name: "HELEZOL 40 CAP", tp: "13%", ext: "30%", bonus: "", tax: "0.00" },
            { serialno: "142", name: "ALOC 60", tp: "13%", ext: "15%", bonus: "", tax: "0.00" },
            { serialno: "142", name: "ALOC 120", tp: "13%", ext: "15%", bonus: "", tax: "0.00" },
            { serialno: "143", name: "NEOPRES 5 TAB", tp: "13%", ext: "30%", bonus: "", tax: "0.00" },
            { serialno: "143", name: "NEOPRES 10 TAB", tp: "13%", ext: "30%", bonus: "", tax: "0.00" },
            { serialno: "144", name: "GLYSET 1 TAB", tp: "13%", ext: "12%", bonus: "", tax: "0.00" },
            { serialno: "144", name: "GLYSET 2 TAB", tp: "13%", ext: "12%", bonus: "", tax: "0.00" },
            { serialno: "144", name: "GLYSET 3 TAB", tp: "13%", ext: "12%", bonus: "", tax: "0.00" },
            { serialno: "144", name: "GLYSET 4 TAB", tp: "13%", ext: "12%", bonus: "", tax: "0.00" },
            { serialno: "145", name: "EXAPRO 5 TAB", tp: "13%", ext: "12%", bonus: "", tax: "0.00" },
            { serialno: "145", name: "EXAPRO 10 TAB", tp: "13%", ext: "12%", bonus: "", tax: "0.00" },
            { serialno: "145", name: "EXAPRO 20 TAB", tp: "13%", ext: "12%", bonus: "", tax: "0.00" },
            { serialno: "146", name: "MERCIP 250 TAB", tp: "13%", ext: "20%", bonus: "", tax: "0.00" },
            { serialno: "146", name: "MERCIP 250 TAB", tp: "13%", ext: "20%", bonus: "", tax: "0.00" },
            { serialno: "147", name: "CORBIS 2.5 TAB", tp: "13%", ext: "23%", bonus: "", tax: "0.00" },
            { serialno: "147", name: "CORBIS 5 TAB", tp: "13%", ext: "23%", bonus: "", tax: "0.00" },
            { serialno: "148", name: "COVANCE 10/160 TAB", tp: "13%", ext: "10%", bonus: "", tax: "0.00" },
            { serialno: "149", name: "EMPAGEN L 5", tp: "13%", ext: "12%", bonus: "", tax: "0.00" },
            { serialno: "149", name: "EMPAGEN L 10", tp: "13%", ext: "12%", bonus: "", tax: "0.00" },
            { serialno: "150", name: "XAVOR DIU TAB", tp: "13%", ext: "10%", bonus: "", tax: "0.00" },

            { serialno: "151", name: "DIMIS 50/200", tp: "13%", ext: "10%", bonus: "", tax: "0.00" },
            { serialno: "152", name: "DIMIS 75/200", tp: "13%", ext: "10%", bonus: "", tax: "0.00" },
            { serialno: "153", name: "LETS 2.5 TAB", tp: "13%", ext: "12%", bonus: "", tax: "0.00" },
            { serialno: "154", name: "CIPESTA 250 TAB", tp: "13%", ext: "12%", bonus: "", tax: "0.00" },
            { serialno: "155", name: "DAPLYZA 10", tp: "13%", ext: "12%", bonus: "", tax: "0.00" },
            { serialno: "156", name: "MONTIGET 10", tp: "13%", ext: "1%", bonus: "", tax: "0.00" },
            { serialno: "157", name: "ZAVGET 20 TAB", tp: "13%", ext: "28%", bonus: "", tax: "0.00" },
            { serialno: "158", name: "XETICAM 250", tp: "13%", ext: "27%", bonus: "", tax: "0.00" },
            { serialno: "159", name: "CARLOV 25", tp: "13%", ext: "12%", bonus: "", tax: "0.00" },
            { serialno: "160", name: "PROXEN 500    OLD", tp: "13%", ext: "10%", bonus: "", tax: "0.00" },

            { serialno: "161", name: "CHYMORAL FORTE TAB", tp: "13%", ext: "3%", bonus: "", tax: "0.00" },
            { serialno: "162", name: "LUCAST 10 MG TAB", tp: "13%", ext: "4%", bonus: "", tax: "0.00" },
            { serialno: "163", name: "RUBIFER TAB", tp: "13%", ext: "26%", bonus: "", tax: "0.00" },
            { serialno: "163", name: "RUBIFER F TAB", tp: "13%", ext: "26%", bonus: "", tax: "0.00" },
            { serialno: "164", name: "CEBOSH 200 TAB", tp: "13%", ext: "20%", bonus: "10PEC22%", tax: "0.00" },
            { serialno: "164", name: "CEBOSH 200 CAP", tp: "13%", ext: "18%", bonus: "10PEC20%", tax: "0.00" },
            { serialno: "164", name: "CEBOSH 400 TAB", tp: "13%", ext: "20%", bonus: "10PEC22%", tax: "0.00" },
            { serialno: "164", name: "CEBOSH 400 CAP", tp: "13%", ext: "18%", bonus: "10PEC20%", tax: "0.00" },
            { serialno: "165", name: "EMPAPHAGE 10", tp: "13%", ext: "22%", bonus: "", tax: "0.00" },
            { serialno: "166", name: "URSO 250 CAP", tp: "13%", ext: "5%", bonus: "", tax: "0.00" },
            { serialno: "166", name: "URSO 500 CAP", tp: "13%", ext: "5%", bonus: "", tax: "0.00" },
            { serialno: "167", name: "AZATCO 250 TAB", tp: "13%", ext: "14%", bonus: "", tax: "0.00" },
            { serialno: "168", name: "AMPICLOX 500 CAP", tp: "13%", ext: "2%", bonus: "", tax: "0.00" },
            { serialno: "169", name: "LEXOTANIL 3MG TAB", tp: "13%", ext: "7%", bonus: "10PEC10%", tax: "0.00" },
            { serialno: "170", name: "EXAPRO 5 TAB", tp: "13%", ext: "12%", bonus: "", tax: "0.00" },
            { serialno: "170", name: "EXAPRO 10 TAB", tp: "13%", ext: "12%", bonus: "", tax: "0.00" },
            { serialno: "170", name: "EXAPRO 20 TAB", tp: "13%", ext: "12%", bonus: "", tax: "0.00" },

            { serialno: "171", name: "VALCARD 5/80", tp: "13%", ext: "30%", bonus: "", tax: "0.00" },
            { serialno: "171", name: "VALCARD 5/160", tp: "13%", ext: "30%", bonus: "", tax: "0.00" },
            { serialno: "171", name: "VALCARD 10/160", tp: "13%", ext: "30%", bonus: "", tax: "0.00" },
            { serialno: "172", name: "SITAGEN M 50/500 TAB", tp: "13%", ext: "10%", bonus: "", tax: "0.00" },
            { serialno: "173", name: "JUST N TAB", tp: "13%", ext: "5%", bonus: "", tax: "0.00" },
            { serialno: "174", name: "GEBON PLAN", tp: "13%", ext: "5%", bonus: "", tax: "TP-3%" },
            { serialno: "174", name: "GEBON PLUS", tp: "13%", ext: "5%", bonus: "", tax: "TP-3%" },
            { serialno: "175", name: "TANSIN DIU TAB", tp: "13%", ext: "13%", bonus: "", tax: "0.00" },
            { serialno: "176", name: "DAPLYZA 10 MG TAB", tp: "13%", ext: "10%", bonus: "", tax: "0.00" },
            { serialno: "177", name: "TASMI 20 TAB", tp: "13%", ext: "15%", bonus: "", tax: "0.00" },
            { serialno: "178", name: "FEFOL VIT CAP", tp: "13%", ext: "2%", bonus: "", tax: "0.00" },
            { serialno: "179", name: "IROCON 150 TAB", tp: "13%", ext: "6%", bonus: "", tax: "0.00" },
            { serialno: "179", name: "IROCON 300 TAB", tp: "13%", ext: "6%", bonus: "", tax: "0.00" },
            { serialno: "180", name: "S GLIPTIN PLUS 50+500 TAB", tp: "13%", ext: "7%", bonus: "", tax: "0.00" },

            { serialno: "181", name: "S GLIPTIN PLUS 50+1000 TAB", tp: "13%", ext: "7%", bonus: "", tax: "0.00" },
            { serialno: "182", name: "LALAP 100 TAB", tp: "13%", ext: "5%", bonus: "", tax: "0.00" },
            { serialno: "183", name: "BARICA 120 TAB", tp: "13%", ext: "4%", bonus: "", tax: "0.00" },
            { serialno: "183", name: "BARICA 60/120 TAB", tp: "13%", ext: "2%", bonus: "", tax: "0.00" },
            { serialno: "184", name: "SOFVASC-V 10/160", tp: "13%", ext: "5%", bonus: "", tax: "0.00" },
            { serialno: "184", name: "SOFVASC-V 5/160", tp: "13%", ext: "5%", bonus: "", tax: "0.00" },
            { serialno: "185", name: "NEO SPASLAR TAB", tp: "13%", ext: "6%", bonus: "", tax: "0.00" },
            { serialno: "186", name: "NUROMET TAB", tp: "13%", ext: "4%", bonus: "", tax: "0.00" },
            { serialno: "187", name: "OSSOBON D TAB", tp: "13%", ext: "5%", bonus: "", tax: "0.00" },
            { serialno: "188", name: "BARIZOLD 400", tp: "13%", ext: "16%", bonus: "", tax: "0.00" },
            { serialno: "188", name: "BARIZOLD 600", tp: "13%", ext: "22%", bonus: "", tax: "0.00" },
            { serialno: "189", name: "TERLAX 2/4", tp: "13%", ext: "22%", bonus: "", tax: "0.00" },
            { serialno: "190", name: "QUINOFLEX 250 TAB", tp: "13%", ext: "38%", bonus: "", tax: "0.00" },

            { serialno: "191", name: "ZEZOT 500 TAB", tp: "13%", ext: "15%", bonus: "", tax: "0.00" },
            { serialno: "192", name: "SAKOON TAB", tp: "13%", ext: "23%", bonus: "", tax: "0.00" },
            { serialno: "193", name: "FLEXIA 60 TAB", tp: "13%", ext: "8%", bonus: "", tax: "0.00" },
            { serialno: "194", name: "BLOCKIUM 25 TAB", tp: "13%", ext: "5%", bonus: "", tax: "0.00" },
            { serialno: "195", name: "MISAR AM 10/40", tp: "13%", ext: "5%", bonus: "", tax: "0.00" },
            { serialno: "195", name: "MISAR AM 5/80", tp: "13%", ext: "5%", bonus: "", tax: "0.00" },
            { serialno: "196", name: "CAL ONE D TAB", tp: "13%", ext: "17%", bonus: "", tax: "0.00" },
            { serialno: "197", name: "K 1000 TAB", tp: "13%", ext: "5%", bonus: "", tax: "0.00" },
            { serialno: "198", name: "NUBEROL TAB", tp: "13%", ext: "2%", bonus: "", tax: "0.00" },
            { serialno: "199", name: "VITRUM TAB", tp: "13%", ext: "4%", bonus: "", tax: "0.00" },
            { serialno: "200", name: "OMEZOL 20/40 CAP", tp: "13%", ext: "28%", bonus: "", tax: "0.00" },
            { serialno: "200", name: "OMEZOL 20/40 CAP", tp: "13%", ext: "30%", bonus: "", tax: "0.00" },

            { serialno: "201", name: "ZESTRIL 5 TAB", tp: "13%", ext: "3%", bonus: "", tax: "0.00" },
            { serialno: "201", name: "ZESTRIL 20 TAB", tp: "13%", ext: "3%", bonus: "", tax: "0.00" },
            { serialno: "202", name: "MAXPAN 200/400", tp: "13%", ext: "20%", bonus: "", tax: "0.00" },
            { serialno: "202", name: "MAXPAN 200/400", tp: "13%", ext: "20%", bonus: "", tax: "0.00" },
            { serialno: "203", name: "TERNELIN 2 TAB", tp: "13%", ext: "6%", bonus: "", tax: "0.00" },
            { serialno: "203", name: "TERNELIN 4 TAB", tp: "13%", ext: "6%", bonus: "", tax: "0.00" },
            { serialno: "204", name: "ABOCAL TAB", tp: "13%", ext: "7%", bonus: "", tax: "0.00" },
            { serialno: "205", name: "LEVOPEAID 25 TAB", tp: "13%", ext: "8%", bonus: "", tax: "0.00" },
            { serialno: "206", name: "AD FOLIC 300", tp: "13%", ext: "3%", bonus: "", tax: "0.00" },
            { serialno: "207", name: "AD FOLIC OD 600", tp: "13%", ext: "3%", bonus: "", tax: "0.00" },
            { serialno: "208", name: "TANSIN DIU TAB", tp: "13%", ext: "11%", bonus: "", tax: "0.00" },
            { serialno: "209", name: "PLAZO 250", tp: "13%", ext: "6%", bonus: "", tax: "0.00" },
            { serialno: "209", name: "PLAZO 500", tp: "13%", ext: "6%", bonus: "", tax: "0.00" },
            { serialno: "210", name: "TERBISIL 125 TAB", tp: "13%", ext: "4%", bonus: "", tax: "0.00" },
            { serialno: "210", name: "TERBISIL 250 TAB", tp: "13%", ext: "4%", bonus: "", tax: "0.00" },

            { serialno: "211", name: "DURAGESIC TAB", tp: "13%", ext: "6%", bonus: "", tax: "0.00" },
            { serialno: "212", name: "FIXITIL 400 CAP", tp: "13%", ext: "17%", bonus: "", tax: "0.00" },
            { serialno: "213", name: "CARDACE 5", tp: "13%", ext: "8%", bonus: "", tax: "0.00" },
            { serialno: "214", name: "FAMILA TAB", tp: "13%", ext: "16%", bonus: "", tax: "0.00" },
            { serialno: "215", name: "MELFAX 15 TAB", tp: "13%", ext: "12%", bonus: "", tax: "0.00" },
            { serialno: "216", name: "XYLOR 10", tp: "13%", ext: "13%", bonus: "", tax: "0.00" },
            { serialno: "217", name: "DIABOLD 1 TAB", tp: "13%", ext: "15%", bonus: "", tax: "0.00" },
            { serialno: "217", name: "DIABOLD 2 TAB", tp: "13%", ext: "15%", bonus: "", tax: "0.00" },
            { serialno: "217", name: "DIABOLD 3 TAB", tp: "13%", ext: "15%", bonus: "", tax: "0.00" },
            { serialno: "217", name: "DIABOLD 4 TAB", tp: "13%", ext: "15%", bonus: "", tax: "0.00" },
            { serialno: "218", name: "CIPROXIN 500", tp: "13%", ext: "5%", bonus: "", tax: "0.00" },
            { serialno: "219", name: "DURAGESIC FORTE TAB", tp: "13%", ext: "4%", bonus: "", tax: "0.00" },
            { serialno: "220", name: "QBAL TAB", tp: "13%", ext: "25%", bonus: "", tax: "0.00" },

            { serialno: "221", name: "NUROMET SL TAB", tp: "13%", ext: "4%", bonus: "", tax: "0.00" },
            { serialno: "222", name: "BETALOC ZOK TAB", tp: "13%", ext: "6%", bonus: "", tax: "0.00" },
            { serialno: "223", name: "LEPRIDE 25 TAB", tp: "13%", ext: "9%", bonus: "", tax: "0.00" },
            { serialno: "224", name: "ROVISTA 5", tp: "13%", ext: "2%", bonus: "", tax: "0.00" },
            { serialno: "224", name: "ROVISTA 10", tp: "13%", ext: "2%", bonus: "", tax: "0.00" },
            { serialno: "225", name: "NOGERD 50", tp: "13%", ext: "10%", bonus: "", tax: "0.00" },
            { serialno: "226", name: "XEFECTA 400 TAB", tp: "13%", ext: "10%", bonus: "", tax: "0.00" },
            { serialno: "227", name: "EZILAX TAB", tp: "13%", ext: "15%", bonus: "", tax: "0.00" },
            { serialno: "228", name: "SPASFON TAB", tp: "13%", ext: "10%", bonus: "", tax: "0.00" },
            { serialno: "229", name: "MEDIGESIC PLAN", tp: "13%", ext: "17%", bonus: "", tax: "0.00" },
            { serialno: "229", name: "MEDIGESIC FORTE", tp: "13%", ext: "17%", bonus: "", tax: "0.00" },
            { serialno: "230", name: "OFLOX 200", tp: "13%", ext: "13%", bonus: "5PEC15%", tax: "0.00" },

            { serialno: "231", name: "MONIS 20", tp: "13%", ext: "8%", bonus: "", tax: "0.00" },
            { serialno: "232", name: "CLOMID TAB", tp: "13%", ext: "6%", bonus: "", tax: "0.00" },
            { serialno: "233", name: "NOCID 20 TAB", tp: "13%", ext: "12%", bonus: "", tax: "0.00" },
            { serialno: "233", name: "NOCID 40 TAB", tp: "13%", ext: "12%", bonus: "", tax: "0.00" },
            { serialno: "234", name: "DIANE 35 TAB", tp: "13%", ext: "5%", bonus: "", tax: "0.00" },
            { serialno: "235", name: "RELISPA 40", tp: "13%", ext: "8%", bonus: "", tax: "0.00" },
            { serialno: "236", name: "RELINE 50MG TAB", tp: "13%", ext: "12%", bonus: "", tax: "0.00" },
            { serialno: "237", name: "DIAGESIC EXTRA TAB", tp: "13%", ext: "12%", bonus: "", tax: "0.00" },
            { serialno: "237", name: "DIAGESIC P TAB", tp: "13%", ext: "12%", bonus: "", tax: "0.00" },
            { serialno: "238", name: "PHLOGIN 50 CAP", tp: "13%", ext: "8%", bonus: "", tax: "0.00" },
            { serialno: "239", name: "BRIAX 20MG TAB", tp: "13%", ext: "10%", bonus: "", tax: "0.00" },
            { serialno: "240", name: "QUMIC 250 TAB", tp: "13%", ext: "15%", bonus: "", tax: "0.00" },
            { serialno: "240", name: "QUMIC 500 TAB", tp: "13%", ext: "15%", bonus: "", tax: "0.00" },
        ]


    },
    {
        company: "INJ",
        items: [
            { serialno: "241", name: "BOFLGAN INJ", tp: "13%", ext: "10%", bonus: "", tax: "0.00" },
            { serialno: "242", name: "CEFOTAX 250 INJ", tp: "13%", ext: "22%", bonus: "", tax: "0.00" },
            { serialno: "243", name: "CEFXONE 2G INJ", tp: "13%", ext: "33%", bonus: "", tax: "0.00" },
            { serialno: "244", name: "OLINC 300 INJ", tp: "13%", ext: "22%", bonus: "", tax: "0.00" },
            { serialno: "244", name: "OLINC 600 INJ", tp: "13%", ext: "22%", bonus: "", tax: "0.00" },
            { serialno: "245", name: "OMEZOLE INJ", tp: "13%", ext: "40%", bonus: "", tax: "0.00" },
            { serialno: "246", name: "SUNNY D INJ", tp: "13%", ext: "4%", bonus: "", tax: "0.00" },
            { serialno: "247", name: "HI CORTISONE 100 INJ", tp: "13%", ext: "18%", bonus: "", tax: "0.00" },
            { serialno: "247", name: "HI CORTISONE 250 INJ", tp: "13%", ext: "23%", bonus: "", tax: "0.00" },
            { serialno: "248", name: "TANZO 2.5 INJ", tp: "13%", ext: "12%", bonus: "", tax: "0.00" },
            { serialno: "248", name: "TANZO 4.5 INJ", tp: "13%", ext: "12%", bonus: "", tax: "0.00" },
            { serialno: "249", name: "ANAFORTAN INJ", tp: "13%", ext: "28%", bonus: "", tax: "0.00" },
            { serialno: "250", name: "INDROP D INJ", tp: "13%", ext: "5%", bonus: "", tax: "0.00" },
            { serialno: "251", name: "RISEK INJ", tp: "13%", ext: "12%", bonus: "", tax: "0.00" },
            { serialno: "252", name: "TORADOL INJ", tp: "13%", ext: "10%", bonus: "", tax: "0.00" },
            { serialno: "253", name: "D TRES INJ", tp: "13%", ext: "4%", bonus: "", tax: "0.00" },
            { serialno: "254", name: "RUBIJECT INJ", tp: "13%", ext: "55%", bonus: "", tax: "0.00" },
            { serialno: "255", name: "MULTINOTA INJ", tp: "13%", ext: "3%", bonus: "", tax: "0.00" },
            { serialno: "256", name: "FAMILA INJ", tp: "13%", ext: "17%", bonus: "", tax: "0.00" },
            { serialno: "257", name: "TITAN 250 INJ", tp: "13%", ext: "22%", bonus: "", tax: "0.00" },
            { serialno: "258", name: "SPASRID INJ", tp: "13%", ext: "12%", bonus: "", tax: "0.00" },
        ]
    },
    {
        company: "CREAMS",
        items: [
            { serialno: "259", name: "BETADERM N CREAM", tp: "13%", ext: "8%", bonus: "", tax: "0.00" },
            { serialno: "260", name: "BETADERM NM CREAM", tp: "13%", ext: "3%", bonus: "", tax: "0.00" },
            { serialno: "261", name: "CUREZOLE TAB", tp: "13%", ext: "2%", bonus: "", tax: "0.00" },
            { serialno: "262", name: "RASHNIL CREAM", tp: "13%", ext: "2%", bonus: "", tax: "0.00" },
            { serialno: "263", name: "LAZMA CREAM", tp: "13%", ext: "30%", bonus: "", tax: "0.00" },
            { serialno: "264", name: "QUENCH CREAM", tp: "13%", ext: "2%", bonus: "", tax: "0.00" },
            { serialno: "265", name: "DAKTARIN GYNO CREAM", tp: "13%", ext: "4%", bonus: "", tax: "0.00" },
            { serialno: "266", name: "AQUAZOLE CREAM", tp: "13%", ext: "22%", bonus: "", tax: "0.00" },
            { serialno: "267", name: "FUSIDERM CREAM", tp: "13%", ext: "18%", bonus: "", tax: "0.00" },
            { serialno: "268", name: "FUSIDERM H CREAM", tp: "13%", ext: "18", bonus: "", tax: "0.00" },
            { serialno: "269", name: "PROVATE G CREAM", tp: "13%", ext: "3%", bonus: "", tax: "0.00" },
            { serialno: "270", name: "TRAVOCORT CREAM", tp: "13%", ext: "3%", bonus: "", tax: "0.00" },
            { serialno: "271", name: "ADVANTAN CREAM", tp: "13%", ext: "0%", bonus: "", tax: "0.00" },
            { serialno: "272", name: "BRUFEN CREAM", tp: "13%", ext: "12%", bonus: "", tax: "0.00" },
            { serialno: "273", name: "DEEP HEAT CREAM", tp: "13%", ext: "3%", bonus: "", tax: "0.00" },
            { serialno: "274", name: "FLYTRO CREAM", tp: "13%", ext: "2%", bonus: "", tax: "0.00" },
            { serialno: "275", name: "SERTAZOL CREAM", tp: "13%", ext: "35%", bonus: "", tax: "0.00" },
            { serialno: "276", name: "FUSIL HC CREAM", tp: "13%", ext: "3%", bonus: "", tax: "0.00" },
            { serialno: "277", name: "CUTIS CREAM", tp: "13%", ext: "7%", bonus: "", tax: "0.00" },
            { serialno: "278", name: "ACTNISE CREAM", tp: "13%", ext: "42%", bonus: "", tax: "0.00" }
        ]
    },
    {
        company: "SACHES",
        items: [
            { serialno: "279", name: "FIBROCOL SACHE", tp: "13%", ext: "22%", bonus: "", tax: "TP-5%" },
            { serialno: "280", name: "BIFLOR SACHE", tp: "13%", ext: "7%", bonus: "", tax: "0.00" },
            { serialno: "281", name: "ENFLOR SACHE", tp: "13%", ext: "5%", bonus: "", tax: "0.00" },
            { serialno: "282", name: "MYCHITOL PLUS SACHE", tp: "13%", ext: "5%", bonus: "", tax: "0.00" },
            { serialno: "283", name: "MYTEKA SACHE NET", tp: "13%", ext: "NET420", bonus: "", tax: "0.00" },
            { serialno: "284", name: "K OSNATE D SACHE", tp: "13%", ext: "15%", bonus: "", tax: "0.00" },
            { serialno: "285", name: "ACTIFILOR SACHE", tp: "13%", ext: "15%", bonus: "", tax: "0.00" },
            { serialno: "286", name: "CALCEE PLUS SACHE", tp: "13%", ext: "12%", bonus: "", tax: "0.00" },
            { serialno: "287", name: "FERFER SACHE", tp: "13%", ext: "7%", bonus: "", tax: "0.00" },
            { serialno: "288", name: "URODONAL SACHE", tp: "13%", ext: "8%", bonus: "", tax: "0.00" },
            { serialno: "289", name: "PLANTICAL SACHE", tp: "13%", ext: "40%", bonus: "", tax: "0.00" },
            { serialno: "290", name: "FIBO SACHE", tp: "13%", ext: "4%", bonus: "", tax: "0.00" },
            { serialno: "291", name: "COLOSPAS SACHE", tp: "13%", ext: "10%", bonus: "", tax: "0.00" },
            { serialno: "292", name: "CRANBERRY SACHE", tp: "NET", ext: "150", bonus: "", tax: "0.00" }
        ]
    },
    {
        company: "DROP/SOL/OINT/GEL",
        items: [
            { serialno: "293", name: "CECLOR DROP", tp: "13%", ext: "15%", bonus: "", tax: "0.00" },
            { serialno: "294", name: "NEBRA EYE DROP", tp: "13%", ext: "5%", bonus: "", tax: "0.00" },
            { serialno: "295", name: "MOXIGAN DROP", tp: "13%", ext: "15%", bonus: "", tax: "0.00" },
            { serialno: "296", name: "CIPOTIC DROP", tp: "13%", ext: "5%", bonus: "", tax: "0.00" },
            { serialno: "297", name: "CIPOCAINE DROP", tp: "13%", ext: "5%", bonus: "", tax: "0.00" },
            { serialno: "298", name: "PANADOL DROP", tp: "13%", ext: "5%", bonus: "", tax: "0.00" },
            { serialno: "299", name: "OSPOR SOL", tp: "13%", ext: "7%", bonus: "", tax: "TP-4" },
            { serialno: "300", name: "CLENIL A,C SOL NO BOX", tp: "13%", ext: "4%", bonus: "", tax: "0.00" },
            { serialno: "301", name: "COSOPT SOL", tp: "13%", ext: "22%", bonus: "", tax: "0.00" },
            { serialno: "302", name: "ADVACORT OINT", tp: "13%", ext: "12%", bonus: "", tax: "0.00" },
            { serialno: "303", name: "BETADERM OINT", tp: "13%", ext: "7%", bonus: "", tax: "0.00" },
            { serialno: "304", name: "NEBRA OINT", tp: "13%", ext: "7%", bonus: "", tax: "0.00" },
            { serialno: "305", name: "PROVATE G/S OINT", tp: "13%", ext: "7%", bonus: "", tax: "0.00" },
            { serialno: "306", name: "HEALIT OINT", tp: "13%", ext: "4%", bonus: "", tax: "0.00" },
            { serialno: "307", name: "DAKTARIN GEL", tp: "13%", ext: "4%", bonus: "", tax: "0.00" },
            { serialno: "308", name: "SOMOGEL 20", tp: "13%", ext: "3%", bonus: "", tax: "0.00" },
            { serialno: "309", name: "REVOMAT PLAN/PLUS GEL", tp: "10%", ext: "4%", bonus: "", tax: "0.00" },
            { serialno: "310", name: "MECNAZ GEL", tp: "13%", ext: "6%", bonus: "", tax: "0.00" },
            { serialno: "311", name: "ACTNISE GEL", tp: "13%", ext: "32%", bonus: "", tax: "0.00" },
            { serialno: "312", name: "ACDERMIN GEL", tp: "13%", ext: "5%", bonus: "", tax: "0.00" },
            { serialno: "313", name: "ASOLVE GEL", tp: "13%", ext: "4%", bonus: "", tax: "0.00" },
            { serialno: "314", name: "FASTUM GEL", tp: "13%", ext: "15%", bonus: "", tax: "0.00" },
            { serialno: "315", name: "PROVATE G/S LOTION", tp: "13%", ext: "6%", bonus: "", tax: "0.00" },
            { serialno: "316", name: "CUTIS LOTION", tp: "13%", ext: "6%", bonus: "", tax: "0.00" }

        ]
    }

];
products.flatMap(c => c.items).forEach(i => i.tp === "13%" && (i.tp = "15%"));


const table = document.getElementById("productTable");

products.forEach(group => {

    const companyRow = document.createElement("tr");
    companyRow.classList.add("company-row");
    companyRow.innerHTML = `<td colspan="8">${group.company}</td>`;
    table.appendChild(companyRow);

    group.items.forEach(item => {

        const row = document.createElement("tr");
        row.classList.add("item-row");

        row.innerHTML = `
            <td align="center">${item.serialno}</td>
            <td>${item.name}</td>
            <td align="center">${item.tp}</td>
            <td align="center"><input type="number" min="0" class="qty-input" placeholder= "Qty"></td>
            <td align="center">${item.ext}</td>
            <td align="center">${item.bonus}</td>
            
            <td align="center">${item.tax}</td>
        `;

        table.appendChild(row);
    });
});



document.getElementById("searchInput").addEventListener("keyup", function () {
    const value = this.value.toLowerCase();
    document.querySelectorAll(".item-row").forEach(row => {
        row.style.display = row.innerText.toLowerCase().includes(value) ? "" : "none";
    });
});

document.getElementById("zoomToggle").addEventListener("change", function () {
    if (this.checked) {
        document.querySelector('meta[name="viewport"]').setAttribute("content", "user-scalable=no");
    } else {
        document.querySelector('meta[name="viewport"]').setAttribute("content", "width=device-width, initial-scale=1");
    }
});

// 3️⃣ WhatsApp button logic
function sendWhatsApp() {
    const userName = document.getElementById("userName").value.trim();
    if (!userName) {
        alert("Please enter your name!");
        return;
    }

    let message = `Order from: ${userName}\n\n`;
    let hasOrder = false;

    document.querySelectorAll(".item-row").forEach(row => {
        const qtyInput = row.querySelector(".qty-input");
        const qty = qtyInput.value;
        if (qty && Number(qty) > 0) {
            hasOrder = true;
            const serialno = row.cells[0].innerText;
            const itemName = row.cells[1].innerText;
            const ext = row.cells[4].innerText;
            message += `${qty} x ${itemName} (SNo: ${serialno}, ${ext})\n`;
        }
    });

    if (!hasOrder) {
        alert("Please select quantity for at least one product!");
        return;
    }

    const myNumber = "923120817131"; // Replace with your WhatsApp number
    const whatsappURL = `https://wa.me/${myNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
}