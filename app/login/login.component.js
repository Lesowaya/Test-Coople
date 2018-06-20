"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var validation_service_1 = require("~/validation.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(validationService) {
        this.validationService = validationService;
        this.email = '';
        this.password = '';
        this.isFormValid = false;
    }
    LoginComponent.prototype.updateFormValid = function () {
        var _this = this;
        setTimeout(function () {
            _this.isFormValid = _this.password.length > 5 && _this.validationService.validateEmail(_this.email);
        }, 250);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "ns-login",
            moduleId: module.id,
            templateUrl: "./login.component.html",
        }),
        __metadata("design:paramtypes", [validation_service_1.ValidationService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBQ3hDLDJEQUF1RDtBQVF2RDtJQUVJLHdCQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUVqRCxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7SUFKdUIsQ0FBQztJQU1yRCx3Q0FBZSxHQUF0QjtRQUFBLGlCQUlDO1FBSEcsVUFBVSxDQUFDO1lBQ1AsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQVpRLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7eUNBR3lDLHNDQUFpQjtPQUYvQyxjQUFjLENBYTFCO0lBQUQscUJBQUM7Q0FBQSxBQWJELElBYUM7QUFiWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtWYWxpZGF0aW9uU2VydmljZX0gZnJvbSBcIn4vdmFsaWRhdGlvbi5zZXJ2aWNlXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtbG9naW5cIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2YWxpZGF0aW9uU2VydmljZTogVmFsaWRhdGlvblNlcnZpY2UpIHt9XG5cbiAgICBwdWJsaWMgZW1haWw6IHN0cmluZyA9ICcnO1xuICAgIHB1YmxpYyBwYXNzd29yZDogc3RyaW5nID0gJyc7XG4gICAgcHVibGljIGlzRm9ybVZhbGlkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgdXBkYXRlRm9ybVZhbGlkKCk6IHZvaWQge1xuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICB0aGlzLmlzRm9ybVZhbGlkID0gdGhpcy5wYXNzd29yZC5sZW5ndGggPiA1ICYmIHRoaXMudmFsaWRhdGlvblNlcnZpY2UudmFsaWRhdGVFbWFpbCh0aGlzLmVtYWlsKTtcbiAgICAgICAgfSwgMjUwKTtcbiAgICB9XG59Il19