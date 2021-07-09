# Open Urban Mapping

Introduction
------------
This project attempts to automate the process of digitizing building footprints by delegating the routine to **neural networks**. It is now possible to digitize every building in the world using **computer vision and satellite imagery**. We strive to contribute some of our results to the community by filling the data gaps in [OpenStreetMap (OSM)](https://www.openstreetmap.org) coverage.      

## Demonstration of Urban Mapping

In the map below, we've transformed both Geoalert and OSM polygons (relevant at the beginning of 2020 year) into points by taking their centroids and compared the results. [Vector tiles](https://en.wikipedia.org/wiki/Vector_tiles) are used to visulalize both layers.

!!!!
### [View map](https://geoalert.github.io/urban-mapping/) 
!!!!

To learn more about the Open Urban Mapping project [read our blog](https://medium.com/geoalert-platform-urban-monitoring/open-urban-mapping-russia-ca978dfb4636)


## Buildings Statistics - Russia

Based in Russia, we've picked its territory as our testing ground. So far we've automaticaly extracted **54+ mln building features** using different satellite imagery sources. We compared our statistics with OSM by buildings count. The statistics are displayed by [region](https://en.wikipedia.org/wiki/Federal_subjects_of_Russia).

![**Building count ratio Geoalert/OSM - Russia, by region**](src/images/comparison_OSM-Geoalert.png)

[**Click here to download the source dataset in GeoJSON**](https://github.com/Geoalert/urban-mapping/blob/master/russia_regions_stats.geojson)


## Project history

At our first try we managed to process imagery for all populated ares in Russia. But the results were poor in many regions due to the low quality of Mapbox satellite imagery (see our related blog posts). 
Since Mapbox drastically updated its imagery we started reprocessing some regions - check here if updated - depending on the community demand and the most incompleteness in Openstreetmap building coverage.


## Open Urban Mapping - download datasets

Open datasets are created based on ["Mapbox Satellite"](https://www.mapbox.com/maps/satellite) in order to be compatible with the OpenStreetMap license and contribution guides ([#License](#license)).

|Country|Region|Building Heights| Classes |Feature Count| Count Ratio to OSM, Feb 2021| Statistics - places | Format | Size (unzipped) |
|-------------|------------|----------|----------|-----------|------------|------------|----------|-------------|
|Russia|[**Chechnya**](https://filebrowser.aeronetlab.space/s/CeT7WidzbIGqaFa/download)| - | - | 542,636| 15.7 | ✓ | GeoPackage | 33.4MB |
|Russia|[**Tyva**](https://filebrowser.aeronetlab.space/s/AE2iIxGN8UoYfOU/download)| - | - | 66,299| 8.3 | - | GeoPackage | 5.4MB |
|Russia|[**Moscow region**](https://bit.ly/2T6R5P8)| - | ✓ | 2,617,993 | 2.9 | ✓ | GeoPackage | 241MB |


## Mapping contribution

If you are an OpenStreetMap contributor, you can use this data to contribute to OSM directly or accelerate your own mapping efforts. Since the data was generated automatically, it should be thoroughly validated before import. You can preview and edit the data using QGIS, the OSM ID editor ("custom Map Data"), or JOSM. We also strongly recommend that you check [OSM imports community guidelines](https://wiki.openstreetmap.org/wiki/Import/Guidelines).
We've created the Open Urban Mapping [wiki](https://wiki.openstreetmap.org/wiki/Geoalert_Open_Urban_Mapping) - you can find some tips on editing and doing imports based on our datasets.

The auto-mapping approach can also be used to help create maps from scratch in times of **emergencies** such as in [Irkutsk region, Russia, that was heavily flooded in the summer 2019](https://geoalert.github.io/Irkutsk-flood/), so we appreciate any contribution and/or related data requests.

If you'd like to help us with documentation, integration of datasets into third-party applications like JOSM, RapID, etc., or promote this project, please check out the [issues](https://github.com/Geoalert/urban-mapping/issues) or create one to submit your request. You can also contact us directly at [hello@geoalert.io](mailto:hello@geoalert.io)


## License
All data in this project is licensed under the [Open Database License (ODbL)](https://opendatacommons.org/licenses/odbl/) compatible with OSM.
The input data is copyrighted by the data providers but is not distributed along with the dataset. The Mapbox's Terms of Service state that
>You may use Studio or third-party software to trace Mapbox maps solely comprised of satellite imagery ("Mapbox Satellite Imagery") and produce derivative vector datasets for non-commercial purposes and for OpenStreetMap

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
