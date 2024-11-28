import { Component, Input ,Injectable} from '@angular/core';
import { ProgressCard } from '../progress-card/progress-card.component';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-spinner-card',
  templateUrl: './spinner-card.component.html',
  styleUrls: ['./spinner-card.component.scss']
})
export class SpinnerCardComponent {

  @Input()
  values!: ProgressCard; 

  @Input()
  mode!: string;

}
