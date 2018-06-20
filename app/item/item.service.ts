import {Injectable} from "@angular/core";

import {Item} from "./item";

@Injectable()
export class ItemService {
    private items = [
        {
            id: 1,
            title: "T-shirt",
            description: "SHEIN Girls Elegant Coat Blazer Women Bow Slit Bell Sleeve Textured Blazer White Three",
            price: 15.5
        },
        {
            id: 2,
            title: "Dress",
            description: "Free Ostrich Women Off Shoulder 2018 Short Sleeve Dress",
            price: 35.5
        },
        {
            id: 3,
            title: "Shirt",
            description: "LASPERAL Women Striped Long Sleeve Shirt Turn-Down Collar",
            price: 15.5
        },
        {
            id: 4,
            title: "Sweater",
            description: "Nerazzurri Faux Fur Coat With Hood High Waist Fashion Slim Black Red Pink Faux Fur Jacket",
            price: 35.5
        },
        {
            id: 5,
            title: "Coat",
            description: "Spring Women Blazer Jacket Fashion 2018 Brand None Button ",
            price: 15.5
        },
        {
            id: 6,
            title: "Dress",
            description: "Free Ostrich Women Off Shoulder 2018 Short Sleeve Dress",
            price: 35.5
        },
        {
            id: 7,
            title: "T-shirt",
            description: "SHEIN Girls Elegant Coat Blazer Women Bow Slit Bell Sleeve Textured Blazer White Three",
            price: 15.5
        },
        {
            id: 8,
            title: "Dress",
            description: "Spring Women Blazer Jacket Fashion 2018 Brand None Button",
            price: 35.5
        },
    ];

    getItems(): Item[] {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter(item => item.id === id)[0];
    }

    setItem(id: number, newItem: Item): void {
        this.items.filter(item => item.id === id)[0] = newItem;
    }
}
