"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = void 0;
var Api = /** @class */ (function () {
    function Api(version) {
        var _this = this;
        this.version = 'v1';
        this.servers = {
            bb: 'https://opendata.api.bb.com.br/open-banking',
            itau: 'https://api.itau/open-banking',
            bradesco: 'https://api.bradesco.com/bradesco/open-banking',
            banrisul: 'https://openbanking.banrisul.com.br/open-banking'
        };
        this.channels = {
            branches: function (server) { return server + "/channels/" + _this.version + "/branches"; },
            electronicChannels: function (server) { return server + "/channels/" + _this.version + "/electronic-channels"; },
            phoneChannels: function (server) { return server + "/channels/" + _this.version + "/phone-channels"; },
            bankingAgents: function (server) { return server + "/channels/" + _this.version + "/banking-agents"; },
            sharedAutomatedTellerMachines: function (server) { return server + "/channels/" + _this.version + "/shared-automated-teller-machines"; }
        };
        this.productsServices = {
            personalAccounts: function (server) { return server + "/products-services/" + _this.version + "/personal-accounts"; },
            businessAccounts: function (server) { return server + "/products-services/" + _this.version + "/business-accounts"; },
            personalLoans: function (server) { return server + "/products-services/" + _this.version + "/personal-loans"; },
            businessLoans: function (server) { return server + "/products-services/" + _this.version + "/business-loans"; },
            personalCreditCards: function (server) { return server + "/products-services/" + _this.version + "/personal-credit-cards"; },
            businessCreditCards: function (server) { return server + "/products-services/" + _this.version + "/business-credit-cards"; },
            personalInvoiceFinancings: function (server) { return server + "/products-services/" + _this.version + "/personal-invoice-financings"; },
            businessInvoiceFinancings: function (server) { return server + "/products-services/" + _this.version + "/business-invoice-financings"; },
            personalUnarrangedAccountOverdraft: function (server) { return server + "/products-services/" + _this.version + "/personal-unarranged-account-overdraft"; },
            businessUnarrangedAccountOverdraft: function (server) { return server + "/products-services/" + _this.version + "/business-unarranged-account-overdraft"; }
        };
        this.discovery = {
            status: function (server) { return server + "/discovery/" + _this.version + "/status"; },
            outages: function (server) { return server + "/discovery/" + _this.version + "/outages"; }
        };
        this.version = version || this.version;
    }
    return Api;
}());
exports.Api = Api;
