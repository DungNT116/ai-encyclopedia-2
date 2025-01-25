import { AboutComponent } from "./pages/about/about.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { HomeComponent } from "./pages/home/home.component";
import { Routes } from "@angular/router";
import { OpeningComponent } from "./pages/opening/opening.component";
import { MainStoryComponent } from "./pages/main-story/main-story.component";
import { LabComponent } from "./pages/lab/lab.component";
import { AiScreenComponent } from "./pages/ai-screen/ai-screen.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "opening", component: OpeningComponent },
  { path: "main", component: MainStoryComponent },
  { path: "lab", component: LabComponent },
  { path: "ai-screen", component: AiScreenComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
];

export const sectionScroll = [
  "/",
  "/opening",
  "/opening?subScreen=1",
  "/opening?subScreen=2",
  "/opening?subScreen=3",
  "/opening?subScreen=4",
  "/opening?subScreen=5",
  "/opening?subScreen=6",
  "/main",
  "/lab",
  "/lab?subLab=1",
  "/lab?subLab=2",
  "/ai-screen",
  "/ai-screen?subAI=1",
  "/ai-screen?subAI=2",
  "/ai-screen?subAI=3",
  "/ai-screen?subAI=4",
  "/ai-screen?subAI=5",
  "/ai-screen?subAI=6",
  "/ai-screen?subAI=7", 
];

export const sections = [
  "/",
  "/opening",
  "/opening?subScreen='1'",
  "/opening?subScreen='2'",
  "/opening?subScreen='3'",
  "/opening?subScreen='4'",
  "/opening?subScreen='5'",
  "/opening?subScreen='6'",
  "/main",
  "/lab",
  "/lab?subLab='1'",
  "/lab?subLab='2'",
  "/ai-screen",
  "/ai-screen?subAI='1'",
  "/ai-screen?subAI='2'",
  "/ai-screen?subAI='3'",
  "/ai-screen?subAI='4'",
  "/ai-screen?subAI='5'",
  "/ai-screen?subAI='6'",
  "/ai-screen?subAI='7'", 
];
