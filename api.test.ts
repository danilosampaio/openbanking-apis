import { Api } from './src/api';

const api = new Api('v1');

describe('Channels', () => {
    test('Branches', () => {
        expect(api.channels.branches(api.servers.bb)).toBe('https://opendata.api.bb.com.br/open-banking/channels/v1/branches');
        expect(api.channels.branches(api.servers.itau)).toBe('https://api.itau/open-banking/channels/v1/branches');
        expect(api.channels.branches(api.servers.bradesco)).toBe('https://api.bradesco.com/bradesco/open-banking/channels/v1/branches');
        expect(api.channels.branches(api.servers.banrisul)).toBe('https://openbanking.banrisul.com.br/open-banking/channels/v1/branches');
    });
    
    test('Electronic Channels', () => {
        expect(api.channels.electronicChannels(api.servers.bb)).toBe('https://opendata.api.bb.com.br/open-banking/channels/v1/electronic-channels');
        expect(api.channels.electronicChannels(api.servers.itau)).toBe('https://api.itau/open-banking/channels/v1/electronic-channels');
        expect(api.channels.electronicChannels(api.servers.bradesco)).toBe('https://api.bradesco.com/bradesco/open-banking/channels/v1/electronic-channels');
        expect(api.channels.electronicChannels(api.servers.banrisul)).toBe('https://openbanking.banrisul.com.br/open-banking/channels/v1/electronic-channels');
    });
    
    test('Phone Channels', () => {
        expect(api.channels.phoneChannels(api.servers.bb)).toBe('https://opendata.api.bb.com.br/open-banking/channels/v1/phone-channels');
        expect(api.channels.phoneChannels(api.servers.itau)).toBe('https://api.itau/open-banking/channels/v1/phone-channels');
        expect(api.channels.phoneChannels(api.servers.bradesco)).toBe('https://api.bradesco.com/bradesco/open-banking/channels/v1/phone-channels');
        expect(api.channels.phoneChannels(api.servers.banrisul)).toBe('https://openbanking.banrisul.com.br/open-banking/channels/v1/phone-channels');
    });

    test('Banking Agents', () => {
        expect(api.channels.bankingAgents(api.servers.bb)).toBe('https://opendata.api.bb.com.br/open-banking/channels/v1/banking-agents');
        expect(api.channels.bankingAgents(api.servers.itau)).toBe('https://api.itau/open-banking/channels/v1/banking-agents');
        expect(api.channels.bankingAgents(api.servers.bradesco)).toBe('https://api.bradesco.com/bradesco/open-banking/channels/v1/banking-agents');
        expect(api.channels.bankingAgents(api.servers.banrisul)).toBe('https://openbanking.banrisul.com.br/open-banking/channels/v1/banking-agents');
    });

    test('Shared Automated Teller Machines', () => {
        expect(api.channels.sharedAutomatedTellerMachines(api.servers.bb)).toBe('https://opendata.api.bb.com.br/open-banking/channels/v1/shared-automated-teller-machines');
        expect(api.channels.sharedAutomatedTellerMachines(api.servers.itau)).toBe('https://api.itau/open-banking/channels/v1/shared-automated-teller-machines');
        expect(api.channels.sharedAutomatedTellerMachines(api.servers.bradesco)).toBe('https://api.bradesco.com/bradesco/open-banking/channels/v1/shared-automated-teller-machines');
        expect(api.channels.sharedAutomatedTellerMachines(api.servers.banrisul)).toBe('https://openbanking.banrisul.com.br/open-banking/channels/v1/shared-automated-teller-machines');
    });
});

