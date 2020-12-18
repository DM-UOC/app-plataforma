import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { IProfesor } from 'src/app/interfaces/profesores/profesor.interface';
import { PerfilesService } from 'src/app/services/perfiles/perfiles.service';
import { ModProfesorMateriasPage } from '../../mod-profesor-materias/mod-profesor-materias.page';

@Component({
  selector: 'app-tab-materias-profesores',
  templateUrl: './tab-materias-profesores.page.html',
  styleUrls: ['./tab-materias-profesores.page.scss'],
})
export class TabMateriasProfesoresPage implements OnInit {

  public profesores: IProfesor[] = [];
  
  constructor(
    private perfilesService: PerfilesService,
    private modalController: ModalController,
    private alertController: AlertController,
    private router: Router
  ) { }

  async ngOnInit() {
    await this.verificaCambioUsuarios();
    await this.retornaListaProfesores();    
  }

  private async verificaCambioUsuarios() {
    // verificando emite...
    this.perfilesService.creoUsuario.subscribe(async (result: boolean) => {
      if(result) {
        await this.retornaListaProfesores()
      }
    });    
  }
  
  private retornaListaProfesores() {
    // retornando resultados...
    this.perfilesService.retornaListaProfesores(2)
    .subscribe(profesores => {
      this.profesores = profesores;
    });
  }

  public async materiasDetalle(profesor: IProfesor) {
    try {
      let navigationExtras: NavigationExtras = {
        state: {
          profesor
        }
      };
      // navegando a la pagina...
      this.router.navigate(['/profesor-materias-detalle'], navigationExtras);      
    } catch (error) {
      throw error;
    }
  }

  public async estudiosDetalle(profesor: IProfesor) {
    try {
      let navigationExtras: NavigationExtras = {
        state: {
          profesor
        }
      };
      // navegando a la pagina...
      this.router.navigate(['/profesor-estudios-detalle'], navigationExtras);      
    } catch (error) {
      throw error;
    }
  }

  async registraMateria(profesor: IProfesor) {
    try {
      // abriendo el modal...
      const modal = await this.modalController.create({
        component: ModProfesorMateriasPage,
        componentProps: {
          profesor
        }
      });
      // abriendo el modal...
      await modal.present();      
    } catch (error) {
      throw error;
    }
  }

  
}
