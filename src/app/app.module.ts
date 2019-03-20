import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http'

import { 
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { NotesService } from './services/notes.service';
import { NoteIndexComponent } from './components/note/note-index/note-index.component';
import { HomeComponent } from '../app/home/home.component';
import { KidsComponent } from './components/kids/kids.component';
import { AboutComponent } from './components/about/about.component';
import { EventsComponent } from './components/events/events.component';
import { CreatePageComponent } from './create-page/create-page.component'

import { EventsService } from './services/events.service';
import { EventsIndexComponent } from './components/events-index/events-index.component';

import { KidsService } from './services/kids.service';
import { KidCreateComponent } from './components/kid/kid-create/kid-create.component';
import { KidDetailComponent } from './components/kid/kid-detail/kid-detail.component';
import { KidDeleteComponent } from './components/kid/kid-delete/kid-delete.component';
import { KidEditComponent } from './components/kid/kid-edit/kid-edit.component';


const routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'notes', component: NoteIndexComponent },
  { path: 'home', component: HomeComponent },

  { 
    path: 'events', children: [
      { path: '', component: EventsIndexComponent},
      { path: 'create', component: EventsComponent },
    ] 
  },
  { 
    path: 'kids', children: [
    { path: '', component: KidsComponent},  
    { path: 'create', component: KidCreateComponent },
    { path: 'details/:id', component: KidDetailComponent},
    { path: 'edit/:id', component: KidEditComponent },
    { path: 'delete/:id', component: KidDeleteComponent },
    ]
  },

  { path: 'about', component: AboutComponent },
  { path: '**', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    NoteIndexComponent,
    HomeComponent,
    KidsComponent,
    AboutComponent,
    EventsComponent,
    CreatePageComponent,
    EventsIndexComponent,
    KidCreateComponent,
    KidDeleteComponent,
    KidDetailComponent,
    KidEditComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [
    AuthService,
    EventsService,
    KidsService,
    NotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
