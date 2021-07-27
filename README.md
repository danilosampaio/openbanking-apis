# openbanking-apis
> Catálogo de APIs Open Banking das instituições participantes.

## Install

```sh
$ npm install openbanking-apis
```

## Usage

```js
import { Api } from 'openbanking-apis';
const catalog = new Api('v1');

//Lista de agências
catalog.channels.branches(catalog.servers.bb);
//==> https://opendata.api.bb.com.br/open-banking/channels/v1/branches
```

## Servers (Participantes)

```js
{
  bb: 'https://opendata.api.bb.com.br/open-banking',
  bradesco: 'https://api.bradesco.com/bradesco/open-banking',
  banrisul: 'https://openbanking.banrisul.com.br/open-banking',
  itau: 'https://api.itau/open-banking'
}
```

## API

- Channels
    - Branches (Agências)
    ```js
    catalog.channels.branches(catalog.servers.itau);
    //==> https://api.itau/open-banking/channels/v1/branches
    ```
    - Electronic Channels (Canais de atendimento eletrônico)
    ```js
    catalog.channels.electronicChannels(catalog.servers.bradesco);
    //==> https://api.bradesco.com/bradesco/open-banking/channels/v1/electronic-channels
    ```
    - Phone Channels (Canais de atendimento telefônico)
    ```js
    catalog.channels.phoneChannels(catalog.servers.banrisul);
    //==> https://openbanking.banrisul.com.br/open-banking/channels/v1/phone-channels
    ```
    - Banking Agents (Correspondentes bancários)
    ```js
    catalog.channels.bankingAgents(catalog.servers.bb);
    //==> https://opendata.api.bb.com.br/open-banking/channels/v1/banking-agents
    ```
    - Shared Automated Teller Machines (Terminais de autoatendimento compartilhados)
    ```js
    catalog.channels.sharedAutomatedTellerMachines(catalog.servers.itau);
    //==> https://api.itau/open-banking/channels/v1/shared-automated-teller-machines
    ```
- Products Services
    - Accounts
      - Personal Accounts (Contas pessoa física)
      ```js
      catalog.productsServices.personalAccounts(catalog.servers.bb);
      //==> https://opendata.api.bb.com.br/open-banking/products-services/v1/personal-accounts
      ```
      - Business Accounts (Contas pessoa jurídica)
      ```js
      catalog.productsServices.businessAccounts(catalog.servers.itau);
      //==> https://api.itau/open-banking/products-services/v1/business-accounts
      ```
    - Loans
      - Personal Loans (Empréstimos pessoa física)
      ```js
      catalog.productsServices.personalLoans(catalog.servers.bradesco);
      //==> https://api.bradesco.com/bradesco/open-banking/products-services/v1/personal-loans
      ```
      - Business Loans (Empréstimos pessoa jurídica)
      ```js
      catalog.productsServices.businessLoans(catalog.servers.banrisul);
      //==> https://openbanking.banrisul.com.br/open-banking/products-services/v1/business-loans
      ```
    - Credit Cards
      - Personal Credit Cards (Cartão de crédito pessoa física)
      ```js
      catalog.productsServices.personalCreditCards(catalog.servers.bb);
      //==> https://opendata.api.bb.com.br/open-banking/products-services/v1/personal-credit-cards
      ```
      - Business Credit Cards (Cartão de crédito pessoa jurídica)
      ```js
      catalog.productsServices.businessCreditCards(catalog.servers.itau);
      //==> https://api.itau/open-banking/products-services/v1/business-credit-cards
      ```
    - Invoice Financings
      - Personal Invoice Financings (Antecipação de recebíbeis pessoa fisica)
      ```js
      catalog.productsServices.personalInvoiceFinancings(catalog.servers.bradesco);
      //==> https://api.bradesco.com/bradesco/open-banking/products-services/v1/personal-invoice-financings
      ```
      - Business Invoice Financings (Antecipação de recebíbeis pessoa juridica)
      ```js
      catalog.productsServices.businessInvoiceFinancings(catalog.servers.banrisul);
      //==> https://openbanking.banrisul.com.br/open-banking/products-services/v1/business-invoice-financings
      ```
    - Unarranged Account Overdraft
      - Personal Unarranged Account Overdraft (Adiantamneto a depositante pessoa física)
      ```js
      catalog.productsServices.personalUnarrangedAccountOverdraft(catalog.servers.bb);
      //==> https://opendata.api.bb.com.br/open-banking/products-services/v1/personal-unarranged-account-overdraft
      ```
      - Business Unarranged Account Overdraft (Adiantamneto a depositante pessoa jurídica)
      ```js
      catalog.productsServices.businessUnarrangedAccountOverdraft(catalog.servers.itau);
      //==> https://api.itau/open-banking/products-services/v1/business-unarranged-account-overdraft
      ```
- Discovery
    - Status (Status do serviço)
    ```js
    catalog.discovery.status(catalog.servers.bradesco);
    //==> https://api.bradesco.com/bradesco/open-banking/discovery/v1/status
    ```
    - Outages (Manutenção programada)
    ```js
    catalog.discovery.outages(catalog.servers.banrisul);
    //==> https://openbanking.banrisul.com.br/open-banking/discovery/v1/outages
    ```

## TODO
- Adicionar demais participante na lista de `servers`.

## License

MIT © [Danilo Sampaio](http://github.org/danilosampaio)