import { Component } from '@angular/core';
import { PipelineService } from './services/pipeline/pipeline.service';

@Component({
  selector: 'polysynth-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(private pipelineService: PipelineService) {
    let self = this;
    pipelineService.begin();
  }
  sendMessage(event) {
    //console.log('sending', event);
  }
}
