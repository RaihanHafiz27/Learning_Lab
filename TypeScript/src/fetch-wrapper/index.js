"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// ================= SETUP WRAPPER ====================
var BASE_URL = "https://691ffec531e684d7bfcb4dc8.mockapi.io/api/users";
var apiClient = function (endpoint, method, bodyData) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, config, response, errorBody, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                headers = {
                    "Content-Type": "application/json",
                };
                config = {
                    method: method,
                    headers: headers,
                    body: bodyData ? JSON.stringify(bodyData) : null,
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                return [4 /*yield*/, fetch("".concat(BASE_URL).concat(endpoint), config)];
            case 2:
                response = _a.sent();
                if (!!response.ok) return [3 /*break*/, 4];
                return [4 /*yield*/, response.text()];
            case 3:
                errorBody = _a.sent();
                throw new Error("API Error ".concat(response.status, " : ").concat(errorBody));
            case 4:
                if (response.status === 204) {
                    return [2 /*return*/, {}];
                }
                return [4 /*yield*/, response.json()];
            case 5: return [2 /*return*/, (_a.sent())];
            case 6:
                error_1 = _a.sent();
                console.error("Terjadi kesalahan di Fetch Wrapper", error_1);
                throw error_1;
            case 7: return [2 /*return*/];
        }
    });
}); };
var api = {
    get: function (endpoint) { return apiClient(endpoint, "GET"); },
    post: function (endpoint, body) {
        return apiClient(endpoint, "POST", body);
    },
    put: function (endpoint, body) { return apiClient(endpoint, "PUT", body); },
    delete: function (endpoint) { return apiClient(endpoint, "DELETE"); },
    patch: function (endpoint, body) {
        return apiClient(endpoint, "PATCH", body);
    },
};
var prod1 = {
    id: "1",
    title: "iPhone 17 pro max",
    price: 10000,
};
var prod2 = {
    id: "2",
    title: "Xiaomi 17 pro max",
    price: 7500,
};
var prod3 = {
    id: "3",
    title: "Samsung 12 Ultra",
    price: 87500,
};
// Sending Data With Wrapper
var sendingData = function () { return __awaiter(void 0, void 0, void 0, function () {
    var newProduct, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.post("/products", prod1)];
            case 1:
                newProduct = _a.sent();
                console.log("Added Success!", newProduct);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.log(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
sendingData();
// Fetching Data With Wrapper
var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
    var products, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.get("/products")];
            case 1:
                products = _a.sent();
                console.log("Success!", products);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                console.log(error_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
fetchData();
// Replace Data With Wrapper
var replaceData = function () { return __awaiter(void 0, void 0, void 0, function () {
    var id, replace, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = 2;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, api.put("/products/".concat(id), prod2)];
            case 2:
                replace = _a.sent();
                console.log("Replace Success!", replace);
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                console.log(error_4);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
replaceData();
// Partial Update With Wrapper
var partialUpdate = function () { return __awaiter(void 0, void 0, void 0, function () {
    var id, update, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = 3;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, api.put("/products/".concat(id), {
                        price: 500,
                    })];
            case 2:
                update = _a.sent();
                console.log("Update Success!", update);
                return [3 /*break*/, 4];
            case 3:
                error_5 = _a.sent();
                console.log(error_5);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
partialUpdate();
// // Deleting by id With Wrapper
// const deletData = async () => {
//   const id = 11;
//   try {
//     const del = await api.delete<ProductsType>(`/products/${id}`);
//     console.log("Delete Success!", del);
//   } catch (error) {
//     console.log(error);
//   }
// };
// deletData();
// // trying get data user
var getDataUsers = function () { return __awaiter(void 0, void 0, void 0, function () {
    var dataUser, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.get("/users")];
            case 1:
                dataUser = _a.sent();
                console.log("Data Users :", dataUser);
                return [3 /*break*/, 3];
            case 2:
                error_6 = _a.sent();
                console.log(error_6);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
getDataUsers();
