# The Open Urban Mapping project

Introduction
-------------
Whenever we use a digital map to look for the closest supermarket or find the fastest way home, buildings are one of the key elements that pop up on our screen. More often than not, the object of our search is located _in_ a certain building, be it our apartment, our favorite store or the office that we work in. Imagine there is no visual representation of that building on the map. Our office, shop or apartment may have coordinates of their own, but, arguably, we don't think in terms of coordinates. Our eyes can't _(yet?)_ calculate the latitude and longitude of what we're looking at, but they do a pretty good job recognizing the building from the map in reality.  

Hopefully, at this point, we've convinced you that the visual representation of buildings on a map is important, but how do those contours _(or 3D solids)_ get there? We usually take it for granted, leaving it to the almighty titans like Google, Microsoft or Yandex to somehow collect their coordinates, shapes, heights and then add all the various semantics like, for example, addresses and zip codes and, finally, draw them out on the map... We just want pull up our favorite app and do stuff! But behind the scenes, there is the painstaking work of cartographers who digitize the satellite images _(or, at times, even paper maps?...)_ and further enrich the resulting shapes with semantics. Oftentimes, there are also people who travel around and check on the spot whether the building exists and its semantics are correct. The whole process can get rather cumbersome, slow and expensive.  

At [Geoalert](https://geoalert.io), we're looking to automate this process by delegating the digitizing routine to _neural networks_. It is now possible to digitize every building in the world using _computer vision_ and _satellite imagery_. Our technology is powered by _open stack_ and we strive to contribute our results back to the community by filling the data gaps in [OpenStreetMap (OSM)](https://www.openstreetmap.org).    

## The ongoing progress

In the map below, we've transformed both Geoalert and OSM polygons into points by taking their centroids and compared the results (as of Dec 2019). [Vector tiles](https://en.wikipedia.org/wiki/Vector_tiles) are used to visulalize both layers.

[View map](https://geoalert.github.io/urban-mapping/) or [Read more in our blog](https://medium.com/geoalert-platform-urban-monitoring/urban-mapping-54-m-buildings-in-russia-10dc942ac2c4)


## Buildings Statistics

Based in Russia, we've picked its territory as our testing ground. By now, we've automaticaly extracted _54+ mln features_. In the map below, we compare our results with OSM in terms of the number of buildings by calculating the Geoalert/OSM count ratio. The statistics are displayed by [region](https://en.wikipedia.org/wiki/Federal_subjects_of_Russia).

![Building count ratio Geoalert/OSM - Russia, by region](https://geoalert.io/img/urban/region_statistics_by_geoalert.png)
[**Click here to download the source dataset in GeoJSON**](https://filebrowser.aeronetlab.space/s/INc6jlnQ8UTV6q6)


## Sample datasets

|GRID ID|Open datasets|Building heights|Geometry|Feature count|Format|Size (zipped)|
|-------------|------------|----------|----------|-----------|------------|------------|
|274|[Kaliningrad region, Russia](https://minio.aeronetlab.space/public/datasets/urban_mapping/kaliningrad_region_274.zip)| No | Polygons | 208,154| GeoPackage, GeoJSON | 40Mb |
|286|[Smolensk region, Russia](https://minio.aeronetlab.space/public/datasets/urban_mapping/smolensk_region_286.zip)| No | Polygons | 378,930| GeoPackage, GeoJSON | 80Mb |

## Mapping contribution
We also use our data for Emergency Mapping as in [Irkutsk region, Russia, that was heavily flooded in the summer 2019](https://geoalert.github.io/Irkutsk-flood/) - so we appreciate any related contribution and/or data requests.

Please check for the [issues](https://github.com/Geoalert/urban-mapping/issues) or contact us directly at [hello@geoalert.io](mailto:hello@geoalert.io)

## Classification
Here is the generalized classification of buildings. We are looking to include more classes and improve the accuracy.

<table>
  <tr>
   <td><strong>ID</strong>
   </td>
   <td><strong>Class name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td width="130px"><strong>Visual</strong>
   </td>
  </tr>

  <tr>
   <td><p style="text-align: right">
101</p>

   </td>
   <td>Residential buildings
   </td>
   <td>Roofs (not "footprints") of multistory apartment buildings (having 3+ stories) 
   </td>
   <td><img src="https://aeronetlab.space/img/class_img/101.png"/>
   </td>
  </tr>
 
  <tr>
   <td><p style="text-align: right">
102</p>

   </td>
   <td>Houses
   </td>
   <td>
    Private houses (usually representing a single household)
   </td>
   <td><img src="https://aeronetlab.space/img/class_img/102.png" />
   </td>
  </tr>
 
 <tr>
   <td><p style="text-align: right">
103</p>

   </td>
   <td>Industrial buildings
   </td>
   <td>Plants, large hangars, warehouses, etc.
   </td>
   <td><img src="https://aeronetlab.space/img/class_img/103.png" />
   </td>
  </tr>
  
  
 <tr>
   <td><p style="text-align: right">
104</p>

   </td>
   <td>Commercial buildings
   </td>
   <td>Offices, retail, etc.
   </td>
   <td><img src="https://aeronetlab.space/img/class_img/104.png" />
   </td>
  </tr>

  <tr>
   <td><p style="text-align: right">
105</p>

   </td>
   <td>Other non-residential buildings
   </td>
   <td>Garages, transformer boxes, small hangars, etc.
   </td>
   <td><img src="https://aeronetlab.space/img/class_img/105.png" />
   </td>
  </tr>
 </table>

## License
This data is licensed under the [Open Database License (ODbL)](https://opendatacommons.org/licenses/odbl/) which is compatible with OSM.
The input data is copyrighted by the data providers but is not distributed along with the dataset. The Mapbox Terms of Service state that 
```You may use Studio or third-party software to trace Mapbox maps solely comprised of satellite imagery ("Mapbox Satellite Imagery") and produce derivative vector datasets for non-commercial purposes and for OpenStreetMap. (https://www.mapbox.com/legal/tos/#[YmuSEapb)```

## Technical details
* Coordinate reference system - EPSG: 4326
* Data format - GeoPackage or GeoJSON

### Querying features through our HTTP API service
You can query our "Urban Mapping" data via the endpoint: `http://demo.geoalert.io/russia-buildings/geojson?`.  
! **Authorization** via `Basic Auth` is required.  
In response to a valid request, the service returns a single GeoJSON file `(EPSG:4326)` as a chunked stream.  
It should be safe to fetch reasonably large chunks of data.  

The **target area** is specified by request parameters:  
`bbox` in the format `[xmin, ymin, xmax, ymax]`  
or  
`polygon` in the GeoJSON format

**additional parameters**

`srid` specifies the coordinate reference system by its EPSG code of the bbox/polygon (default is `4326`, optional is `3857`)

if `points` [boolean] is set to true, points (building centroids) are returned instead of polygons. Default is `false` 
#
E.g.:   
*GET `https://demo.geoalert.io/russia-buildings/geojson?bbox=[4152175.426194705, 7475188.589286174, 4162876.6101546297, 7488526.850721938]&srid=3857`

*GET `https://demo.geoalert.io/russia-buildings/geojson?polygon={"type":"Polygon","coordinates":[[[37.29962647696191,55.64732925994261],[37.29962647696191,55.579658422801145],[37.39575684805566,55.579658422801145],[37.39575684805566,55.64732925994261],[37.29962647696191,55.64732925994261]]]}&points=true`  

*POST requests are also supported (at the same endpoint URL). Bbox or polygon must be supplied in the request body. Other request parameters work as they do with GET requests. This option may be useful for querying features using a complex polygon that doesn't fit into the URL character limit.

## References
* [Subscribe to our blog](https://medium.com/geoalert-platform-urban-monitoring/urban-mapping-54-m-buildings-in-russia-10dc942ac2c4)
* [Microsoft buildings footprints](https://github.com/microsoft/USBuildingFootprints)
* [RapID - Facebook editor for OpenStreetMap](https://github.com/facebookincubator/RapiD)
* [Comparison of MS building footprints and OpenStreetMap by Azavea](https://demos.azavea.com/building-footprint-comparison/)
---------------------------
* Our project is supported by [Skolkovo Institute of Science and Technology](https://www.skoltech.ru/en)

<image src="https://cdn.skoltech.ru/img/logo.png" width="190">
