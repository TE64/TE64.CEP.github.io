var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_COMMUNECEP_1 = new ol.format.GeoJSON();
var features_COMMUNECEP_1 = format_COMMUNECEP_1.readFeatures(json_COMMUNECEP_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMMUNECEP_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMMUNECEP_1.addFeatures(features_COMMUNECEP_1);
var lyr_COMMUNECEP_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COMMUNECEP_1, 
                style: style_COMMUNECEP_1,
                interactive: true,
    title: 'COMMUNE CEP<br />\
    <img src="styles/legend/COMMUNECEP_1_0.png" /> Clément<br />\
    <img src="styles/legend/COMMUNECEP_1_1.png" /> Violaine<br />\
    <img src="styles/legend/COMMUNECEP_1_2.png" /> Elsa<br />\
    <img src="styles/legend/COMMUNECEP_1_3.png" /> Mathieu<br />\
    <img src="styles/legend/COMMUNECEP_1_4.png" /> Non adhérant<br />'
        });
var format_64_2 = new ol.format.GeoJSON();
var features_64_2 = format_64_2.readFeatures(json_64_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_64_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_64_2.addFeatures(features_64_2);
var lyr_64_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_64_2, 
                style: style_64_2,
                interactive: true,
                title: '<img src="styles/legend/64_2.png" /> 64'
            });
var format_LOTNORD_3 = new ol.format.GeoJSON();
var features_LOTNORD_3 = format_LOTNORD_3.readFeatures(json_LOTNORD_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOTNORD_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTNORD_3.addFeatures(features_LOTNORD_3);
var lyr_LOTNORD_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LOTNORD_3, 
                style: style_LOTNORD_3,
                interactive: true,
                title: '<img src="styles/legend/LOTNORD_3.png" /> LOT NORD'
            });
var format_LOTOUEST_4 = new ol.format.GeoJSON();
var features_LOTOUEST_4 = format_LOTOUEST_4.readFeatures(json_LOTOUEST_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOTOUEST_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTOUEST_4.addFeatures(features_LOTOUEST_4);
var lyr_LOTOUEST_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LOTOUEST_4, 
                style: style_LOTOUEST_4,
                interactive: true,
                title: '<img src="styles/legend/LOTOUEST_4.png" /> LOT OUEST'
            });
var format_LOTSUD_5 = new ol.format.GeoJSON();
var features_LOTSUD_5 = format_LOTSUD_5.readFeatures(json_LOTSUD_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOTSUD_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTSUD_5.addFeatures(features_LOTSUD_5);
var lyr_LOTSUD_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LOTSUD_5, 
                style: style_LOTSUD_5,
                interactive: true,
                title: '<img src="styles/legend/LOTSUD_5.png" /> LOT SUD'
            });
var format_LOTEST_6 = new ol.format.GeoJSON();
var features_LOTEST_6 = format_LOTEST_6.readFeatures(json_LOTEST_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOTEST_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTEST_6.addFeatures(features_LOTEST_6);
var lyr_LOTEST_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LOTEST_6, 
                style: style_LOTEST_6,
                interactive: true,
                title: '<img src="styles/legend/LOTEST_6.png" /> LOT EST'
            });

