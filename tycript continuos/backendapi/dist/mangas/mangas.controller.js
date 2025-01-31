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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MangasController = void 0;
const common_1 = require("@nestjs/common");
const mangas_service_1 = require("./mangas.service");
const create_manga_dto_1 = require("../dto/create-manga.dto");
const update_manga_dto_1 = require("../dto/update-manga.dto");
let MangasController = class MangasController {
    constructor(MangasService) {
        this.MangasService = MangasService;
    }
    async create(body) {
        try {
            return await this.MangasService.create(body);
        }
        catch (error) {
            if (error.code === 11000) {
                throw new common_1.ConflictException('El Manga ya esta Registrado');
            }
            throw error;
        }
    }
    findAll() {
        return this.MangasService.findAll();
    }
    async findOne(id) {
        try {
            const manga = await this.MangasService.findOne(id);
            if (!manga) {
                throw new common_1.NotFoundException('Manga no Encontrado');
            }
            return manga;
        }
        catch (error) {
            throw error;
        }
    }
    async update(id, body) {
        try {
            const manga = await this.MangasService.update(id, body);
            if (!manga) {
                throw new common_1.NotFoundException('Manga no Encontrado');
            }
            return manga;
        }
        catch (error) {
            throw error;
        }
    }
    async delete(id) {
        try {
            const manga = await this.MangasService.delete(id);
            if (!manga) {
                throw new common_1.NotFoundException('Manga no Encontrado');
            }
            return manga;
        }
        catch (error) {
            throw error;
        }
    }
};
exports.MangasController = MangasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_manga_dto_1.createMangaDto]),
    __metadata("design:returntype", Promise)
], MangasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MangasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MangasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_manga_dto_1.updateMangaDto]),
    __metadata("design:returntype", Promise)
], MangasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MangasController.prototype, "delete", null);
exports.MangasController = MangasController = __decorate([
    (0, common_1.Controller)('mangas'),
    __metadata("design:paramtypes", [mangas_service_1.MangasService])
], MangasController);
//# sourceMappingURL=mangas.controller.js.map