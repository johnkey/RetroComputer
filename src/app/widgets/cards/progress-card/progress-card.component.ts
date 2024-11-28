import { Component, Input ,Injectable} from '@angular/core';


export interface ProgressCard {
  title: string;
  showMenu: boolean;
  value: string;
  text: string;
  pendding: string;
  progress: string;
}

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-progress-card',
  templateUrl: './progress-card.component.html',
  styleUrls: ['./progress-card.component.scss']
})
export class ProgressCardComponent {

  @Input()
  values!: ProgressCard;

  @Input()
  mode!: string;
  
}
