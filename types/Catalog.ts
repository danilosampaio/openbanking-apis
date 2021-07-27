/**
 * Lista de instituições participantes
 */
export interface Servers {
    /**
     * Banco de brasil
     */
    bb: string,

    /**
     * Banco itaú
     */
    itau: string,

    /**
     * Banco bradesco
     */
    bradesco: string,

    /**
     * Banco banrisul
     */
    banrisul: string
}

/**
 * Canais de atendimento
 */
export interface Channels {
    /**
     * Agências
     */
    branches: (server: string) => string,
    /**
     * Canais de atendimento eletrônico
     */
    electronicChannels: (server: string) => string,
    /**
     * Canais de atendimento telefônico
     */
    phoneChannels: (server: string) => string,
    /**
     * Correspondentes bancários
     */
    bankingAgents: (server: string) => string,
    /**
     * Terminais de autoatendimento compartilhados
     */
    sharedAutomatedTellerMachines: (server: string) => string
}

/**
 * Produtos e Serviços Bancários
 */
export interface ProductsServices {
    /**
     * Contas pessoa física
     */
    personalAccounts: (server: string) => string,
    /**
     * Contas pessoa jurídica
     */
    businessAccounts: (server: string) => string,
    /**
     * Empréstimos pessoa física
     */
    personalLoans: (server: string) => string,
    /**
     * Empréstimos pessoa jurídica
     */
    businessLoans: (server: string) => string,
    /**
     * Cartão de crédito pessoa física
     */
    personalCreditCards: (server: string) => string,
    /**
     * Cartão de crédito pessoa jurídica
     */
    businessCreditCards: (server: string) => string,
    /**
     * Antecipação de recebíbeis pessoa fisica
     */
    personalInvoiceFinancings: (server: string) => string,
    /**
     * Antecipação de recebíbeis pessoa juridica
     */
    businessInvoiceFinancings: (server: string) => string,
    /**
     * Adiantamneto a depositante pessoa física
     */
    personalUnarrangedAccountOverdraft: (server: string) => string,
    /**
     * Adiantamneto a depositante pessoa jurídica
     */
    businessUnarrangedAccountOverdraft: (server: string) => string
}

/**
 * Disponibilidade de serviço
 */
export interface Discovery {
    /**
     * Status do serviço
     */
    status: (server: string) => string,
    /**
     * Manutenção programada
     */
    outages: (server: string) => string,
}

export interface Catalog {
    /**
     * Lista de instituições participantes
     */
    servers: Servers,
    /**
     * Canais de atendimento
     */
    channels: Channels,
    /**
     * Produtos e serviços
     */
    productsServices: ProductsServices,
    /**
     * Disponibilidade
     */
    discovery: Discovery
}