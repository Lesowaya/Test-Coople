"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var validation_service_1 = require("~/validation.service");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_filter_select_1 = require("nativescript-filter-select");
element_registry_1.registerElement('FilterSelect', function () { return nativescript_filter_select_1.FilterSelect; });
var genders = [
    {
        'name': 'male',
        'id': 0,
    },
    {
        'name': 'female',
        'id': 1,
    }
];
var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(validationService) {
        this.validationService = validationService;
        this.email = '';
        this.password = '';
        this.passwordConfirm = '';
        this.name = '';
        this.gender = [];
        this.genders = genders;
        this.isFormValid = false;
    }
    RegistrationComponent.prototype.updateFormValid = function () {
        var _this = this;
        setTimeout(function () {
            _this.isFormValid = _this.password.length > 5 && _this.gender.length > 0
                && _this.password === _this.passwordConfirm
                && _this.validationService.validateEmail(_this.email) && _this.validationService.validateName(_this.name);
        }, 250);
    };
    RegistrationComponent = __decorate([
        core_1.Component({
            selector: "ns-registration",
            moduleId: module.id,
            templateUrl: "./registration.component.html",
        }),
        __metadata("design:paramtypes", [validation_service_1.ValidationService])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cmF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFDeEMsMkRBQXVEO0FBQ3ZELDBFQUFzRTtBQUN0RSx5RUFBd0Q7QUFFeEQsa0NBQWUsQ0FBQyxjQUFjLEVBQUUsY0FBTSxPQUFBLHlDQUFZLEVBQVosQ0FBWSxDQUFDLENBQUM7QUFFcEQsSUFBTSxPQUFPLEdBQUc7SUFDWjtRQUNBLE1BQU0sRUFBRSxNQUFNO1FBQ2QsSUFBSSxFQUFFLENBQUM7S0FDTjtJQUNEO1FBQ0ksTUFBTSxFQUFFLFFBQVE7UUFDaEIsSUFBSSxFQUFFLENBQUM7S0FDVjtDQUNKLENBQUM7QUFPRjtJQUVJLCtCQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUdqRCxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsb0JBQWUsR0FBVyxFQUFFLENBQUM7UUFDN0IsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixXQUFNLEdBQVUsRUFBRSxDQUFDO1FBQ25CLFlBQU8sR0FBRyxPQUFPLENBQUM7UUFDbEIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7SUFScEMsQ0FBQztJQVVNLCtDQUFlLEdBQXRCO1FBQUEsaUJBTUM7UUFMRyxVQUFVLENBQUM7WUFDUCxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDO21CQUM5RCxLQUFJLENBQUMsUUFBUSxLQUFLLEtBQUksQ0FBQyxlQUFlO21CQUN0QyxLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5RyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDWixDQUFDO0lBbkJRLHFCQUFxQjtRQUxqQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLCtCQUErQjtTQUMvQyxDQUFDO3lDQUd5QyxzQ0FBaUI7T0FGL0MscUJBQXFCLENBb0JqQztJQUFELDRCQUFDO0NBQUEsQUFwQkQsSUFvQkM7QUFwQlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1ZhbGlkYXRpb25TZXJ2aWNlfSBmcm9tIFwifi92YWxpZGF0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7cmVnaXN0ZXJFbGVtZW50fSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5JztcbmltcG9ydCB7RmlsdGVyU2VsZWN0fSBmcm9tICduYXRpdmVzY3JpcHQtZmlsdGVyLXNlbGVjdCc7XG5cbnJlZ2lzdGVyRWxlbWVudCgnRmlsdGVyU2VsZWN0JywgKCkgPT4gRmlsdGVyU2VsZWN0KTtcblxuY29uc3QgZ2VuZGVycyA9IFtcbiAgICB7XG4gICAgJ25hbWUnOiAnbWFsZScsXG4gICAgJ2lkJzogMCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ25hbWUnOiAnZmVtYWxlJyxcbiAgICAgICAgJ2lkJzogMSxcbiAgICB9XG5dO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1yZWdpc3RyYXRpb25cIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdHJhdGlvbkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZhbGlkYXRpb25TZXJ2aWNlOiBWYWxpZGF0aW9uU2VydmljZSkge1xuICAgIH1cblxuICAgIHB1YmxpYyBlbWFpbDogc3RyaW5nID0gJyc7XG4gICAgcHVibGljIHBhc3N3b3JkOiBzdHJpbmcgPSAnJztcbiAgICBwdWJsaWMgcGFzc3dvcmRDb25maXJtOiBzdHJpbmcgPSAnJztcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nID0gJyc7XG4gICAgcHVibGljIGdlbmRlcjogYW55W10gPSBbXTtcbiAgICBwdWJsaWMgZ2VuZGVycyA9IGdlbmRlcnM7XG4gICAgcHVibGljIGlzRm9ybVZhbGlkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgdXBkYXRlRm9ybVZhbGlkKCk6IHZvaWQge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNGb3JtVmFsaWQgPSB0aGlzLnBhc3N3b3JkLmxlbmd0aCA+IDUgJiYgdGhpcy5nZW5kZXIubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICYmIHRoaXMucGFzc3dvcmQgPT09IHRoaXMucGFzc3dvcmRDb25maXJtXG4gICAgICAgICAgICAgICAgJiYgdGhpcy52YWxpZGF0aW9uU2VydmljZS52YWxpZGF0ZUVtYWlsKHRoaXMuZW1haWwpICYmIHRoaXMudmFsaWRhdGlvblNlcnZpY2UudmFsaWRhdGVOYW1lKHRoaXMubmFtZSk7XG4gICAgICAgIH0sIDI1MCk7XG4gICAgfVxufSJdfQ==