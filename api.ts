import {
    Catalog,
    Servers,
    Channels,
    ProductsServices,
    Discovery
} from "./types/Catalog";

export class Api implements Catalog {
    version: string = 'v1';

    constructor(version?: string) {
        this.version = version || this.version;
    }

    servers: Servers = {
        bb: 'https://opendata.api.bb.com.br/open-banking',
        itau: 'https://api.itau/open-banking',
        bradesco: 'https://api.bradesco.com/bradesco/open-banking',
        banrisul: 'https://openbanking.banrisul.com.br/open-banking'
    };
    
    channels: Channels = {
        branches: (server) => `${server}/channels/${this.version}/branches`,
        electronicChannels: (server) => `${server}/channels/${this.version}/electronic-channels`,
        phoneChannels: (server) => `${server}/channels/${this.version}/phone-channels`,
        bankingAgents: (server) => `${server}/channels/${this.version}/banking-agents`,
        sharedAutomatedTellerMachines: (server) => `${server}/channels/${this.version}/shared-automated-teller-machines`
    };
    
    productsServices: ProductsServices = {
        personalAccounts: (server) => `${server}/products-services/${this.version}/personal-accounts`,
        businessAccounts: (server) => `${server}/products-services/${this.version}/business-accounts`,
        personalLoans: (server) => `${server}/products-services/${this.version}/personal-loans`,
        businessLoans: (server) => `${server}/products-services/${this.version}/business-loans`,
        personalCreditCards: (server) => `${server}/products-services/${this.version}/personal-credit-cards`,
        businessCreditCards: (server) => `${server}/products-services/${this.version}/business-credit-cards`,
        personalInvoiceFinancings: (server) => `${server}/products-services/${this.version}/personal-invoice-financings`,
        businessInvoiceFinancings: (server) => `${server}/products-services/${this.version}/business-invoice-financings`,
        personalUnarrangedAccountOverdraft: (server) => `${server}/products-services/${this.version}/personal-unarranged-account-overdraft`,
        businessUnarrangedAccountOverdraft: (server) => `${server}/products-services/${this.version}/business-unarranged-account-overdraft`
    };
    
    discovery: Discovery = {
        status: (server) => `${server}/discovery/${this.version}/status`,
        outages: (server) => `${server}/discovery/${this.version}/outages`
    };
}
