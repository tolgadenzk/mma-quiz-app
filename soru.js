function Soru(soruMetni, cevapSecenekleri, dogruCevap){
    this.soruMetni = soruMetni,
    this.cevapSecenekleri = cevapSecenekleri,
    this.dogruCevap = dogruCevap  

         
}

Soru.prototype.cevabiKontrolEt = function(cevap){
    return cevap === this.dogruCevap
}       



let sorular = [
    new Soru("1-How many weight divisions are there in the UFC??",{a: "Seven",b: "13",c: "10",d:"12"},"c"),
    new Soru("2-Which state was the first to enact specific regulations regarding MMA?",{a: "Nevada",b:"New York",c: "California"},"c"),
    new Soru("3-In which year was the UFC's first event held?",{a: "1996",b:"1993",c: "1990"},"b"),
    new Soru("4-The UFC's headquarters are in which major city?",{a: "Chicago",b:"Las Vegas",c: "Los Angeles"},"b"),
    new Soru("5-In what year did Canada decriminalize mixed martial arts?",{a: "1999",b:"2005",c: "2013"},"c"),
    new Soru("6-Senator John McCain tried to ban UFC, calling it what?",{a: "human cockfighting",b:"human torture",c: "human slavery"},"a"),
    new Soru("7-What substance did the UFC ban fighters from using in 2014?",{a: "testosterone replacement therapy",b:"THC (the active ingredient in cannabis)",c: "human growth hormone"},"a"),
    new Soru("8-Which city hosted the first UFC event?",{a: "Boston",b:"Las Vegas",c: "Denver"},"c"),
    new Soru("9-Who did Georges St-Pierre defeat during the headline fight at UFC 129 in April 2011?",{a: "Jake Shields",b:"Jose Aldo",c: "Lyoto Machida"},"a"),
    new Soru("10-Early UFC events on TV had a disclaimer warning viewers about what?",{a: "foul language",b:"overt violence",c: "accidental nudity"},"b")
];