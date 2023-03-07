class Form {
    constructor() {
        //Utilize 'createInput' para criar uma caixa de entrada
      this.input = ???("").attribute("placeholder", "Digite seu nome");
      //Utilize 'createButton' para criar um botão
      this.playButton = ???("Play");
      //Utilize 'createImg' para adicionar a imagem de fundo do jogo
      this.titleImg = ???("./assets/title.png", "título do jogo");
      //Utilize 'createElement' para criar um elemento de texto h2
      this.greeting = ???("h2");
    }
  
    setElementsPosition() {
      this.titleImg.position(120, 100);
      this.input.position(width / 2 - 110, height / 2 - 80);
      this.playButton.position(width / 2 - 90, height / 2 - 20);
      this.greeting.position(width / 2 - 300, height / 2 - 100);
    }
  
   setElementsStyle() {
    //Utilize o nome dos atributos para definir a classe de estilo css
    //Utilize o atributo que cria o título
      this.????.class("gameTitle");
    //Utilize o atributo que cria a caixa de entrada
      this.???.class("customInput");
    //Utilize o atributo que cria o botão de play
      this.???.class("customButton");
    //Utilize o atributo que cria um elemento de texto
      this.???.class("greeting");
    } 
  
  
    handleMousePressed() {
      this.playButton.mousePressed(() => {
        //Quando o botão for clicado, a entrada do usuário e o botão deverão desaparecer
        //Utilize o código 'hide' para isso.
        this.input.???();
        this.playButton.???();
        var message = `
        Olá ${this.input.value()}
        </br>espere outro jogador entrar...`;
        this.greeting.html(message);
        //Utilize o código 'this.input.value', pois dentro de 'player.name' ficará o nome
        //... que você digitou na caixa de entrada
        player.name = this.input.value();
        player.index = 1;
        player.addPlayer();
      });
    }
  
    display() {
     this.setElementsPosition();
      this.setElementsStyle();
      this.handleMousePressed();
    }
  }
  
