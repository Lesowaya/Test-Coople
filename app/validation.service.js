"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.prototype.validateEmail = function (value) {
        var emailPattern = /^[_A-Za-z0-9-\\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(.)*(\.[A-Za-z]{2,})/;
        return emailPattern.test(value);
    };
    ValidationService.prototype.validateName = function (value) {
        var emailPattern = /^[A-Za-z+]+( )[A-Za-z+]+/;
        return emailPattern.test(value);
    };
    ValidationService = __decorate([
        core_1.Injectable()
    ], ValidationService);
    return ValidationService;
}());
exports.ValidationService = ValidationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmFsaWRhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSTNDO0lBQUE7SUFZQSxDQUFDO0lBVkcseUNBQWEsR0FBYixVQUFjLEtBQWE7UUFDdkIsSUFBTSxZQUFZLEdBQUUseUVBQXlFLENBQUM7UUFDOUYsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELHdDQUFZLEdBQVosVUFBYSxLQUFhO1FBQ3RCLElBQU0sWUFBWSxHQUFFLDBCQUEwQixDQUFDO1FBQy9DLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFWUSxpQkFBaUI7UUFEN0IsaUJBQVUsRUFBRTtPQUNBLGlCQUFpQixDQVk3QjtJQUFELHdCQUFDO0NBQUEsQUFaRCxJQVlDO0FBWlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1ZhbGlkYXRvcnN9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvblNlcnZpY2Uge1xuXG4gICAgdmFsaWRhdGVFbWFpbCh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGVtYWlsUGF0dGVybiA9L15bX0EtWmEtejAtOS1cXFxcK10rKFxcLltfQS1aYS16MC05LV0rKSpAW0EtWmEtejAtOS1dKyguKSooXFwuW0EtWmEtel17Mix9KS87XG4gICAgICAgIHJldHVybiBlbWFpbFBhdHRlcm4udGVzdCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgdmFsaWRhdGVOYW1lKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgZW1haWxQYXR0ZXJuID0vXltBLVphLXorXSsoIClbQS1aYS16K10rLztcbiAgICAgICAgcmV0dXJuIGVtYWlsUGF0dGVybi50ZXN0KHZhbHVlKTtcbiAgICB9XG5cbn1cbiJdfQ==