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
exports.Item = void 0;
var typeorm_1 = require("typeorm");
var Storage_1 = require("./Storage");
var User_1 = require("./User");
var Item = /** @class */ (function () {
    function Item() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('increment'),
        __metadata("design:type", Number)
    ], Item.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Item.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Item.prototype, "material", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Item.prototype, "weight", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Item.prototype, "classification", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Item.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Item.prototype, "url", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Item.prototype, "storagesId", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Item.prototype, "userId", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Item.prototype, "category", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Item.prototype, "price", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Storage_1.Storage; }, function (storage) { return storage.items; }),
        __metadata("design:type", Storage_1.Storage)
    ], Item.prototype, "storages", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return User_1.User; }, function (user) { return user.items; }),
        __metadata("design:type", User_1.User)
    ], Item.prototype, "user", void 0);
    Item = __decorate([
        typeorm_1.Entity('items')
    ], Item);
    return Item;
}());
exports.Item = Item;
