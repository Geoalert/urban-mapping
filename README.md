# Open Urban Mapping

Introduction
------------
This project was mainly aimed at demonstrating "AI-Mapping" technology using Computer vision and Deel learning. As soon as there are more tools and open data we reviewed the concept to share specific datasets with the community. It is dedicated to analysts of urban environment and land management as well as to the wide range of educational and resesrch projects. One more thing is to provide this data via [#API](#API) for more convenient and interoperable use.

## Demonstration of Urban Mapping

### Russia ###

[**Building count ratio Geoalert/OSM - Russia, by region, 2019. Click here to download the source dataset in GeoJSON**](https://github.com/Geoalert/urban-mapping/blob/master/russia_regions_stats.geojson)


|Country|Region|Feature Count| Count Ratio to OSM, Feb 2021| Format | Size (unzipped) |
|-------------|------------|----------|----------|-----------|------------|
|Russia|[**Chechnya**](https://filebrowser.aeronetlab.space/s/hj9NzpVuZLu16LU/download)| 542,636| 15.7 | GeoPackage | 144.5MB |
|Russia|[**Tyva**](https://filebrowser.aeronetlab.space/s/AE2iIxGN8UoYfOU/download)| 74,696| 8.5 | GeoPackage | 19.0MB |
|Russia|[**Moscow & Moscow Region**](https://filebrowser.aeronetlab.space/s/9XRq7kvRQSreQu2/download)| 3,919,167 | 3.5 | GeoPackage | 863MB |

### Uzbekistan ###

|Country|Region|Feature Count| Count Ratio to OSM| Format | Size (unzipped) |
|-------------|------------|----------|----------|-----------|------------|
|Uzbekistan|[**Tashkent**](https://filebrowser.aeronetlab.space/s/eVanE4T9AIR46TY/download)| ~387,000| -- | GeoPackage | 276MB |

**Layers:**

|Name|Description|Feature Count|
|-------------|------------|----------|
|Construction Tashkent| Construction sites detected in Tashkent area. Note, the date of the Mapbox imagery is not recent and these areas are changing fast | ~500|
|Building footprints with OSM| Building footprints with heights merged with OSM data by 0.5 IoU threshold | ~387.000|
|Building footprints without OSM| Building footprints with heights | ~359.000|
|Tashkent AOI buffered| Admin boundaries of Tashkent city area with 0.5 degree buffered zone | ~359.000|

## Mapping contribution

If you are an OpenStreetMap contributor, you can use this data to contribute to OSM directly or accelerate your own mapping efforts. Since the data was generated automatically, it should be thoroughly validated before import. You can preview and edit the data using QGIS, the OSM ID editor ("custom Map Data"), or JOSM. We also strongly recommend that you check [OSM imports community guidelines](https://wiki.openstreetmap.org/wiki/Import/Guidelines).
We've created the Open Urban Mapping [wiki](https://wiki.openstreetmap.org/wiki/Geoalert_Open_Urban_Mapping) - you can find some tips on editing and doing imports based on our datasets.

The auto-mapping approach can also be used to help create maps from scratch in times of **emergencies** such as in [Irkutsk region, Russia, that was heavily flooded in the summer 2019](https://geoalert.github.io/Irkutsk-flood/), so we appreciate any contribution and/or related data requests.

If you'd like to help us with documentation, integration of datasets into third-party applications like JOSM, RapID, etc., or promote this project, please check out the [issues](https://github.com/Geoalert/urban-mapping/issues) or create one to submit your request. You can also contact us directly at [hello@geoalert.io](mailto:hello@geoalert.io)


## API

In case you don't want to downloald the whole thing for one region - we provide API to extract features from datasets by polygon area. 
The service streams geojson features, producing a chunked stream as an http response. It should be safe to fetch reasonably large pieces of data. The output data is in `GeoJSON` format.

Endpoint: `https://urban-db-vp.geoalert.io/api/v0/collections/b8a3381f-70e1-4946-b5cb-3d68bbf05946/export`  
User: `open_user`
Password: `ddPUNyp6fzvC`  


*  The query area must be specified in lat-lon coordinates by the `polygon` in geojson format  
*  The `points` param, when set to `true`, converts feature geometries into points (a point inside the geometry, closest to the centroid). Defaults to `false`.

#
E.g.:  

```http
POST /api/v0/collections/b8a3381f-70e1-4946-b5cb-3d68bbf05946/export?points=true HTTP/1.1
Host: urban-db-vp.geoalert.io
Content-Type: application/json
Content-Length: 553
{"type": "Polygon",
        "coordinates": [
          [
            [
              37.332916259765625,
              55.677197244655474
            ],
            [
              37.35557556152344,
              55.677197244655474
            ],
            [
              37.35557556152344,
              55.6910360645666
            ],
            [
              37.332916259765625,
              55.6910360645666
            ],
            [
              37.332916259765625,
              55.677197244655474
            ]
          ]
        ] }
``` 

[See full API documentation with examples.](https://documenter.getpostman.com/view/5400715/TzmBEZwG#7efdc10c-827e-47c8-b9ea-382933a67364)


## License

Open datasets are created based on ["Mapbox Satellite"](https://www.mapbox.com/maps/satellite) in order to be compatible with the OpenStreetMap license and contribution guides.

All data in this project is licensed under the [Open Database License (ODbL)](https://opendatacommons.org/licenses/odbl/).
The input imagery data is copyrighted by the data providers but is not distributed along with the dataset. 
The Mapbox's Terms of Service states that:

>You may use Studio or third-party software to trace Mapbox maps solely comprised of satellite imagery ("Mapbox Satellite Imagery") and produce derivative vector datasets for non-commercial purposes and for OpenStreetMap

**You are free to copy, distribute, transmit and adapt this data, as long as you credit "Geoalert / Mapbox" as the data source. You are supposed to distribute the derived data under the same license.**

## Technical details
* Coordinate reference system - EPSG: 4326
* Data format - GeoPackage or GeoJSON

## Media references
* [Moscow and Moscow region update, Jul 23 2021: 1M+ building footprints (in Russian)](https://geoalert.medium.com/open-urban-mapping-api-%D0%BC%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F-%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C-%D0%B8-%D0%BC%D0%BE%D1%81%D0%BA%D0%B2%D0%B0-92dd36fb56dd)
* [Chechnya update, Jul 16 2021 - the least mapped region in OSM](https://geoalert.medium.com/open-urban-mapping-update-chechnya-and-tyva-40798c127265)

## References
* [Subscribe to Geoalert blog](https://medium.com/@geoalert)
* [Microsoft buildings footprints](https://github.com/microsoft/USBuildingFootprints)
* [RapID - Facebook editor for OpenStreetMap](https://github.com/facebookincubator/RapiD)
---------------------------
Our project was supported by: 


[![Skolkovo Institute of Science and Technology](src/images/logo-skoltech.png)](https://www.skoltech.ru/en)

[![Russian Innovation Promotion Fund](src/images/logo-fasie.png)](https://fasie.ru/)
