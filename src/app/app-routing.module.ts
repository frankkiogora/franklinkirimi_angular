import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { SkillsComponent } from "./skills/skills.component";
import { ServicesComponent } from "./services/services.component";
import { WorkComponent } from "./work/work.component";
import { ContactComponent } from "./contact/contact.component";
import { ExperienceComponent } from "./experience/experience.component";
import { BlogComponent } from "./blog/blog.component";
import { RecommendationsComponent } from "./recommendations/recommendations.component";
import { ProjectsComponent } from "./projects/projects.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "skills", component: SkillsComponent },
  { path: "services", component: ServicesComponent },
  { path: "work", component: WorkComponent },
  { path: "contact", component: ContactComponent },
  { path: "experience", component: ExperienceComponent },
  { path: "blog", component: BlogComponent },
  { path: "recommendations", component: RecommendationsComponent },
  { path: "projects", component: ProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
