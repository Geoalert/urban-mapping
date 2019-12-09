# Open Urban Mapping project

Introduction
-------------
Now it's possible to digitize all buildings in the World using Computer vision and Satellite imagery. This project is started to help accelerate the routine work of digitizing of the buildings and to fill the data gaps in Openstreetmap's open data.  

## Ongoing progress
Our first target domain is Russian territory. We are going to update information on the dataset coverage and to provide some metrics on the comparison with OSM. At the moment we reached the number of 54+MLN buildings.

![](https://geoalert.io/img/urban/urban_coverage.png)

Please refer to the grid IDs at the scheme below to download the appropriate datasets.

![Russia grid](https://i.ibb.co/y0TLmtg/russia-dataset-nov2019.png)

|GRID ID|Open datasets|Building heights|Geometry|Feature count|Format|Size (zipped)|
|-------------|------------|----------|----------|-----------|------------|------------|
|274|[Kaliningrad region, Russia](https://minio.aeronetlab.space/public/datasets/urban_mapping/kaliningrad_region_274.zip)| No | | 208,154| GeoPackage, GeoJSON | 40Mb |
|286|[Smolensk region, Russia](https://minio.aeronetlab.space/public/datasets/urban_mapping/smolensk_region_286.zip)| No | | 378,930| GeoPackage, GeoJSON | 80Mb |

## Emergency Mapping contribution
The data is used for Emergency Mapping response like in [Irkutsk region, Russia, that was heavily flooded in summer 2019](https://geoalert.github.io/Irkutsk-flood/) - so we will appreciate any related contribution and data requests.

Please check for the [issues](https://github.com/Geoalert/urban-mapping/issues) or contact us directly by [hello@geoalert.io](mailto:hello@geoalert.io)

## Classification
Here is the generalized classification of buildings by most confident types we propose in the datasets. This can be extended to more classes.

<table>
  <tr>
   <td><strong>ID</strong>
   </td>
   <td><strong>CLass name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td width="130px"><strong>Visual</strong>
   </td>
  </tr>

   <td colspan="4" >
<h2>Buildings and Construction</h2>


</td>
  </tr>
  <tr>
   <td><p style="text-align: right">
101</p>

   </td>
   <td>Residential building
   </td>
   <td>Roofs (not "footprints") of apartment multistorey buildings (shoud have at least 3+ storeys). Low floor apartment blocks in high density residential areas. 
   </td>
   <td><img src="https://aeronetlab.space/img/class_img/101.png"/>
   </td>
  </tr>
 
  <tr>
   <td><p style="text-align: right">
102</p>

   </td>
   <td>House
   </td>
   <td>
    Private houses. Usualy corresponds to the single household.
   </td>
   <td><img src="https://aeronetlab.space/img/class_img/102.png" />
   </td>
  </tr>
  <tr>
   <td><p style="text-align: right">
103</p>

   </td>
   <td>Industrial building
   </td>
   <td>Plants, etc.
   </td>
   <td><img src="https://aeronetlab.space/img/class_img/103.png" />
   </td>
  </tr>

  <tr>
   <td><p style="text-align: right">
105</p>

   </td>
   <td>Other non-residential buildings
   </td>
   <td>Garages, hangars, etc. - mostly small non-residential buildings
   </td>
   <td>
   </td>
  </tr>
 </table>

## License
This data is licensed under the [Open Database License (ODbL)](https://opendatacommons.org/licenses/odbl/) which is compatible with OSM.
The input data is copyrighted by data providers but is not distributed along with the dataset. In Mapbox Terms of Service it's stated clear that 
```You may use Studio or third-party software to trace Mapbox maps solely comprised of satellite imagery ("Mapbox Satellite Imagery") and produce derivative vector datasets for non-commercial purposes and for OpenStreetMap. (https://www.mapbox.com/legal/tos/#[YmuSEapb)```

## Technical details
* Coordinate reference system - EPSG: 4326
* Data format - GeoPackage or GeoJSON files

### Querying features through http API service
It is possible to query processed "Urban Mapping" data over http via the endpoint: `http://demo.geoalert.io/russia-buildings/geojson?`.  
! **Authorization** via `Basic Auth` is required.  
The output is geojson file in `EPSG:4326`.  
The service fetches geojson features, producing a chunked stream as an http response. It should be safe to fetch reasonably large chunks of data.

The **target area** is specified by request params:  
`bbox` in the format `[xmin, ymin, xmax, ymax]`  
or  
`polygon` in the geojson format

**additional params**

`srid` specifies the coordinate system reference by EPSG ID of the bbox/polygon (default is `4326`, optional is `3857`)

`points` [boolean] specifies if to get points geometry (buildings centroids) instead of polygons. Default is `false` 
#
E.g. queries:   
*GET `https://demo.geoalert.io/russia-buildings/geojson?bbox=[4152175.426194705, 7475188.589286174, 4162876.6101546297, 7488526.850721938]&srid=3857`

*GET `https://demo.geoalert.io/russia-buildings/geojson?polygon={"type":"Polygon","coordinates":[[[37.29962647696191,55.64732925994261],[37.29962647696191,55.579658422801145],[37.39575684805566,55.579658422801145],[37.39575684805566,55.64732925994261],[37.29962647696191,55.64732925994261]]]}&points=true`  

*POST requests are also supported (with the same endpoint url). Bbox or polygon must be supplied in the request body. Other request parameters work as with GET requests. This option may be useful for querying features by a complex polygon, which doesn't fit into URL character limit.

## References
* [Microsoft buildings footprints](https://github.com/microsoft/USBuildingFootprints)
* [RapID - Facebook editor for Openstreetmap](https://github.com/facebookincubator/RapiD)
* [Comparison of MS buildings footprints and Openstreetmap by Azavea](https://demos.azavea.com/building-footprint-comparison/)
---------------------------
* Our project is supported by [Skolkovo Institute of Science and Technology](https://www.skoltech.ru/en)

<image src="https://cdn.skoltech.ru/img/logo.png" width="190">
