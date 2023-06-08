"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModel = void 0;
var mongoose_1 = require("mongoose");
var TaskSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    finished: { type: Boolean, required: true },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now },
    createdBy: { type: String, required: false },
});
exports.TaskModel = (0, mongoose_1.model)("todos", TaskSchema);
