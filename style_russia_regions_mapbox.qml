<!DOCTYPE qgis PUBLIC 'http://mrcc.com/qgis.dtd' 'SYSTEM'>
<qgis simplifyAlgorithm="0" simplifyLocal="1" simplifyDrawingHints="1" minScale="100000000" labelsEnabled="0" maxScale="0" version="3.14.16-Pi" readOnly="0" styleCategories="AllStyleCategories" simplifyDrawingTol="1" hasScaleBasedVisibilityFlag="0" simplifyMaxScale="1">
  <flags>
    <Identifiable>1</Identifiable>
    <Removable>1</Removable>
    <Searchable>1</Searchable>
  </flags>
  <temporal accumulate="0" enabled="0" fixedDuration="0" startField="" endField="" endExpression="" durationField="" startExpression="" durationUnit="min" mode="0">
    <fixedRange>
      <start></start>
      <end></end>
    </fixedRange>
  </temporal>
  <renderer-v2 enableorderby="0" graduatedMethod="GraduatedColor" type="graduatedSymbol" forceraster="0" symbollevels="0" attr="ratio_mapbox_osm">
    <ranges>
      <range lower="0.000000000000000" label="no high-res imagery" render="true" upper="0.500000000000000" symbol="0"/>
      <range lower="0.500000000000000" label="0.5 - 0.9" render="true" upper="0.900000000000000" symbol="1"/>
      <range lower="0.900000000000000" label="0.9 - 1.1" render="true" upper="1.100000000000000" symbol="2"/>
      <range lower="1.100000000000000" label="1.1 - 2" render="true" upper="2.000000000000000" symbol="3"/>
      <range lower="2.000000000000000" label="2 - 3" render="true" upper="3.000000000000000" symbol="4"/>
      <range lower="3.000000000000000" label="> 3" render="true" upper="6.900000000000000" symbol="5"/>
    </ranges>
    <symbols>
      <symbol name="0" alpha="1" clip_to_extent="1" type="fill" force_rhr="0">
        <layer class="SimpleFill" enabled="1" locked="0" pass="0">
          <prop k="border_width_map_unit_scale" v="3x:0,0,0,0,0,0"/>
          <prop k="color" v="168,152,168,255"/>
          <prop k="joinstyle" v="bevel"/>
          <prop k="offset" v="0,0"/>
          <prop k="offset_map_unit_scale" v="3x:0,0,0,0,0,0"/>
          <prop k="offset_unit" v="MM"/>
          <prop k="outline_color" v="90,90,90,255"/>
          <prop k="outline_style" v="solid"/>
          <prop k="outline_width" v="0"/>
          <prop k="outline_width_unit" v="MM"/>
          <prop k="style" v="solid"/>
          <data_defined_properties>
            <Option type="Map">
              <Option name="name" type="QString" value=""/>
              <Option name="properties"/>
              <Option name="type" type="QString" value="collection"/>
            </Option>
          </data_defined_properties>
        </layer>
      </symbol>
      <symbol name="1" alpha="1" clip_to_extent="1" type="fill" force_rhr="0">
        <layer class="SimpleFill" enabled="1" locked="0" pass="0">
          <prop k="border_width_map_unit_scale" v="3x:0,0,0,0,0,0"/>
          <prop k="color" v="186,81,181,255"/>
          <prop k="joinstyle" v="bevel"/>
          <prop k="offset" v="0,0"/>
          <prop k="offset_map_unit_scale" v="3x:0,0,0,0,0,0"/>
          <prop k="offset_unit" v="MM"/>
          <prop k="outline_color" v="90,90,90,255"/>
          <prop k="outline_style" v="solid"/>
          <prop k="outline_width" v="0"/>
          <prop k="outline_width_unit" v="MM"/>
          <prop k="style" v="solid"/>
          <data_defined_properties>
            <Option type="Map">
              <Option name="name" type="QString" value=""/>
              <Option name="properties"/>
              <Option name="type" type="QString" value="collection"/>
            </Option>
          </data_defined_properties>
        </layer>
      </symbol>
      <symbol name="2" alpha="1" clip_to_extent="1" type="fill" force_rhr="0">
        <layer class="SimpleFill" enabled="1" locked="0" pass="0">
          <prop k="border_width_map_unit_scale" v="3x:0,0,0,0,0,0"/>
          <prop k="color" v="255,164,195,255"/>
          <prop k="joinstyle" v="bevel"/>
          <prop k="offset" v="0,0"/>
          <prop k="offset_map_unit_scale" v="3x:0,0,0,0,0,0"/>
          <prop k="offset_unit" v="MM"/>
          <prop k="outline_color" v="90,90,90,255"/>
          <prop k="outline_style" v="solid"/>
          <prop k="outline_width" v="0"/>
          <prop k="outline_width_unit" v="MM"/>
          <prop k="style" v="solid"/>
          <data_defined_properties>
            <Option type="Map">
              <Option name="name" type="QString" value=""/>
              <Option name="properties"/>
              <Option name="type" type="QString" value="collection"/>
            </Option>
          </data_defined_properties>
        </layer>
      </symbol>
      <symbol name="3" alpha="1" clip_to_extent="1" type="fill" force_rhr="0">
        <layer class="SimpleFill" enabled="1" locked="0" pass="0">
          <prop k="border_width_map_unit_scale" v="3x:0,0,0,0,0,0"/>
          <prop k="color" v="243,123,123,255"/>
          <prop k="joinstyle" v="bevel"/>
          <prop k="offset" v="0,0"/>
          <prop k="offset_map_unit_scale" v="3x:0,0,0,0,0,0"/>
          <prop k="offset_unit" v="MM"/>
          <prop k="outline_color" v="90,90,90,255"/>
          <prop k="outline_style" v="solid"/>
          <prop k="outline_width" v="0"/>
          <prop k="outline_width_unit" v="MM"/>
          <prop k="style" v="solid"/>
          <data_defined_properties>
            <Option type="Map">
              <Option name="name" type="QString" value=""/>
              <Option name="properties"/>
              <Option name="type" type="QString" value="collection"/>
            </Option>
          </data_defined_properties>
        </layer>
      </symbol>
      <symbol name="4" alpha="1" clip_to_extent="1" type="fill" force_rhr="0">
        <layer class="SimpleFill" enabled="1" locked="0" pass="0">
          <prop k="border_width_map_unit_scale" v="3x:0,0,0,0,0,0"/>
          <prop k="color" v="200,61,61,255"/>
          <prop k="joinstyle" v="bevel"/>
          <prop k="offset" v="0,0"/>
          <prop k="offset_map_unit_scale" v="3x:0,0,0,0,0,0"/>
          <prop k="offset_unit" v="MM"/>
          <prop k="outline_color" v="90,90,90,255"/>
          <prop k="outline_style" v="solid"/>
          <prop k="outline_width" v="0"/>
          <prop k="outline_width_unit" v="MM"/>
          <prop k="style" v="solid"/>
          <data_defined_properties>
            <Option type="Map">
              <Option name="name" type="QString" value=""/>
              <Option name="properties"/>
              <Option name="type" type="QString" value="collection"/>
            </Option>
          </data_defined_properties>
        </layer>
      </symbol>
      <symbol name="5" alpha="1" clip_to_extent="1" type="fill" force_rhr="0">
        <layer class="SimpleFill" enabled="1" locked="0" pass="0">
          <prop k="border_width_map_unit_scale" v="3x:0,0,0,0,0,0"/>
          <prop k="color" v="157,0,0,255"/>
          <prop k="joinstyle" v="bevel"/>
          <prop k="offset" v="0,0"/>
          <prop k="offset_map_unit_scale" v="3x:0,0,0,0,0,0"/>
          <prop k="offset_unit" v="MM"/>
          <prop k="outline_color" v="90,90,90,255"/>
          <prop k="outline_style" v="solid"/>
          <prop k="outline_width" v="0"/>
          <prop k="outline_width_unit" v="MM"/>
          <prop k="style" v="solid"/>
          <data_defined_properties>
            <Option type="Map">
              <Option name="name" type="QString" value=""/>
              <Option name="properties"/>
              <Option name="type" type="QString" value="collection"/>
            </Option>
          </data_defined_properties>
        </layer>
      </symbol>
    </symbols>
    <source-symbol>
      <symbol name="0" alpha="1" clip_to_extent="1" type="fill" force_rhr="0">
        <layer class="SimpleFill" enabled="1" locked="0" pass="0">
          <prop k="border_width_map_unit_scale" v="3x:0,0,0,0,0,0"/>
          <prop k="color" v="150,150,150,255"/>
          <prop k="joinstyle" v="bevel"/>
          <prop k="offset" v="0,0"/>
          <prop k="offset_map_unit_scale" v="3x:0,0,0,0,0,0"/>
          <prop k="offset_unit" v="MM"/>
          <prop k="outline_color" v="90,90,90,255"/>
          <prop k="outline_style" v="solid"/>
          <prop k="outline_width" v="0"/>
          <prop k="outline_width_unit" v="MM"/>
          <prop k="style" v="solid"/>
          <data_defined_properties>
            <Option type="Map">
              <Option name="name" type="QString" value=""/>
              <Option name="properties"/>
              <Option name="type" type="QString" value="collection"/>
            </Option>
          </data_defined_properties>
        </layer>
      </symbol>
    </source-symbol>
    <colorramp name="[source]" type="gradient">
      <prop k="color1" v="111,34,107,255"/>
      <prop k="color2" v="157,0,0,255"/>
      <prop k="discrete" v="0"/>
      <prop k="rampType" v="gradient"/>
      <prop k="stops" v="0.460145;247,77,239,255:0.5;252,174,213,255:0.539855;255,141,141,255"/>
    </colorramp>
    <classificationMethod id="Jenks">
      <symmetricMode enabled="0" symmetrypoint="0" astride="0"/>
      <labelFormat labelprecision="4" trimtrailingzeroes="1" format="%1 - %2"/>
      <parameters>
        <Option/>
      </parameters>
      <extraInformation/>
    </classificationMethod>
    <rotation/>
    <sizescale/>
  </renderer-v2>
  <customproperties>
    <property key="dualview/previewExpressions">
      <value>"name_ru"</value>
    </property>
    <property key="embeddedWidgets/count" value="0"/>
    <property key="variableNames"/>
    <property key="variableValues"/>
  </customproperties>
  <blendMode>0</blendMode>
  <featureBlendMode>0</featureBlendMode>
  <layerOpacity>1</layerOpacity>
  <SingleCategoryDiagramRenderer diagramType="Histogram" attributeLegend="1">
    <DiagramCategory enabled="0" direction="0" backgroundColor="#ffffff" minScaleDenominator="0" opacity="1" rotationOffset="270" spacing="5" penAlpha="255" height="15" penColor="#000000" barWidth="5" maxScaleDenominator="1e+8" spacingUnit="MM" spacingUnitScale="3x:0,0,0,0,0,0" penWidth="0" lineSizeScale="3x:0,0,0,0,0,0" showAxis="1" scaleDependency="Area" backgroundAlpha="255" sizeType="MM" scaleBasedVisibility="0" lineSizeType="MM" sizeScale="3x:0,0,0,0,0,0" labelPlacementMethod="XHeight" diagramOrientation="Up" minimumSize="0" width="15">
      <fontProperties description="Ubuntu,11,-1,5,50,0,0,0,0,0" style=""/>
      <axisSymbol>
        <symbol name="" alpha="1" clip_to_extent="1" type="line" force_rhr="0">
          <layer class="SimpleLine" enabled="1" locked="0" pass="0">
            <prop k="capstyle" v="square"/>
            <prop k="customdash" v="5;2"/>
            <prop k="customdash_map_unit_scale" v="3x:0,0,0,0,0,0"/>
            <prop k="customdash_unit" v="MM"/>
            <prop k="draw_inside_polygon" v="0"/>
            <prop k="joinstyle" v="bevel"/>
            <prop k="line_color" v="35,35,35,255"/>
            <prop k="line_style" v="solid"/>
            <prop k="line_width" v="0.26"/>
            <prop k="line_width_unit" v="MM"/>
            <prop k="offset" v="0"/>
            <prop k="offset_map_unit_scale" v="3x:0,0,0,0,0,0"/>
            <prop k="offset_unit" v="MM"/>
            <prop k="ring_filter" v="0"/>
            <prop k="use_custom_dash" v="0"/>
            <prop k="width_map_unit_scale" v="3x:0,0,0,0,0,0"/>
            <data_defined_properties>
              <Option type="Map">
                <Option name="name" type="QString" value=""/>
                <Option name="properties"/>
                <Option name="type" type="QString" value="collection"/>
              </Option>
            </data_defined_properties>
          </layer>
        </symbol>
      </axisSymbol>
    </DiagramCategory>
  </SingleCategoryDiagramRenderer>
  <DiagramLayerSettings dist="0" showAll="1" zIndex="0" placement="1" priority="0" obstacle="0" linePlacementFlags="18">
    <properties>
      <Option type="Map">
        <Option name="name" type="QString" value=""/>
        <Option name="properties"/>
        <Option name="type" type="QString" value="collection"/>
      </Option>
    </properties>
  </DiagramLayerSettings>
  <geometryOptions removeDuplicateNodes="0" geometryPrecision="0">
    <activeChecks/>
    <checkConfiguration type="Map">
      <Option name="QgsGeometryGapCheck" type="Map">
        <Option name="allowedGapsBuffer" type="double" value="0"/>
        <Option name="allowedGapsEnabled" type="bool" value="false"/>
        <Option name="allowedGapsLayer" type="QString" value=""/>
      </Option>
    </checkConfiguration>
  </geometryOptions>
  <referencedLayers/>
  <referencingLayers/>
  <fieldConfiguration>
    <field name="name_ru">
      <editWidget type="TextEdit">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field name="name_en">
      <editWidget type="TextEdit">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field name="federal_district">
      <editWidget type="TextEdit">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field name="count_osm">
      <editWidget type="Range">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field name="count_google">
      <editWidget type="Range">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field name="count_mapbox">
      <editWidget type="Range">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field name="images_2019_2020_pct">
      <editWidget type="TextEdit">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field name="ratio_google_osm">
      <editWidget type="TextEdit">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field name="ratio_mapbox_osm">
      <editWidget type="TextEdit">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
  </fieldConfiguration>
  <aliases>
    <alias name="" field="name_ru" index="0"/>
    <alias name="" field="name_en" index="1"/>
    <alias name="" field="federal_district" index="2"/>
    <alias name="" field="count_osm" index="3"/>
    <alias name="" field="count_google" index="4"/>
    <alias name="" field="count_mapbox" index="5"/>
    <alias name="" field="images_2019_2020_pct" index="6"/>
    <alias name="" field="ratio_google_osm" index="7"/>
    <alias name="" field="ratio_mapbox_osm" index="8"/>
  </aliases>
  <excludeAttributesWMS/>
  <excludeAttributesWFS/>
  <defaults>
    <default field="name_ru" expression="" applyOnUpdate="0"/>
    <default field="name_en" expression="" applyOnUpdate="0"/>
    <default field="federal_district" expression="" applyOnUpdate="0"/>
    <default field="count_osm" expression="" applyOnUpdate="0"/>
    <default field="count_google" expression="" applyOnUpdate="0"/>
    <default field="count_mapbox" expression="" applyOnUpdate="0"/>
    <default field="images_2019_2020_pct" expression="" applyOnUpdate="0"/>
    <default field="ratio_google_osm" expression="" applyOnUpdate="0"/>
    <default field="ratio_mapbox_osm" expression="" applyOnUpdate="0"/>
  </defaults>
  <constraints>
    <constraint field="name_ru" unique_strength="0" constraints="0" notnull_strength="0" exp_strength="0"/>
    <constraint field="name_en" unique_strength="0" constraints="0" notnull_strength="0" exp_strength="0"/>
    <constraint field="federal_district" unique_strength="0" constraints="0" notnull_strength="0" exp_strength="0"/>
    <constraint field="count_osm" unique_strength="0" constraints="0" notnull_strength="0" exp_strength="0"/>
    <constraint field="count_google" unique_strength="0" constraints="0" notnull_strength="0" exp_strength="0"/>
    <constraint field="count_mapbox" unique_strength="0" constraints="0" notnull_strength="0" exp_strength="0"/>
    <constraint field="images_2019_2020_pct" unique_strength="0" constraints="0" notnull_strength="0" exp_strength="0"/>
    <constraint field="ratio_google_osm" unique_strength="0" constraints="0" notnull_strength="0" exp_strength="0"/>
    <constraint field="ratio_mapbox_osm" unique_strength="0" constraints="0" notnull_strength="0" exp_strength="0"/>
  </constraints>
  <constraintExpressions>
    <constraint exp="" desc="" field="name_ru"/>
    <constraint exp="" desc="" field="name_en"/>
    <constraint exp="" desc="" field="federal_district"/>
    <constraint exp="" desc="" field="count_osm"/>
    <constraint exp="" desc="" field="count_google"/>
    <constraint exp="" desc="" field="count_mapbox"/>
    <constraint exp="" desc="" field="images_2019_2020_pct"/>
    <constraint exp="" desc="" field="ratio_google_osm"/>
    <constraint exp="" desc="" field="ratio_mapbox_osm"/>
  </constraintExpressions>
  <expressionfields/>
  <attributeactions>
    <defaultAction key="Canvas" value="{00000000-0000-0000-0000-000000000000}"/>
  </attributeactions>
  <attributetableconfig sortOrder="0" sortExpression="&quot;name_ru&quot;" actionWidgetStyle="dropDown">
    <columns>
      <column type="actions" width="-1" hidden="1"/>
      <column name="name_ru" type="field" width="225" hidden="0"/>
      <column name="name_en" type="field" width="-1" hidden="0"/>
      <column name="federal_district" type="field" width="-1" hidden="0"/>
      <column name="count_osm" type="field" width="-1" hidden="0"/>
      <column name="count_google" type="field" width="-1" hidden="0"/>
      <column name="count_mapbox" type="field" width="-1" hidden="0"/>
      <column name="images_2019_2020_pct" type="field" width="-1" hidden="0"/>
      <column name="ratio_google_osm" type="field" width="188" hidden="0"/>
      <column name="ratio_mapbox_osm" type="field" width="159" hidden="0"/>
    </columns>
  </attributetableconfig>
  <conditionalstyles>
    <rowstyles/>
    <fieldstyles/>
  </conditionalstyles>
  <storedexpressions/>
  <editform tolerant="1"></editform>
  <editforminit/>
  <editforminitcodesource>0</editforminitcodesource>
  <editforminitfilepath></editforminitfilepath>
  <editforminitcode><![CDATA[# -*- coding: utf-8 -*-
"""
QGIS forms can have a Python function that is called when the form is
opened.

Use this function to add extra logic to your forms.

Enter the name of the function in the "Python Init function"
field.
An example follows:
"""
from qgis.PyQt.QtWidgets import QWidget

def my_form_open(dialog, layer, feature):
	geom = feature.geometry()
	control = dialog.findChild(QWidget, "MyLineEdit")
]]></editforminitcode>
  <featformsuppress>0</featformsuppress>
  <editorlayout>generatedlayout</editorlayout>
  <editable>
    <field name="count_google" editable="1"/>
    <field name="count_mapbox" editable="1"/>
    <field name="count_osm" editable="1"/>
    <field name="federal_district" editable="1"/>
    <field name="fid" editable="1"/>
    <field name="images_2019_2020_pct" editable="1"/>
    <field name="name_en" editable="1"/>
    <field name="name_ru" editable="1"/>
    <field name="ratio_google_osm" editable="1"/>
    <field name="ratio_mapbox_osm" editable="1"/>
  </editable>
  <labelOnTop>
    <field name="count_google" labelOnTop="0"/>
    <field name="count_mapbox" labelOnTop="0"/>
    <field name="count_osm" labelOnTop="0"/>
    <field name="federal_district" labelOnTop="0"/>
    <field name="fid" labelOnTop="0"/>
    <field name="images_2019_2020_pct" labelOnTop="0"/>
    <field name="name_en" labelOnTop="0"/>
    <field name="name_ru" labelOnTop="0"/>
    <field name="ratio_google_osm" labelOnTop="0"/>
    <field name="ratio_mapbox_osm" labelOnTop="0"/>
  </labelOnTop>
  <dataDefinedFieldProperties/>
  <widgets/>
  <previewExpression>"name_ru"</previewExpression>
  <mapTip></mapTip>
  <layerGeometryType>2</layerGeometryType>
</qgis>
