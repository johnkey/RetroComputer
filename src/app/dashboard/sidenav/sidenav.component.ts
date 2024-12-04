import { Component, EventEmitter, Injectable, OnInit, Output, QueryList, ViewChild, ViewChildren, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { merge } from 'rxjs';
import { CollectionViewer, DataSource, SelectionChange } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatListOption } from '@angular/material/list';

import { CommandModalComponent } from 'src/app/widgets/components/command-modal/command-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { menu } from './menu-data';


/** Flat node with expandable and level information */
export class DynamicFlatNode {
  constructor(
    public item: string,
    public level = 1,
    public expandable = false,
    public isLoading = false,
    public link: string,
    public icon:string
  ) {}
}

/**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 */
@Injectable({providedIn: 'root'})
export class DynamicDatabase {
  dataMap = new Map<string, string[]>([
    ['Widgets', ['Tables', 'Calendar', 'buttons']],
    ['Pages', ['User Profile', 'mail', 'Onion']]],
  );

  dinamycDataMap = menu;

  rootLevelNodes: string[] = ['Widgets', 'Pages'];
  dynamicRootLevelNodes: DynamicFlatNode[] = [];

  /** Initial data from database */
  initialData(): DynamicFlatNode[] {
    //return this.rootLevelNodes.map(name => new DynamicFlatNode(name, 0, true,false,'route','close'));
    return Array.from(this.dinamycDataMap.keys());
    
  }

  getChildren(node: string): DynamicFlatNode[] | undefined {
    const key = Array.from(this.dinamycDataMap.keys()).filter(p => p.item === node)[0];
    return this.dinamycDataMap.get(key);
    //return this.dataMap.get(node);
  }

  isExpandable(node: string): boolean {
    return Array.from(this.dinamycDataMap.keys()).filter(p => p.item === node).length>0;
  }

}

/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
export class DynamicDataSource implements DataSource<DynamicFlatNode> {
  dataChange = new BehaviorSubject<DynamicFlatNode[]>([]);

  get data(): DynamicFlatNode[] {
    return this.dataChange.value;
  }
  set data(value: DynamicFlatNode[]) {
    this._treeControl.dataNodes = value;
    this.dataChange.next(value);
  }

  constructor(
    private _treeControl: FlatTreeControl<DynamicFlatNode>,
    private _database: DynamicDatabase,
  ) {}

  connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]> {
    this._treeControl.expansionModel.changed.subscribe(change => {
      if (
        (change as SelectionChange<DynamicFlatNode>).added ||
        (change as SelectionChange<DynamicFlatNode>).removed
      ) {
        this.handleTreeControl(change as SelectionChange<DynamicFlatNode>);
      }
    });

    return merge(collectionViewer.viewChange, this.dataChange).pipe(map(() => this.data));
  }

  disconnect(collectionViewer: CollectionViewer): void {}

  /** Handle expand/collapse behaviors */
  handleTreeControl(change: SelectionChange<DynamicFlatNode>) {
    if (change.added) {
      change.added.forEach(node => this.toggleNode(node, true));
    }
    if (change.removed) {
      change.removed
        .slice()
        .reverse()
        .forEach(node => this.toggleNode(node, false));
    }
  }

  /**
   * Toggle the node, remove from display list
   */
  toggleNode(node: DynamicFlatNode, expand: boolean) {
    const children = this._database.getChildren(node.item);
    const index = this.data.indexOf(node);
    if (!children || index < 0) {
      // If no children, or cannot find the node, no op
      return;
    }

    node.isLoading = true;

    //only for show progress bar purposes
    setTimeout(() => {
      if (expand) {
        // const nodes = children.map(
        //   name => new DynamicFlatNode(name, node.level + 1, this._database.isExpandable(name)),
        // );
        const nodes = children.map(
             child => child
        );
        this.data.splice(index + 1, 0, ...nodes);

      } else {
        let count = 0;
        for (
          let i = index + 1;
          i < this.data.length && this.data[i].level > node.level;
          i++, count++
        ) {}
        this.data.splice(index + 1, count);
      }

      // notify the change
      this.dataChange.next(this.data);
      node.isLoading = false;
    }, 1000);
  }
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit{

  @Output() closeSidebar: EventEmitter<void> = new EventEmitter<void>();

  private breakpointObserver = inject(BreakpointObserver);

  treeControl!: FlatTreeControl<DynamicFlatNode>;

  dataSource!: DynamicDataSource;

  database: DynamicDatabase;

  getLevel = (node: DynamicFlatNode) => node.level;

  isExpandable = (node: DynamicFlatNode) => node.expandable;

  hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;

  @ViewChildren(MatListOption)
  navLists!: QueryList<MatListOption>; 

  constructor(database: DynamicDatabase,private dialog: MatDialog) {
    
    this.database = database;
    
  }

  onItemClick() {
    this.closeSidebar.emit(); 
  }

  ngOnInit(): void {
    this.treeControl = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new DynamicDataSource(this.treeControl, this.database);
    
    this.dataSource.data = this.database.initialData();
  }

  panelOpenState = false;

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  logout(){
    
  }

  disableOptions(){
    
    this.navLists.forEach(list => {
      list.selected=false;
    });
    
  }

  

  openDialog(): void {
    const dialogRef = this.dialog.open(CommandModalComponent, {
      width: '600px', // Puedes ajustar el tamaño del modal aquí
    });
  }
 

}
