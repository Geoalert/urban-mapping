# Open Urban Mapping

Introduction
------------
Buildings are commonly put on a map by digitizing their shapes over satellite imagery. If done manually, this can be an expensive and time-consuming task. Our project attempts to automate this process by delegating the digitizing routine to **neural networks**. It is now possible to digitize every building in the world using **computer vision and satellite imagery**. We strive to contribute some of our results to the community by filling in the data gaps in the [OpenStreetMap (OSM)](https://www.openstreetmap.org) buildings coverage.      

## The ongoing progress of Urban Mapping

In the map below, we've transformed both the Geoalert and OSM polygons into points by taking their centroids and compared the results (as of Sep 2020, Russia). [Vector tiles](https://en.wikipedia.org/wiki/Vector_tiles) are used to visulalize both layers.

### [View the map](https://geoalert.github.io/urban-mapping/) 


To continue the research and implementation of our Urban Mapping teсhnology, we've done several pilot projects with our partners [see the data we produced together with the Russian Post](https://github.com/Geoalert/vidnoe_benchmark) ). To learn more about the project, [read our blog](https://medium.com/geoalert-platform-urban-monitoring/urban-mapping-54-m-buildings-in-russia-10dc942ac2c4).


## Buildings Statistics - Russia

Based in Russia, we've picked its territory as our testing ground. By now we've automaticaly extracted **54+ mln building features** using different satellite imagery sources. We've compared our result with OSM using the buildings count. The resulting statistics (below) are displayed by [region](https://en.wikipedia.org/wiki/Federal_subjects_of_Russia). For the regions painted dark red, we have 3+ times more buildings than there are in OSM. At the same time, there are regions where we lag behind in building coverage. Many of them are remotely located and sparsely populated, hence Mapbox commonly has low-resolution (Landsat) and/or low-quality imagery for their territories, which explains the poor results. Of course, there may be other reasons for that, in which case we try to improve our models to perform better for those areas.   

![**Building count ratio Geoalert/OSM - Russia, by region**](src/images/comparison_OSM-Geoalert.png)

[**Click here to download the source dataset in GeoJSON**](https://github.com/Geoalert/urban-mapping/blob/master/russia_regions_stats.geojson)


## Open Urban Mapping - Russia

Open datasets are created based on ["Mapbox Satellite"](https://www.mapbox.com/maps/satellite) in order to be compatible with the OpenStreetMap license and contribution guides ([#License](#license)).
The permissive license of the Mapbox's "Mapbox Satellite" product comes at the cost of uneven quality of the imagery. For some less demanded (e.g. less populated) areas, only low-resolution and/or low-quality (winter/clouded/darkened) imagery is available. This makes our results equally uneven in terms of the quality of building detection. At times, the only way to achieve a decent result is to resort to manual validation and/or digitizing. Hence, we ask you to be ready for running into such areas of relatively poor coverage. We plan to gradually update our dataset manually or automatically if new, improved imagery arrives.

|Country|Region|Building Heights| Building Classes |Feature Count| Count Ratio to OSM, Sep 2020 | Format|Size (unzipped)|
|-------------|------------|----------|----------|-----------|------------|------------|-------------|
|Russia|[**Chechnya**](https://bit.ly/30voBD4)| - | - | 219,428| 6.5 | GeoPackage | 50Mb |
|Russia|[**Tyva**](https://bit.ly/3lEh6l8)| - | - | 31,463| 3.8 | GeoPackage | 10Mb |

## Mapping contribution - use cases
If you are an OpenStreetMap contributor, you can use this data to contribute to OSM directly or accelerate your own mapping efforts. Since the data was generated automatically, it should be thoroughly validated before import. You can preview and edit the data using QGIS, the OSM ID editor ("custom Map Data"), or JOSM. We also strongly recommend that you check [OSM imports community guidelines] https://wiki.openstreetmap.org/wiki/Import/Guidelines

The auto-mapping approach can also be used to help create maps from scratch in times of **emergencies** such as in [Irkutsk region, Russia, that was heavily flooded in the summer 2019](https://geoalert.github.io/Irkutsk-flood/), so we appreciate any contribution and/or related data requests.

If you'd like to help us with documentation, integration of datasets into third-party applications like JOSM, Rapid, etc., or promote this project, please check out the [issues](https://github.com/Geoalert/urban-mapping/issues) or create one to submit your request. You can also contact us directly at [hello@geoalert.io](mailto:hello@geoalert.io)

## Classification
Here is our generalized classification of buildings. We are looking to include more classes and improve the classification accuracy.

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
   <td>Roof outline (roof projection onto the footprint) of a multi-unit residential building (apartment complex)
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
    Private house (usually represents a single household)
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
   <td><img src="https://aeronetlab.space/img/class_img/105.jpg" />
   </td>
  </tr>
 </table>

## License
All data in this project is licensed under the [Open Database License (ODbL)](https://opendatacommons.org/licenses/odbl/) compatible with OSM.
The input data is copyrighted by the data providers but is not distributed along with the dataset. The Mapbox's Terms of Service state that
```You may use Studio or third-party software to trace Mapbox maps solely comprised of satellite imagery ("Mapbox Satellite Imagery") and produce derivative vector datasets for non-commercial purposes and for OpenStreetMap. (https://www.mapbox.com/legal/tos/#[YmuSEapb)```

## Technical details
* Coordinate reference system - EPSG: 4326
* Data format - GeoPackage or GeoJSON


## References
* [Subscribe to Geoalert blog](https://medium.com/@geoalert)
* [Microsoft buildings footprints](https://github.com/microsoft/USBuildingFootprints)
* [RapID - Facebook editor for OpenStreetMap](https://github.com/facebookincubator/RapiD)
* [Comparison of MS building footprints and OpenStreetMap by Azavea](https://demos.azavea.com/building-footprint-comparison/)
---------------------------
* Our project was supported by [Skolkovo Institute of Science and Technology](https://www.skoltech.ru/en)

<image src="https://cdn.skoltech.ru/img/logo.png" width="190">
