"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const crmRoutes_1 = __importDefault(require("./src/routes/crmRoutes"));
const app = (0, express_1.default)();
const PORT = 3000;
const appMsg = `Node and express server is running on port ${PORT}`;
const dbUrl = "mongodb://localhost/CRMdb";
// mongoose connection
mongoose_1.default.Promise = global.Promise;
mongoose_1.default.connect(dbUrl);
// bodyparser setup
app.use(express_1.default.urlencoded({
    extended: true,
}));
app.use(express_1.default.json());
(0, crmRoutes_1.default)(app);
// serving static files
app.use(express_1.default.static("public"));
app.get("/", (_req, res) => {
    res.send(appMsg);
});
app.listen(PORT, () => console.log(appMsg));