describe('Products Services', () => {
    describe('Accounts', () => {
        test('Personal Accounts', () => {
            expect(api.productsServices.personalAccounts(api.servers.bb)).toBe('https://opendata.api.bb.com.br/open-banking/products-services/v1/personal-accounts');
            expect(api.productsServices.personalAccounts(api.servers.itau)).toBe('https://api.itau/open-banking/products-services/v1/personal-accounts');
            expect(api.productsServices.personalAccounts(api.servers.bradesco)).toBe('https://api.bradesco.com/bradesco/open-banking/products-services/v1/personal-accounts');
            expect(api.productsServices.personalAccounts(api.servers.banrisul)).toBe('https://openbanking.banrisul.com.br/open-banking/products-services/v1/personal-accounts');
        });

        test('Business Accounts', () => {
            expect(api.productsServices.businessAccounts(api.servers.bb)).toBe('https://opendata.api.bb.com.br/open-banking/products-services/v1/business-accounts');
            expect(api.productsServices.businessAccounts(api.servers.itau)).toBe('https://api.itau/open-banking/products-services/v1/business-accounts');
            expect(api.productsServices.businessAccounts(api.servers.bradesco)).toBe('https://api.bradesco.com/bradesco/open-banking/products-services/v1/business-accounts');
            expect(api.productsServices.businessAccounts(api.servers.banrisul)).toBe('https://openbanking.banrisul.com.br/open-banking/products-services/v1/business-accounts');
        });
    });

    describe('Loans', () => {
        test('Personal Loans', () => {
            expect(api.productsServices.personalLoans(api.servers.bb)).toBe('https://opendata.api.bb.com.br/open-banking/products-services/v1/personal-loans');
            expect(api.productsServices.personalLoans(api.servers.itau)).toBe('https://api.itau/open-banking/products-services/v1/personal-loans');
            expect(api.productsServices.personalLoans(api.servers.bradesco)).toBe('https://api.bradesco.com/bradesco/open-banking/products-services/v1/personal-loans');
            expect(api.productsServices.personalLoans(api.servers.banrisul)).toBe('https://openbanking.banrisul.com.br/open-banking/products-services/v1/personal-loans');
        });

        test('Business Loans', () => {
            expect(api.productsServices.businessLoans(api.servers.bb)).toBe('https://opendata.api.bb.com.br/open-banking/products-services/v1/business-loans');
            expect(api.productsServices.businessLoans(api.servers.itau)).toBe('https://api.itau/open-banking/products-services/v1/business-loans');
            expect(api.productsServices.businessLoans(api.servers.bradesco)).toBe('https://api.bradesco.com/bradesco/open-banking/products-services/v1/business-loans');
            expect(api.productsServices.businessLoans(api.servers.banrisul)).toBe('https://openbanking.banrisul.com.br/open-banking/products-services/v1/business-loans');
        });
    });

    describe('Credit Cards', () => {
        test('Personal Credit Cards', () => {
            expect(api.productsServices.personalCreditCards(api.servers.bb)).toBe('https://opendata.api.bb.com.br/open-banking/products-services/v1/personal-credit-cards');
            expect(api.productsServices.personalCreditCards(api.servers.itau)).toBe('https://api.itau/open-banking/products-services/v1/personal-credit-cards');
            expect(api.productsServices.personalCreditCards(api.servers.bradesco)).toBe('https://api.bradesco.com/bradesco/open-banking/products-services/v1/personal-credit-cards');
            expect(api.productsServices.personalCreditCards(api.servers.banrisul)).toBe('https://openbanking.banrisul.com.br/open-banking/products-services/v1/personal-credit-cards');
        });

        test('Business Credit Cards', () => {
            expect(api.productsServices.businessCreditCards(api.servers.bb)).toBe('https://opendata.api.bb.com.br/open-banking/products-services/v1/business-credit-cards');
            expect(api.productsServices.businessCreditCards(api.servers.itau)).toBe('https://api.itau/open-banking/products-services/v1/business-credit-cards');
            expect(api.productsServices.businessCreditCards(api.servers.bradesco)).toBe('https://api.bradesco.com/bradesco/open-banking/products-services/v1/business-credit-cards');
            expect(api.productsServices.businessCreditCards(api.servers.banrisul)).toBe('https://openbanking.banrisul.com.br/open-banking/products-services/v1/business-credit-cards');
        });
    });

    describe('Invoice Financings', () => {
        test('Personal Invoice Financings', () => {
            expect(api.productsServices.personalInvoiceFinancings(api.servers.bb)).toBe('https://opendata.api.bb.com.br/open-banking/products-services/v1/personal-invoice-financings');
            expect(api.productsServices.personalInvoiceFinancings(api.servers.itau)).toBe('https://api.itau/open-banking/products-services/v1/personal-invoice-financings');
            expect(api.productsServices.personalInvoiceFinancings(api.servers.bradesco)).toBe('https://api.bradesco.com/bradesco/open-banking/products-services/v1/personal-invoice-financings');
            expect(api.productsServices.personalInvoiceFinancings(api.servers.banrisul)).toBe('https://openbanking.banrisul.com.br/open-banking/products-services/v1/personal-invoice-financings');
        });

        test('Business Invoice Financings', () => {
            expect(api.productsServices.businessInvoiceFinancings(api.servers.bb)).toBe('https://opendata.api.bb.com.br/open-banking/products-services/v1/business-invoice-financings');
            expect(api.productsServices.businessInvoiceFinancings(api.servers.itau)).toBe('https://api.itau/open-banking/products-services/v1/business-invoice-financings');
            expect(api.productsServices.businessInvoiceFinancings(api.servers.bradesco)).toBe('https://api.bradesco.com/bradesco/open-banking/products-services/v1/business-invoice-financings');
            expect(api.productsServices.businessInvoiceFinancings(api.servers.banrisul)).toBe('https://openbanking.banrisul.com.br/open-banking/products-services/v1/business-invoice-financings');
        });
    });
    
    describe('Unarranged Account Overdraft', () => {
        test('Personal Unarranged Account Overdraft', () => {
            expect(api.productsServices.personalUnarrangedAccountOverdraft(api.servers.bb)).toBe('https://opendata.api.bb.com.br/open-banking/products-services/v1/personal-unarranged-account-overdraft');
            expect(api.productsServices.personalUnarrangedAccountOverdraft(api.servers.itau)).toBe('https://api.itau/open-banking/products-services/v1/personal-unarranged-account-overdraft');
            expect(api.productsServices.personalUnarrangedAccountOverdraft(api.servers.bradesco)).toBe('https://api.bradesco.com/bradesco/open-banking/products-services/v1/personal-unarranged-account-overdraft');
            expect(api.productsServices.personalUnarrangedAccountOverdraft(api.servers.banrisul)).toBe('https://openbanking.banrisul.com.br/open-banking/products-services/v1/personal-unarranged-account-overdraft');
        });

        test('Business Unarranged Account Overdraft', () => {
            expect(api.productsServices.businessUnarrangedAccountOverdraft(api.servers.bb)).toBe('https://opendata.api.bb.com.br/open-banking/products-services/v1/business-unarranged-account-overdraft');
            expect(api.productsServices.businessUnarrangedAccountOverdraft(api.servers.itau)).toBe('https://api.itau/open-banking/products-services/v1/business-unarranged-account-overdraft');
            expect(api.productsServices.businessUnarrangedAccountOverdraft(api.servers.bradesco)).toBe('https://api.bradesco.com/bradesco/open-banking/products-services/v1/business-unarranged-account-overdraft');
            expect(api.productsServices.businessUnarrangedAccountOverdraft(api.servers.banrisul)).toBe('https://openbanking.banrisul.com.br/open-banking/products-services/v1/business-unarranged-account-overdraft');
        });
    });
});

describe('Discovery', () => {
    test('Status', () => {
        expect(api.discovery.status(api.servers.bb)).toBe('https://opendata.api.bb.com.br/open-banking/discovery/v1/status');
        expect(api.discovery.status(api.servers.itau)).toBe('https://api.itau/open-banking/discovery/v1/status');
        expect(api.discovery.status(api.servers.bradesco)).toBe('https://api.bradesco.com/bradesco/open-banking/discovery/v1/status');
        expect(api.discovery.status(api.servers.banrisul)).toBe('https://openbanking.banrisul.com.br/open-banking/discovery/v1/status');
    });

    test('Outages', () => {
        expect(api.discovery.outages(api.servers.bb)).toBe('https://opendata.api.bb.com.br/open-banking/discovery/v1/outages');
        expect(api.discovery.outages(api.servers.itau)).toBe('https://api.itau/open-banking/discovery/v1/outages');
        expect(api.discovery.outages(api.servers.bradesco)).toBe('https://api.bradesco.com/bradesco/open-banking/discovery/v1/outages');
        expect(api.discovery.outages(api.servers.banrisul)).toBe('https://openbanking.banrisul.com.br/open-banking/discovery/v1/outages');
    });
});