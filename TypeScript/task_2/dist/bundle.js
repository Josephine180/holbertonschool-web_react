/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    ;
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    ;
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    ;
    return Director;
}());
;
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    ;
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    ;
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    ;
    return Teacher;
}());
;
function createEmployee(salary) {
    if (typeof salary == "number" && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
    // removed by dead control flow
{}
}
;

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQVlBO0lBQUE7SUFVQSxDQUFDO0lBVEMsK0JBQVksR0FBWjtRQUNFLE9BQU8sbUJBQW1CO0lBQzVCLENBQUM7SUFBQSxDQUFDO0lBQ0YsaUNBQWMsR0FBZDtRQUNFLE9BQU8sd0JBQXdCO0lBQ2pDLENBQUM7SUFBQSxDQUFDO0lBQ0Ysb0NBQWlCLEdBQWpCO1FBQ0UsT0FBTywyQkFBMkI7SUFDdEMsQ0FBQztJQUFBLENBQUM7SUFDRixlQUFDO0FBQUQsQ0FBQztBQUFBLENBQUM7QUFFRjtJQUFBO0lBV0EsQ0FBQztJQVRDLDhCQUFZLEdBQVo7UUFDRSxPQUFPLHVCQUF1QjtJQUNoQyxDQUFDO0lBQUEsQ0FBQztJQUNGLGdDQUFjLEdBQWQ7UUFDRSxPQUFPLHFCQUFxQjtJQUM5QixDQUFDO0lBQUEsQ0FBQztJQUNGLGtDQUFnQixHQUFoQjtRQUNFLE9BQU8saUJBQWlCO0lBQzFCLENBQUM7SUFBQSxDQUFDO0lBQ0osY0FBQztBQUFELENBQUM7QUFBQSxDQUFDO0FBRUYsU0FBUyxjQUFjLENBQUMsTUFBdUI7SUFDN0MsSUFBSSxPQUFPLE1BQU0sSUFBSSxRQUFRLElBQUksTUFBTSxHQUFHLEdBQUcsRUFBRTtRQUM3QyxPQUFPLElBQUksT0FBTyxFQUFFLENBQUM7S0FDdEI7U0FBTTtRQUNMLE9BQU8sSUFBSSxRQUFRLEVBQUUsQ0FBQztLQUN2QjtJQUFBO0FBQUEsRUFBQztBQUNKLENBQUM7QUFBQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBEaXJlY3RvckludGVyZmFjZSB7XG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmc7XG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcbiAgd29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgVGVhY2hlckludGVyZmFjZSB7XG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmc7XG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcbiAgd29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmc7XG59XG5cbmNsYXNzIERpcmVjdG9yIGltcGxlbWVudHMgRGlyZWN0b3JJbnRlcmZhY2Uge1xuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJXb3JraW5nIGZyb20gaG9tZVwiXG4gIH07XG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiR2V0dGluZyBhIGNvZmZlZSBicmVha1wiXG4gIH07XG4gIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiR2V0dGluZyB0byBkaXJlY3RvciB0YXNrc1wiXG59O1xufTtcblxuY2xhc3MgVGVhY2hlciBpbXBsZW1lbnRzIFRlYWNoZXJJbnRlcmZhY2Uge1xuXG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIkNhbm5vdCB3b3JrIGZyb20gaG9tZVwiXG4gIH07XG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiQ2Fubm90IGhhdmUgYSBicmVha1wiXG4gIH07XG4gIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJHZXR0aW5nIHRvIHdvcmtcIlxuICB9O1xufTtcblxuZnVuY3Rpb24gY3JlYXRlRW1wbG95ZWUoc2FsYXJ5OiBudW1iZXIgfCBzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzYWxhcnkgPT0gXCJudW1iZXJcIiAmJiBzYWxhcnkgPCA1MDApIHtcbiAgICByZXR1cm4gbmV3IFRlYWNoZXIoKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IERpcmVjdG9yKCk7XG4gIH07XG59O1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=