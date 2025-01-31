"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MangasModule = void 0;
const common_1 = require("@nestjs/common");
const mangas_controller_1 = require("./mangas.controller");
const mangas_service_1 = require("./mangas.service");
const mongoose_1 = require("@nestjs/mongoose");
const mangas_schema_1 = require("../schemas/mangas.schema");
let MangasModule = class MangasModule {
};
exports.MangasModule = MangasModule;
exports.MangasModule = MangasModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: mangas_schema_1.manga.name,
                    schema: mangas_schema_1.mangaSchema,
                },
            ]),
        ],
        controllers: [mangas_controller_1.MangasController],
        providers: [mangas_service_1.MangasService]
    })
], MangasModule);
//# sourceMappingURL=mangas.module.js.map