## Generic Config
```json
{
    "packages": [
       "cryptoblades": [
            "cb-character",
            "cb-weapon",
            "cb-shield",
            "cb-junk" 
        ],
        "mygame":[
            "some-nft-category",
            "some-nft-category",
            "some-nft-category",
        ]
    ]
}
```

## NFT Config Example

```json
{
  "preprocessor": "cb-character.js", // the file name of the preprocessor script (see the preprocessor example below)
  "template": "cb-character.vue", // the file name of your vue component (see the template example below)
  "artsgenerator": "cb-character.js", // the file name of your nft image/arts generator. (see the artsgenerator example below)
  "token": {
    "method": "get", // the contract method to retrieve the token data
    "contractAddress": { 
      "test": {  // testnet contract addresses
        "BSC": "0x149529De3BDA6F95FbF027275DC5d7ccc270D5Bd" 
      },
      "production": { // mainnet contract addresses
        "BSC": "0xc6f252c2CdD4087e30608A35c022ce490B58179b",
        "HECO": "0xF6092CDEaabd02069cB56E2b770367AAcf49dfba",
        "OEC": "0x6A1d1803d4EDF5CF27EDb64ae95A22F81707eA38",
        "POLYGON": "0x929059Fef67b88CE2F4127e59B50bEA123981998",
        "AVAX": "0x28857ccCCa599f0876792094870758A18F581Dc0"
      }
    }
  },
  "abi": {
    "filename": "Characters.json", // the file name of your contract ABI
    "source": "https://app.cryptoblades.io/abi/Characters.json" // the source where your contract ABI is retrievable
  },
  "ui": {
    "pagination": { // do not edit this
      "perPage": 60 
    }, 
    "sortValues": { // do not edit this
      "asc": "1", 
      "desc": "-1" 
    },
    "sorts": [ // Do not remove `id` and `price`. You can add your custom sorting. Your custom sorting's apiField must be preceded by `props.`. Example: props.element
      { "name": "id", "apiField": "id" },
      { "name": "price", "apiField": "price" }
    ],
    "filters": { // Your custom filters.
      "element": { // query type of the filter
        "name": "Element", // name of the filter
        "apiField": "element", // apiField
        "type": "checkbox", // input type. possible values: `text`, `number`, `select`, `checkbox`
        "props": { "values": ["Fire", "Earth", "Water", "Lightning"] } // input properties. for `checkbox` and `select` types, `values` should contain the enumerated options
      },
      "minLevel": {
        "name": "Min Level",
        "apiField": "level.min", // range filters must be followed by `min` for minimum and `max` for maximum
        "type": "number",
        "props": { "value": 0, "min": 0, "max": 254, "step": 1 }
      },
      "maxLevel": {
        "name": "Max Level",
        "apiField": "level.max",
        "type": "number",
        "props": { "value": 254, "min": 0, "max": 254, "step": 1 }
      }
    }
  }
}

```

## Preprocessor Example

```javascript
module.exports = (nftdata) => ({ 
    name: nftdata.name, 
    stats: parseData(nftdata).stats 
});
```

## Template Example

```vue
<template>
  <div class="item-card">
    <div class="imgs text-center p-2">
      <div class="label">
        <div
          class="position-absolute top-50 start-50 translate-middle"
          v-if="nft.sellerStatus"
        >
          <img :src="require('@/assets/banned-icon.svg')" alt="" />
        </div>
        <img class="some-nft-image-class" :src="nft.image" alt="" />
      </div>
    </div>

    <div class="desc">
      <p class="image-name text-truncate">
        {{ getNftName(nft.id) }}
      </p>
    <div class="cost-item">
      <div>
        <div v-if="$route.matched[0].name !== 'Sell'">
          <CBIcon v-b-popover.hover.top="'SKILL'"></CBIcon>
          <CurrencyConverter
            v-b-popover.hover.top="nft.price.toString()"
            :skill="nft.price.toString()"
            :skillMaxDecimals="3"
            :showValueInSkillOnly="true"
          />
        </div>
      </div>
      <div>.</div>
      <div>
        <span>#{{ nft.id }}</span>
      </div>
    </div>
    <div class="buttons" v-if="$route.matched[1] && $route.matched[1].name === 'Inventory'">
      <p
        class="btn-sell right csr-pointer mr-2"
        @click="openModal('nft-view-modal', nft, '', true)"
      >
        Sell
      </p>
      <p
        class="btn-sell left csr-pointer ml-2"
        @click="openModal('nft-view-modal', nft)"
      >
        View
      </p>
    </div>

    <div class="buttons" v-else-if="nft.price === 0">
      <p
        class="btn-sold right csr-pointer mr-2"
      >
        Sold
      </p>
    </div>

    <div class="buttons" v-else-if="nft.sellerAddress.toUpperCase() === defaultAccount.toUpperCase()">
      <p
        class="btn-active right csr-pointer mr-2"
        @click="openModal('nft-view-modal', nft, '', true, true)"
      >
        Edit
      </p>
      <p class="btn-sell left csr-pointer ml-2" @click="cancelListing">
        Cancel
      </p>
    </div>

    <div class="buttons" v-else>
      <button v-b-tooltip.hover :title="getPurchaseTooltipMsg()" v-if="nft.price !== 0" :disabled="!isValidForPurchase" :class="!isValidForPurchase || nft.sellerStatus ? 'not-allowed' : ''" class="btn-purchase right csr-pointer mr-2" @click="purchaseNft">
        Purchase
      </button>
      <p
        class="btn-purchase left csr-pointer ml-2"
        @click="openModal('nft-view-modal', nft)"
      >
        View
      </p>
    </div>
  </div>
</template>
```

## Arts Generator Example (Optional)

```javascript
const allImages = ['chara-0.png', 'chara-1.png', 'chara-2.png', 'chara-3.png'];

module.exports = (character) => {
  if (!character) {
    return '';
  }
  return allImages[character.id % allImages.length];
};
```
