import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { TreeViewModule } from "@syncfusion/ej2-angular-navigations";
import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule, FormsModule, TreeViewModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
