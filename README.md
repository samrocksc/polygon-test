# How to run:
---
In order to run this app, you must have a google maps API key. 

```
npm i
export REACT_APP_GRAPH_URI=http://localhost:4000
export GMAPS_API_KEY=<insert api key here>
npm run server &&
npm run start
```

## About This Application
---

**Time To Complete: 3 Hour, 30 mins**
For the most part I kept the entire application's structure extremely simple, and just used a single resolver hooked up to a standard Apollo Server.  As I have been working with AppSync a lot over the past few months at my current job, I found that it was easier to just use the TypeDefs here to enforce server-side validation.

Most of the time on this project was researching how the whole polygon factor worked.  I took the mathematical approach instead of using an API online.  Using the `point-in-polygon` package made this super easy, and I was able to just use some vim macros to convert the kml layer into usable data to be able to referencea polygon framework-agnostically.

I did build in a simple redundancy in turning the API into an array with a reduce function over the available delivery areas.  The reasons I did this, was because due to future consideration for expansion of the API, it's a safe assumption that we would probably have multiple overlays with different information in the future.

Anyways, I had a lot of fun writing this!



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
