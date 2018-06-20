"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ItemService = /** @class */ (function () {
    function ItemService() {
        this.items = [
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
    }
    ItemService.prototype.getItems = function () {
        return this.items;
    };
    ItemService.prototype.getItem = function (id) {
        return this.items.filter(function (item) { return item.id === id; })[0];
    };
    ItemService.prototype.setItem = function (id, newItem) {
        this.items.filter(function (item) { return item.id === id; })[0] = newItem;
    };
    ItemService = __decorate([
        core_1.Injectable()
    ], ItemService);
    return ItemService;
}());
exports.ItemService = ItemService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBS3pDO0lBREE7UUFFWSxVQUFLLEdBQUc7WUFDWjtnQkFDSSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxLQUFLLEVBQUUsU0FBUztnQkFDaEIsV0FBVyxFQUFFLHdGQUF3RjtnQkFDckcsS0FBSyxFQUFFLElBQUk7YUFDZDtZQUNEO2dCQUNJLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEtBQUssRUFBRSxPQUFPO2dCQUNkLFdBQVcsRUFBRSx5REFBeUQ7Z0JBQ3RFLEtBQUssRUFBRSxJQUFJO2FBQ2Q7WUFDRDtnQkFDSSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxLQUFLLEVBQUUsT0FBTztnQkFDZCxXQUFXLEVBQUUsMkRBQTJEO2dCQUN4RSxLQUFLLEVBQUUsSUFBSTthQUNkO1lBQ0Q7Z0JBQ0ksRUFBRSxFQUFFLENBQUM7Z0JBQ0wsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLFdBQVcsRUFBRSwyRkFBMkY7Z0JBQ3hHLEtBQUssRUFBRSxJQUFJO2FBQ2Q7WUFDRDtnQkFDSSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxLQUFLLEVBQUUsTUFBTTtnQkFDYixXQUFXLEVBQUUsNERBQTREO2dCQUN6RSxLQUFLLEVBQUUsSUFBSTthQUNkO1lBQ0Q7Z0JBQ0ksRUFBRSxFQUFFLENBQUM7Z0JBQ0wsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsV0FBVyxFQUFFLHlEQUF5RDtnQkFDdEUsS0FBSyxFQUFFLElBQUk7YUFDZDtZQUNEO2dCQUNJLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEtBQUssRUFBRSxTQUFTO2dCQUNoQixXQUFXLEVBQUUsd0ZBQXdGO2dCQUNyRyxLQUFLLEVBQUUsSUFBSTthQUNkO1lBQ0Q7Z0JBQ0ksRUFBRSxFQUFFLENBQUM7Z0JBQ0wsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsV0FBVyxFQUFFLDJEQUEyRDtnQkFDeEUsS0FBSyxFQUFFLElBQUk7YUFDZDtTQUNKLENBQUM7SUFhTixDQUFDO0lBWEcsOEJBQVEsR0FBUjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCw2QkFBTyxHQUFQLFVBQVEsRUFBVTtRQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFkLENBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCw2QkFBTyxHQUFQLFVBQVEsRUFBVSxFQUFFLE9BQWE7UUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBZCxDQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7SUFDM0QsQ0FBQztJQTlEUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7T0FDQSxXQUFXLENBK0R2QjtJQUFELGtCQUFDO0NBQUEsQUEvREQsSUErREM7QUEvRFksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7SXRlbX0gZnJvbSBcIi4vaXRlbVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSXRlbVNlcnZpY2Uge1xuICAgIHByaXZhdGUgaXRlbXMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgdGl0bGU6IFwiVC1zaGlydFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiU0hFSU4gR2lybHMgRWxlZ2FudCBDb2F0IEJsYXplciBXb21lbiBCb3cgU2xpdCBCZWxsIFNsZWV2ZSBUZXh0dXJlZCBCbGF6ZXIgV2hpdGUgVGhyZWVcIixcbiAgICAgICAgICAgIHByaWNlOiAxNS41XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgdGl0bGU6IFwiRHJlc3NcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkZyZWUgT3N0cmljaCBXb21lbiBPZmYgU2hvdWxkZXIgMjAxOCBTaG9ydCBTbGVldmUgRHJlc3NcIixcbiAgICAgICAgICAgIHByaWNlOiAzNS41XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgdGl0bGU6IFwiU2hpcnRcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkxBU1BFUkFMIFdvbWVuIFN0cmlwZWQgTG9uZyBTbGVldmUgU2hpcnQgVHVybi1Eb3duIENvbGxhclwiLFxuICAgICAgICAgICAgcHJpY2U6IDE1LjVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICB0aXRsZTogXCJTd2VhdGVyXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJOZXJhenp1cnJpIEZhdXggRnVyIENvYXQgV2l0aCBIb29kIEhpZ2ggV2Fpc3QgRmFzaGlvbiBTbGltIEJsYWNrIFJlZCBQaW5rIEZhdXggRnVyIEphY2tldFwiLFxuICAgICAgICAgICAgcHJpY2U6IDM1LjVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDUsXG4gICAgICAgICAgICB0aXRsZTogXCJDb2F0XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTcHJpbmcgV29tZW4gQmxhemVyIEphY2tldCBGYXNoaW9uIDIwMTggQnJhbmQgTm9uZSBCdXR0b24gXCIsXG4gICAgICAgICAgICBwcmljZTogMTUuNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogNixcbiAgICAgICAgICAgIHRpdGxlOiBcIkRyZXNzXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJGcmVlIE9zdHJpY2ggV29tZW4gT2ZmIFNob3VsZGVyIDIwMTggU2hvcnQgU2xlZXZlIERyZXNzXCIsXG4gICAgICAgICAgICBwcmljZTogMzUuNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogNyxcbiAgICAgICAgICAgIHRpdGxlOiBcIlQtc2hpcnRcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlNIRUlOIEdpcmxzIEVsZWdhbnQgQ29hdCBCbGF6ZXIgV29tZW4gQm93IFNsaXQgQmVsbCBTbGVldmUgVGV4dHVyZWQgQmxhemVyIFdoaXRlIFRocmVlXCIsXG4gICAgICAgICAgICBwcmljZTogMTUuNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogOCxcbiAgICAgICAgICAgIHRpdGxlOiBcIkRyZXNzXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTcHJpbmcgV29tZW4gQmxhemVyIEphY2tldCBGYXNoaW9uIDIwMTggQnJhbmQgTm9uZSBCdXR0b25cIixcbiAgICAgICAgICAgIHByaWNlOiAzNS41XG4gICAgICAgIH0sXG4gICAgXTtcblxuICAgIGdldEl0ZW1zKCk6IEl0ZW1bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zO1xuICAgIH1cblxuICAgIGdldEl0ZW0oaWQ6IG51bWJlcik6IEl0ZW0ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkID09PSBpZClbMF07XG4gICAgfVxuXG4gICAgc2V0SXRlbShpZDogbnVtYmVyLCBuZXdJdGVtOiBJdGVtKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCA9PT0gaWQpWzBdID0gbmV3SXRlbTtcbiAgICB9XG59XG4iXX0=