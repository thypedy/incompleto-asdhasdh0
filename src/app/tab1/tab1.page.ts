import { FilmeDetalhePage } from '../filme-detalhe/filme-detalhe.page';
import { NavigationExtras, Router } from '@angular/router';
import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router: Router,
    public alertController: AlertController,
    public toastController: ToastController)
  {}

  listaFilmes: IFilme[] = [
    {
      nome: 'Chat gpt',
      lancamento: 'Uma ia feita para responder qualquer coisa',
      duracao: '1h12m',
      classificacao: 9,
      cartaz: 'https://www.cienciaedados.com/wp-content/uploads/2023/04/Por-Que-o-ChatGPT-Nao-e-Tao-Inteligente-Quanto-Muitos-Acreditam.jpg',
      generos: ['IA', 'ChatBot'],
      pagina: '/chat-gpt',
      favorito: false
    },
    {
      nome: 'Moovit',
      lancamento: 'Aplicativo para monitorar a localização dos onibus pela cidade',
      duracao: '',
      classificacao: 9,
      cartaz: 'data:image/png;base64,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',
      generos: ['Viagem', 'Onibus'],
      pagina: '/moovit',
      favorito: false
    },
    {
      nome: 'Duolingo',
      lancamento: 'Aplicativo para aprender linguas',
      duracao: '',
      classificacao: 9,
      cartaz: 'https://play-lh.googleusercontent.com/k09hlFvKWemEowiD6q2Lfr1-as0CWEQiE7SclJmU91T1B5uOIFlDqmNHR9gz0q6Qi0g',
      generos: ['Linguagem', 'Educação'],
      pagina: '/duolingo',
      favorito: false
    },
    {
      nome: 'Dr. consulta',
      lancamento: 'Hospital para consultas online',
      duracao: '',
      classificacao: 9,
      cartaz: 'data:image/png;base64,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',
      generos: ['Hospital', 'Saúde'],
      pagina: '/dr-consulta',
      favorito: false
    },
    {
      nome: 'Waze',
      lancamento: 'Aplicativo que escolha sua melhor rota para se locomover',
      duracao: '',
      classificacao: 9,
      cartaz: 'https://play-lh.googleusercontent.com/r7XL36PVNtnidqy6ikRiW1AHEIsjhePrZ8W5M4cNTQy5ViF3-lIDY47hpvxc84kJ7lw',
      generos: ['Locomoção', 'Localização'],
      pagina: '/waze',
      favorito: false
    },
    {
      nome: 'Youtube',
      lancamento: 'Poste seus vídeos para ganhar dinheiro',
      duracao: '',
      classificacao: 9,
      cartaz: 'https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc',
      generos: ['Videos', 'Conteúdo', 'Entretenimento'],
      pagina: '/youtube',
      favorito: false
    },
    {
      nome: 'Spotify',
      lancamento: 'Ouça suas musicas em qualquer lugar',
      duracao: '',
      classificacao: 9,
      cartaz: 'https://play-lh.googleusercontent.com/cShys-AmJ93dB0SV8kE6Fl5eSaf4-qMMZdwEDKI5VEmKAXfzOqbiaeAsqqrEBCTdIEs=w240-h480-rw',
      generos: ['Streaming', 'Música', 'Entretenimento'],
      pagina: '/spotify',
      favorito: false
    },
    {
      nome: 'WhatsApp',
      lancamento: 'Converse em qualquer lugar!',
      duracao: '',
      classificacao: 9,
      cartaz: 'https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN',
      generos: ['Chat', 'Social'],
      pagina: '/whatsapp',
      favorito: false
    },
    {
      nome: 'Instagram',
      lancamento: 'Poste seus melhores momentos!',
      duracao: '',
      classificacao: 9,
      cartaz: 'https://play-lh.googleusercontent.com/VRMWkE5p3CkWhJs6nv-9ZsLAs1QOg5ob1_3qg-rckwYW7yp1fMrYZqnEFpk0IoVP4LM',
      generos: ['Social Media', 'Entretenimento'],
      pagina: '/dr-consulta',
      favorito: false
    },
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
