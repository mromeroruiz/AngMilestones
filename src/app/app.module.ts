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
import { EventsComponent } from './components/events/events.component'

const routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'notes', component: NoteIndexComponent },
  { path: 'home', component: HomeComponent },
  { path: 'kids', component: KidsComponent },
  { path: 'events', component: EventsComponent },
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
    EventsComponent
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
    NotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
