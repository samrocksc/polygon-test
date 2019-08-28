# How to run:
---
In order to run this app, you must have a google maps API key

```
npm i
export REACT_APP_GRAPH_URI=http://localhost:4000
export GMAPS_API_KEY=<insert api key here>
npm run server &&
npm run start
```

## Accessing graphql client
---
There is actually a graphql client running on port 4000, you can test all of my results via the API only by using the following graphql query:

```
{
 getLocation(address: "Ungargasse 17, Vienna, Austria") {
    status
  	deliveryAreas
  	locationData {
      placeId
      formattedAddress
    }
  }
}
```


## Known Bugs
There shouldn't be any known bugs
