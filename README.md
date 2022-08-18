<p align="center">
  <a href="https://github.com/pooltogether/pooltogether--brand-assets">
    <img src="https://github.com/pooltogether/pooltogether--brand-assets/blob/977e03604c49c63314450b5d432fe57d34747c66/logo/pooltogether-logo--purple-gradient.png?raw=true" alt="PoolTogether Brand" style="max-width:100%;" width="200">
  </a>
</p>

<br />

## PoolTogether - Claimed Prizes subgraph

Subgraph to track events and data when an account claims a prize.

## Development

### Templates

Generate subgraph templates using one of the following commands.

Mainnet:
```
yarn prepare:mainnet
yarn prepare:polygon
yarn prepare:optimism
yarn prepare:avalanche
```

Testnet:
```
yarn prepare:goerli
```

### Schemas

Generate schemas using one of the following commands.

Mainnet:
```
yarn gen:mainnet
yarn gen:polygon
yarn gen:optimism
yarn gen:avalanche
```

Testnet:
```
yarn gen:goerli
```

### Tests

Run tests with the command: `yarn test`

## Deployment

### Deploy

Deploy using one of the following commands.

Mainnet:
```
yarn deploy:mainnet
yarn deploy:polygon
yarn deploy:optimism
yarn deploy:avalanche
```

Testnet:
```
yarn deploy:goerli
```

### Build and deploy

To build and deploy at once, use one of the following commands.

Mainnet:
```
yarn all-mainnet
yarn all-polygon
yarn all-optimism
yarn all-avalanche
```

Testnet:
```
yarn all-goerli
```

### Hosted Subgraphs

Subgraphs are hosted at the following URLs.

Mainnet:
- https://thegraph.com/hosted-service/subgraph/pooltogether/mainnet-v4-prizes-claimed
- https://thegraph.com/hosted-service/subgraph/pooltogether/polygon-v4-prizes-claimed
- https://thegraph.com/hosted-service/subgraph/pooltogether/optimism-v4-prizes-claimed
- https://thegraph.com/hosted-service/subgraph/pooltogether/avalanche-v4-prizes-claimed

Testnet:
- https://thegraph.com/hosted-service/subgraph/pooltogether/goerli-v4-prizes-claimed

