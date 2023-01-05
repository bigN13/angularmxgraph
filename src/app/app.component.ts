import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import factory, { mxGraph, mxGraphModel, mxHierarchicalLayout } from 'mxgraph';
import mx from '../mxgraph';

console.log(mx.mxClient.VERSION);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {

  title = 'ergomxgraph';

  @ViewChild("graphContainer") containerElementRef: ElementRef ;

  get container() {
    return this.containerElementRef.nativeElement;
  }

  ngAfterViewInit(): void {
    if(mx.mxClient.isBrowserSupported()) {
      console.log('Yes! Yes!');
    }

    const graph: mxGraph = new mx.mxGraph(this.container);
    const model: mxGraphModel = graph.getModel();
    model.beginUpdate();
    try {
      graph.insertVertex(graph.getDefaultParent(), '', 'TEST', 0, 0, 100, 100);
    } finally {
      model.endUpdate();
    }
  }

}
