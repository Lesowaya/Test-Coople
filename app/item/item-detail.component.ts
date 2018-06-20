import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {RouterExtensions} from "nativescript-angular";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html",
})
export class ItemDetailComponent implements OnInit {
    public item: Item;

    constructor(
        private itemService: ItemService,
        private routerExtensions: RouterExtensions,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params["id"];
        this.item = Object.assign(this.itemService.getItem(id));
    }

    public save(): void {
        this.itemService.setItem(this.item.id, this.item);
        this.routerExtensions.back();
    }
}
