'use strict';var _createClass=function(){function a(b,c){for(var e,d=0;d<c.length;d++)e=c[d],e.enumerable=e.enumerable||!1,e.configurable=!0,'value'in e&&(e.writable=!0),Object.defineProperty(b,e.key,e)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}var Populacao=function(){function a(b){if(_classCallCheck(this,a),this.tamanhoPopulacao=tamPopulacao,this.matingpool=[],b)this.pontos=b;else{this.pontos=[];for(var c=0;c<this.tamanhoPopulacao;c++)this.pontos[c]=new Ponto}}return _createClass(a,[{key:'executa',value:function executa(){for(var b=0;b<this.tamanhoPopulacao;b++)this.pontos[b].atualiza(),this.pontos[b].exibe()}},{key:'avalia',value:function avalia(){for(var b=0,c=void 0,d=0;d<this.tamanhoPopulacao;d++)this.pontos[d].calculaDesempenho(),this.pontos[d].desempenho>b&&(b=this.pontos[d].desempenho,c=this.pontos[d]);console.log('Gera\xE7\xE3o: '+geracoes+' / Melhor: '+b);for(var e=0;e<this.tamanhoPopulacao;e++)this.pontos[e].desempenho/=b;this.matingpool.push(c);for(var g,f=0;f<this.tamanhoPopulacao;f++){g=floor(10*this.pontos[f].desempenho);for(var h=0;h<g;h++)this.matingpool.push(this.pontos[f])}}},{key:'selecao',value:function selecao(){for(var b=this.matingpool[0].dna,c=[new Ponto(b)],d=1;d<this.pontos.length;d++){var e=random(this.matingpool).dna,f=random(this.matingpool).dna,g=e.crossover(f);g.mutacao(),c[d]=new Ponto(g)}return c[0].melhor=!0,c}}]),a}();
