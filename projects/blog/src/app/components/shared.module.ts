import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { GuideDogModule } from 'projects/guide-dog/src/lib/guide-dog.module';

import { BreadcrumbModule } from './../../../../guide-dog/src/lib/components/breadcrumb/breadcrumb.module';
import { AsideBoxModule } from './aside-box/aside-box.module';
import { BoxArtigoModule } from './box-artigo/box-artigo.module';
import { BoxBuscaModule } from './box-busca/box-busca.module';
import { BoxCategoriasModule } from './box-categorias/box-categorias.module';
import { BoxCompartilheModule } from './box-compartilhe/box-compartilhe.module';
import { JumbotronModule } from './jumbotron/jumbotron.module';
import { SigaNosModule } from './siga-nos/siga-nos.module';
import { UltimosPostsModule } from './ultimos-posts/ultimos-posts.module';

const modulosCompartilhados = [
  GuideDogModule,
  BoxBuscaModule,
  BoxCategoriasModule,
  BoxCompartilheModule,
  JumbotronModule,
  SigaNosModule,
  UltimosPostsModule,
  BoxArtigoModule,
  AsideBoxModule,
  BreadcrumbModule,
  NgChartsModule,
];

const modulosNgPrime = [
  TableModule,
  ButtonModule,
  ToastModule,
  CalendarModule,
  SliderModule,
  MultiSelectModule,
  ContextMenuModule,
  DialogModule,
  DropdownModule,
  ProgressBarModule,
  InputTextModule,
  FileUploadModule,
  ToolbarModule,
  RatingModule,
  RadioButtonModule,
  InputNumberModule,
  ConfirmDialogModule,
  InputTextareaModule,
  ConfirmDialogModule,
  ChipsModule,
  TabViewModule,
  EditorModule,
  InputSwitchModule,
];

@NgModule({
  imports: [CommonModule, ...modulosCompartilhados],
  providers: [ConfirmationService, MessageService],
  exports: [...modulosCompartilhados, ...modulosNgPrime],
})
export class SharedModule {}
