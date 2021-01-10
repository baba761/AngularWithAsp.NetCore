import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentComponent } from './component/component.component';
import { Component1Component } from './component1/component1.component';



@NgModule({
  declarations: [ComponentComponent, Component1Component],
  imports: [
    CommonModule
  ]
})
export class TestModule { }
