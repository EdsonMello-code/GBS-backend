"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Storage = void 0;
var typeorm_1 = require("typeorm");
var Item_1 = require("./Item");
var User_1 = require("./User");
var Storage = /** @class */ (function () {
    function Storage() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('increment'),
        __metadata("design:type", Number)
    ], Storage.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Storage.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Storage.prototype, "address", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Storage.prototype, "url", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Storage.prototype, "latitude", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Storage.prototype, "longitude", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Storage.prototype, "userId", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Item_1.Item; }, function (item) { return item.storages; }),
        __metadata("design:type", Array)
    ], Storage.prototype, "items", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return User_1.User; }, function (item) { return item.storages; }),
        __metadata("design:type", User_1.User)
    ], Storage.prototype, "user", void 0);
    Storage = __decorate([
        typeorm_1.Entity('storages')
    ], Storage);
    return Storage;
}());
exports.Storage = Storage;