lyr_OSMStandard_0.setVisible(true);lyr_COMMUNECEP_1.setVisible(true);lyr_64_2.setVisible(true);lyr_LOTNORD_3.setVisible(true);lyr_LOTOUEST_4.setVisible(true);lyr_LOTSUD_5.setVisible(true);lyr_LOTEST_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_COMMUNECEP_1,lyr_64_2,lyr_LOTNORD_3,lyr_LOTOUEST_4,lyr_LOTSUD_5,lyr_LOTEST_6];
lyr_COMMUNECEP_1.set('fieldAliases', {'INSEE': 'INSEE', 'Nom': 'Nom', 'Lot de Mai': 'Lot de Mai', 'Type d\'ent': 'Type d\'ent', 'Copie de E': 'Copie de E', 'Copie de_1': 'Copie de_1', 'Copie de_2': 'Copie de_2', 'Copie de_3': 'Copie de_3', });
lyr_64_2.set('fieldAliases', {'INSEE': 'INSEE', 'Nom': 'Nom', 'Lot de Mai': 'Lot de Mai', 'Type d\'ent': 'Type d\'ent', 'Copie de E': 'Copie de E', 'Copie de_1': 'Copie de_1', 'Copie de_2': 'Copie de_2', 'Copie de_3': 'Copie de_3', });
lyr_LOTNORD_3.set('fieldAliases', {'INSEE': 'INSEE', 'Nom': 'Nom', 'Lot de Mai': 'Lot de Mai', 'Type d\'ent': 'Type d\'ent', 'Copie de E': 'Copie de E', 'Copie de_1': 'Copie de_1', 'Copie de_2': 'Copie de_2', 'Copie de_3': 'Copie de_3', });
lyr_LOTOUEST_4.set('fieldAliases', {'INSEE': 'INSEE', 'Nom': 'Nom', 'Lot de Mai': 'Lot de Mai', 'Type d\'ent': 'Type d\'ent', 'Copie de E': 'Copie de E', 'Copie de_1': 'Copie de_1', 'Copie de_2': 'Copie de_2', 'Copie de_3': 'Copie de_3', });
lyr_LOTSUD_5.set('fieldAliases', {'INSEE': 'INSEE', 'Nom': 'Nom', 'Lot de Mai': 'Lot de Mai', 'Type d\'ent': 'Type d\'ent', 'Copie de E': 'Copie de E', 'Copie de_1': 'Copie de_1', 'Copie de_2': 'Copie de_2', 'Copie de_3': 'Copie de_3', });
lyr_LOTEST_6.set('fieldAliases', {'INSEE': 'INSEE', 'Nom': 'Nom', 'Lot de Mai': 'Lot de Mai', 'Type d\'ent': 'Type d\'ent', 'Copie de E': 'Copie de E', 'Copie de_1': 'Copie de_1', 'Copie de_2': 'Copie de_2', 'Copie de_3': 'Copie de_3', });
lyr_COMMUNECEP_1.set('fieldImages', {'INSEE': 'TextEdit', 'Nom': 'TextEdit', 'Lot de Mai': 'TextEdit', 'Type d\'ent': 'TextEdit', 'Copie de E': 'TextEdit', 'Copie de_1': 'TextEdit', 'Copie de_2': 'TextEdit', 'Copie de_3': 'TextEdit', });
lyr_64_2.set('fieldImages', {'INSEE': 'TextEdit', 'Nom': 'TextEdit', 'Lot de Mai': 'TextEdit', 'Type d\'ent': 'TextEdit', 'Copie de E': '', 'Copie de_1': '', 'Copie de_2': '', 'Copie de_3': '', });
lyr_LOTNORD_3.set('fieldImages', {'INSEE': 'TextEdit', 'Nom': 'TextEdit', 'Lot de Mai': 'TextEdit', 'Type d\'ent': 'TextEdit', 'Copie de E': 'TextEdit', 'Copie de_1': 'TextEdit', 'Copie de_2': 'TextEdit', 'Copie de_3': 'TextEdit', });
lyr_LOTOUEST_4.set('fieldImages', {'INSEE': 'TextEdit', 'Nom': 'TextEdit', 'Lot de Mai': 'TextEdit', 'Type d\'ent': 'TextEdit', 'Copie de E': 'TextEdit', 'Copie de_1': 'TextEdit', 'Copie de_2': 'TextEdit', 'Copie de_3': 'TextEdit', });
lyr_LOTSUD_5.set('fieldImages', {'INSEE': 'TextEdit', 'Nom': 'TextEdit', 'Lot de Mai': 'TextEdit', 'Type d\'ent': 'TextEdit', 'Copie de E': 'TextEdit', 'Copie de_1': 'TextEdit', 'Copie de_2': 'TextEdit', 'Copie de_3': 'TextEdit', });
lyr_LOTEST_6.set('fieldImages', {'INSEE': 'TextEdit', 'Nom': 'TextEdit', 'Lot de Mai': 'TextEdit', 'Type d\'ent': 'TextEdit', 'Copie de E': 'TextEdit', 'Copie de_1': 'TextEdit', 'Copie de_2': 'TextEdit', 'Copie de_3': 'TextEdit', });
lyr_COMMUNECEP_1.set('fieldLabels', {'INSEE': 'no label', 'Nom': 'no label', 'Lot de Mai': 'no label', 'Type d\'ent': 'no label', 'Copie de E': 'no label', 'Copie de_1': 'no label', 'Copie de_2': 'no label', 'Copie de_3': 'no label', });
lyr_64_2.set('fieldLabels', {'INSEE': 'no label', 'Nom': 'no label', 'Lot de Mai': 'no label', 'Type d\'ent': 'no label', 'Copie de E': 'no label', 'Copie de_1': 'no label', 'Copie de_2': 'no label', 'Copie de_3': 'no label', });
lyr_LOTNORD_3.set('fieldLabels', {'INSEE': 'no label', 'Nom': 'no label', 'Lot de Mai': 'no label', 'Type d\'ent': 'no label', 'Copie de E': 'no label', 'Copie de_1': 'no label', 'Copie de_2': 'no label', 'Copie de_3': 'inline label', });
lyr_LOTOUEST_4.set('fieldLabels', {'INSEE': 'no label', 'Nom': 'no label', 'Lot de Mai': 'no label', 'Type d\'ent': 'no label', 'Copie de E': 'no label', 'Copie de_1': 'no label', 'Copie de_2': 'no label', 'Copie de_3': 'no label', });
lyr_LOTSUD_5.set('fieldLabels', {'INSEE': 'header label', 'Nom': 'header label', 'Lot de Mai': 'no label', 'Type d\'ent': 'header label', 'Copie de E': 'header label', 'Copie de_1': 'no label', 'Copie de_2': 'no label', 'Copie de_3': 'no label', });
lyr_LOTEST_6.set('fieldLabels', {'INSEE': 'no label', 'Nom': 'no label', 'Lot de Mai': 'no label', 'Type d\'ent': 'no label', 'Copie de E': 'no label', 'Copie de_1': 'no label', 'Copie de_2': 'no label', 'Copie de_3': 'no label', });
lyr_LOTEST_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});