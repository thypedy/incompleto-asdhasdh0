import { FilmeDetalhePage } from '../filme-detalhe/filme-detalhe.page';
import { NavigationExtras, Router } from '@angular/router';
import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public router: Router,
    public alertController: AlertController,
    public toastController: ToastController)
  {}

  listaFilmes: IFilme[] = [
    {
      nome: 'Raphael Rossatto',
      lancamento: 'Dublador Mario',
      duracao: '',
      classificacao: 8,
      cartaz: 'https://br.web.img3.acsta.net/pictures/23/03/30/18/57/4427868.jpg',
      generos: [''],
      pagina: '/mario-bros',
      favorito: false
    },
    {
      nome: 'Manolo Rey',
      lancamento: 'Dublador Luigi',
      duracao: '',
      classificacao: 8,
      cartaz: 'https://cdn.ome.lt/dwytnzEqx7SFyJfX1hAYKfZ6AqM=/770x0/smart/uploads/conteudo/fotos/Manolo_Rey.jpg',
      generos: [''],
      pagina: '/mario-bros',
      favorito: false
    },
    {
      nome: 'Carina Eiras',
      lancamento: 'Dublador Princesa Peach',
      duracao: '',
      classificacao: 8,
      cartaz: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZpJYGEhqsHr3OzDXX7iJIufoa5ynexQliLvr6S3tqgRaLuvF0KjKQf9rOOizmc09kpUI&usqp=CAU',
      generos: [''],
      pagina: '/mario-bros',
      favorito: false
    }
  ];
  exibirFilme(filme: IFilme){
    const NavigationExtras: NavigationExtras = {state:{paramFilme:filme}};
    this.router.navigate(['filme-detalhe'],NavigationExtras);
  }

  async exibirAlertaFavorito(filme: IFilme) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            filme.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            filme.favorito=true;
            this.apresentarToast(filme);
          }
        }
      ]
    });
    await alert.present();
  }



 async apresentarToast(filme: IFilme) {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos...',
      duration: 2000,
      color: 'success',
      buttons:[
        {
          text: 'Desfazer',
          handler: () => {
            filme.favorito=false;
          }
        }
      ]
    });
    toast.present();
  }

}
