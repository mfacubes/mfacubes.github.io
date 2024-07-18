import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { DeveloperProfilesComponent } from './components/developer-profiles/developer-profiles.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { SocialMediaLinksComponent } from './components/social-media-links/social-media-links.component';
import { IntroComponent } from './components/intro/intro.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    IntroComponent,
    DeveloperProfilesComponent,
    ServicesComponent,
    ContactDetailsComponent,
    SocialMediaLinksComponent]
})
export class HomePageModule {}
