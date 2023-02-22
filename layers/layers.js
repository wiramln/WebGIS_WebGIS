var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AnakPetak_RDAS_Menoreh_2 = new ol.format.GeoJSON();
var features_AnakPetak_RDAS_Menoreh_2 = format_AnakPetak_RDAS_Menoreh_2.readFeatures(json_AnakPetak_RDAS_Menoreh_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnakPetak_RDAS_Menoreh_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnakPetak_RDAS_Menoreh_2.addFeatures(features_AnakPetak_RDAS_Menoreh_2);
var lyr_AnakPetak_RDAS_Menoreh_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AnakPetak_RDAS_Menoreh_2, 
                style: style_AnakPetak_RDAS_Menoreh_2,
                interactive: true,
                title: '<img src="styles/legend/AnakPetak_RDAS_Menoreh_2.png" /> AnakPetak_RDAS_Menoreh'
            });
var format_TitikTanam_Ngadirejo_3 = new ol.format.GeoJSON();
var features_TitikTanam_Ngadirejo_3 = format_TitikTanam_Ngadirejo_3.readFeatures(json_TitikTanam_Ngadirejo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikTanam_Ngadirejo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikTanam_Ngadirejo_3.addFeatures(features_TitikTanam_Ngadirejo_3);
var lyr_TitikTanam_Ngadirejo_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TitikTanam_Ngadirejo_3, 
                style: style_TitikTanam_Ngadirejo_3,
                interactive: true,
                title: '<img src="styles/legend/TitikTanam_Ngadirejo_3.png" /> TitikTanam_Ngadirejo'
            });
var format_TitikTanam_Ngargoretno1_4 = new ol.format.GeoJSON();
var features_TitikTanam_Ngargoretno1_4 = format_TitikTanam_Ngargoretno1_4.readFeatures(json_TitikTanam_Ngargoretno1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikTanam_Ngargoretno1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikTanam_Ngargoretno1_4.addFeatures(features_TitikTanam_Ngargoretno1_4);
var lyr_TitikTanam_Ngargoretno1_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TitikTanam_Ngargoretno1_4, 
                style: style_TitikTanam_Ngargoretno1_4,
                interactive: true,
                title: '<img src="styles/legend/TitikTanam_Ngargoretno1_4.png" /> TitikTanam_Ngargoretno1'
            });
var format_TitikTanam_Paripurno_5 = new ol.format.GeoJSON();
var features_TitikTanam_Paripurno_5 = format_TitikTanam_Paripurno_5.readFeatures(json_TitikTanam_Paripurno_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikTanam_Paripurno_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikTanam_Paripurno_5.addFeatures(features_TitikTanam_Paripurno_5);
var lyr_TitikTanam_Paripurno_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TitikTanam_Paripurno_5, 
                style: style_TitikTanam_Paripurno_5,
                interactive: true,
                title: '<img src="styles/legend/TitikTanam_Paripurno_5.png" /> TitikTanam_Paripurno'
            });
var format_TitikTanam_Sriwedari_6 = new ol.format.GeoJSON();
var features_TitikTanam_Sriwedari_6 = format_TitikTanam_Sriwedari_6.readFeatures(json_TitikTanam_Sriwedari_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikTanam_Sriwedari_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikTanam_Sriwedari_6.addFeatures(features_TitikTanam_Sriwedari_6);
var lyr_TitikTanam_Sriwedari_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TitikTanam_Sriwedari_6, 
                style: style_TitikTanam_Sriwedari_6,
                interactive: true,
                title: '<img src="styles/legend/TitikTanam_Sriwedari_6.png" /> TitikTanam_Sriwedari'
            });
var format_TitikTanam_Ngadiharjo_7 = new ol.format.GeoJSON();
var features_TitikTanam_Ngadiharjo_7 = format_TitikTanam_Ngadiharjo_7.readFeatures(json_TitikTanam_Ngadiharjo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikTanam_Ngadiharjo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikTanam_Ngadiharjo_7.addFeatures(features_TitikTanam_Ngadiharjo_7);
var lyr_TitikTanam_Ngadiharjo_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TitikTanam_Ngadiharjo_7, 
                style: style_TitikTanam_Ngadiharjo_7,
                interactive: true,
                title: '<img src="styles/legend/TitikTanam_Ngadiharjo_7.png" /> TitikTanam_Ngadiharjo'
            });
var format_TitikTanam_Menoreh_8 = new ol.format.GeoJSON();
var features_TitikTanam_Menoreh_8 = format_TitikTanam_Menoreh_8.readFeatures(json_TitikTanam_Menoreh_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikTanam_Menoreh_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikTanam_Menoreh_8.addFeatures(features_TitikTanam_Menoreh_8);
var lyr_TitikTanam_Menoreh_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TitikTanam_Menoreh_8, 
                style: style_TitikTanam_Menoreh_8,
                interactive: true,
                title: '<img src="styles/legend/TitikTanam_Menoreh_8.png" /> TitikTanam_Menoreh'
            });
var format_TitikTanam_Kenalan_9 = new ol.format.GeoJSON();
var features_TitikTanam_Kenalan_9 = format_TitikTanam_Kenalan_9.readFeatures(json_TitikTanam_Kenalan_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikTanam_Kenalan_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikTanam_Kenalan_9.addFeatures(features_TitikTanam_Kenalan_9);
var lyr_TitikTanam_Kenalan_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TitikTanam_Kenalan_9, 
                style: style_TitikTanam_Kenalan_9,
                interactive: true,
                title: '<img src="styles/legend/TitikTanam_Kenalan_9.png" /> TitikTanam_Kenalan'
            });
var format_TitikTanam_Kalisalak_10 = new ol.format.GeoJSON();
var features_TitikTanam_Kalisalak_10 = format_TitikTanam_Kalisalak_10.readFeatures(json_TitikTanam_Kalisalak_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikTanam_Kalisalak_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikTanam_Kalisalak_10.addFeatures(features_TitikTanam_Kalisalak_10);
var lyr_TitikTanam_Kalisalak_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TitikTanam_Kalisalak_10, 
                style: style_TitikTanam_Kalisalak_10,
                interactive: true,
                title: '<img src="styles/legend/TitikTanam_Kalisalak_10.png" /> TitikTanam_Kalisalak'
            });
var format_TitikTanam_Kalirejo_11 = new ol.format.GeoJSON();
var features_TitikTanam_Kalirejo_11 = format_TitikTanam_Kalirejo_11.readFeatures(json_TitikTanam_Kalirejo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikTanam_Kalirejo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikTanam_Kalirejo_11.addFeatures(features_TitikTanam_Kalirejo_11);
var lyr_TitikTanam_Kalirejo_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TitikTanam_Kalirejo_11, 
                style: style_TitikTanam_Kalirejo_11,
                interactive: true,
                title: '<img src="styles/legend/TitikTanam_Kalirejo_11.png" /> TitikTanam_Kalirejo'
            });
var format_TitikTanam_Giripurno_12 = new ol.format.GeoJSON();
var features_TitikTanam_Giripurno_12 = format_TitikTanam_Giripurno_12.readFeatures(json_TitikTanam_Giripurno_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikTanam_Giripurno_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikTanam_Giripurno_12.addFeatures(features_TitikTanam_Giripurno_12);
var lyr_TitikTanam_Giripurno_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TitikTanam_Giripurno_12, 
                style: style_TitikTanam_Giripurno_12,
                interactive: true,
                title: '<img src="styles/legend/TitikTanam_Giripurno_12.png" /> TitikTanam_Giripurno'
            });
var format_TitikTanam_Candirejo_13 = new ol.format.GeoJSON();
var features_TitikTanam_Candirejo_13 = format_TitikTanam_Candirejo_13.readFeatures(json_TitikTanam_Candirejo_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikTanam_Candirejo_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikTanam_Candirejo_13.addFeatures(features_TitikTanam_Candirejo_13);
var lyr_TitikTanam_Candirejo_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TitikTanam_Candirejo_13, 
                style: style_TitikTanam_Candirejo_13,
                interactive: true,
                title: '<img src="styles/legend/TitikTanam_Candirejo_13.png" /> TitikTanam_Candirejo'
            });
var format_TitikTanam_Bigaran_14 = new ol.format.GeoJSON();
var features_TitikTanam_Bigaran_14 = format_TitikTanam_Bigaran_14.readFeatures(json_TitikTanam_Bigaran_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikTanam_Bigaran_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikTanam_Bigaran_14.addFeatures(features_TitikTanam_Bigaran_14);
var lyr_TitikTanam_Bigaran_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TitikTanam_Bigaran_14, 
                style: style_TitikTanam_Bigaran_14,
                interactive: true,
                title: '<img src="styles/legend/TitikTanam_Bigaran_14.png" /> TitikTanam_Bigaran'
            });
var format_Jalan_15 = new ol.format.GeoJSON();
var features_Jalan_15 = format_Jalan_15.readFeatures(json_Jalan_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_15.addFeatures(features_Jalan_15);
var lyr_Jalan_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_15, 
                style: style_Jalan_15,
                interactive: false,
    title: 'Jalan<br />\
    <img src="styles/legend/Jalan_15_0.png" /> Jalan Kabupaten<br />\
    <img src="styles/legend/Jalan_15_1.png" /> Jalan Provinsi<br />\
    <img src="styles/legend/Jalan_15_2.png" /> <br />'
        });
var format_Batas_Desa_16 = new ol.format.GeoJSON();
var features_Batas_Desa_16 = format_Batas_Desa_16.readFeatures(json_Batas_Desa_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Desa_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Desa_16.addFeatures(features_Batas_Desa_16);
var lyr_Batas_Desa_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Batas_Desa_16, 
                style: style_Batas_Desa_16,
                interactive: false,
                title: '<img src="styles/legend/Batas_Desa_16.png" /> Batas_Desa'
            });
var format_Batas_Kec_17 = new ol.format.GeoJSON();
var features_Batas_Kec_17 = format_Batas_Kec_17.readFeatures(json_Batas_Kec_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Kec_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Kec_17.addFeatures(features_Batas_Kec_17);
var lyr_Batas_Kec_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Batas_Kec_17, 
                style: style_Batas_Kec_17,
                interactive: false,
                title: '<img src="styles/legend/Batas_Kec_17.png" /> Batas_Kec'
            });
var format_Tracking_Jalan_18 = new ol.format.GeoJSON();
var features_Tracking_Jalan_18 = format_Tracking_Jalan_18.readFeatures(json_Tracking_Jalan_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tracking_Jalan_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tracking_Jalan_18.addFeatures(features_Tracking_Jalan_18);
var lyr_Tracking_Jalan_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tracking_Jalan_18, 
                style: style_Tracking_Jalan_18,
                interactive: false,
                title: '<img src="styles/legend/Tracking_Jalan_18.png" /> Tracking_Jalan'
            });
var format_Points_19 = new ol.format.GeoJSON();
var features_Points_19 = format_Points_19.readFeatures(json_Points_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Points_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Points_19.addFeatures(features_Points_19);
var lyr_Points_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Points_19, 
                style: style_Points_19,
                interactive: false,
                title: '<img src="styles/legend/Points_19.png" /> Points'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_AnakPetak_RDAS_Menoreh_2.setVisible(true);lyr_TitikTanam_Ngadirejo_3.setVisible(true);lyr_TitikTanam_Ngargoretno1_4.setVisible(true);lyr_TitikTanam_Paripurno_5.setVisible(true);lyr_TitikTanam_Sriwedari_6.setVisible(true);lyr_TitikTanam_Ngadiharjo_7.setVisible(true);lyr_TitikTanam_Menoreh_8.setVisible(true);lyr_TitikTanam_Kenalan_9.setVisible(true);lyr_TitikTanam_Kalisalak_10.setVisible(true);lyr_TitikTanam_Kalirejo_11.setVisible(true);lyr_TitikTanam_Giripurno_12.setVisible(true);lyr_TitikTanam_Candirejo_13.setVisible(true);lyr_TitikTanam_Bigaran_14.setVisible(true);lyr_Jalan_15.setVisible(true);lyr_Batas_Desa_16.setVisible(true);lyr_Batas_Kec_17.setVisible(true);lyr_Tracking_Jalan_18.setVisible(true);lyr_Points_19.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_GoogleSatellite_1,lyr_AnakPetak_RDAS_Menoreh_2,lyr_TitikTanam_Ngadirejo_3,lyr_TitikTanam_Ngargoretno1_4,lyr_TitikTanam_Paripurno_5,lyr_TitikTanam_Sriwedari_6,lyr_TitikTanam_Ngadiharjo_7,lyr_TitikTanam_Menoreh_8,lyr_TitikTanam_Kenalan_9,lyr_TitikTanam_Kalisalak_10,lyr_TitikTanam_Kalirejo_11,lyr_TitikTanam_Giripurno_12,lyr_TitikTanam_Candirejo_13,lyr_TitikTanam_Bigaran_14,lyr_Jalan_15,lyr_Batas_Desa_16,lyr_Batas_Kec_17,lyr_Tracking_Jalan_18,lyr_Points_19];
lyr_AnakPetak_RDAS_Menoreh_2.set('fieldAliases', {'CPCL': 'CPCL', 'Dusun': 'Dusun', 'Desa': 'Desa', 'Kecamatan': 'Kecamatan', 'Zona': 'Zona', });
lyr_TitikTanam_Ngadirejo_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CPCL': 'CPCL', 'Jns_Tanama': 'Jns_Tanama', 'Kondisi': 'Kondisi', 'Tinggi': 'Tinggi', 'Tinggi_Slm': 'Tinggi_Slm', });
lyr_TitikTanam_Ngargoretno1_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Jns_Tanama': 'Jns_Tanama', 'CPCL': 'CPCL', 'Kondisi': 'Kondisi', 'Tinggi': 'Tinggi', 'Tinggi_Slm': 'Tinggi_Slm', });
lyr_TitikTanam_Paripurno_5.set('fieldAliases', {'CPCL': 'CPCL', 'Jns_Tanama': 'Jns_Tanama', 'Kondisi': 'Kondisi', 'Tinggi': 'Tinggi', 'Tinggi_Slm': 'Tinggi_Slm', });
lyr_TitikTanam_Sriwedari_6.set('fieldAliases', {'CPCL': 'CPCL', 'Jns_Tanama': 'Jns_Tanama', 'Kondisi': 'Kondisi', 'Tinggi': 'Tinggi', 'Tinggi_Slm': 'Tinggi_Slm', });
lyr_TitikTanam_Ngadiharjo_7.set('fieldAliases', {'CPCL': 'CPCL', 'Jns_Tanama': 'Jns_Tanama', 'Kondisi': 'Kondisi', 'Tinggi': 'Tinggi', 'Tinggi_Slm': 'Tinggi_Slm', });
lyr_TitikTanam_Menoreh_8.set('fieldAliases', {'CPCL': 'CPCL', 'Jns_Tanama': 'Jns_Tanama', 'Kondisi': 'Kondisi', 'Tinggi': 'Tinggi', 'Tinggi_Slm': 'Tinggi_Slm', });
lyr_TitikTanam_Kenalan_9.set('fieldAliases', {'CPCL': 'CPCL', 'Jns_Tanama': 'Jns_Tanama', 'Kondisi': 'Kondisi', 'Tinggi': 'Tinggi', 'Tgl_Slm': 'Tgl_Slm', });
lyr_TitikTanam_Kalisalak_10.set('fieldAliases', {'CPCL': 'CPCL', 'Jns_Tanama': 'Jns_Tanama', 'Kondisi': 'Kondisi', 'Tinggi': 'Tinggi', 'Tinggi_Slm': 'Tinggi_Slm', });
lyr_TitikTanam_Kalirejo_11.set('fieldAliases', {'CPCL': 'CPCL', 'Jns_Tanama': 'Jns_Tanama', 'Kondisi': 'Kondisi', 'Tinggi': 'Tinggi', 'Tinggi_Slm': 'Tinggi_Slm', });
lyr_TitikTanam_Giripurno_12.set('fieldAliases', {'CPCL': 'CPCL', 'Jns_Tanama': 'Jns_Tanama', 'Kondisi': 'Kondisi', 'Tinggi': 'Tinggi', 'Tinggi_Slm': 'Tinggi_Slm', });
lyr_TitikTanam_Candirejo_13.set('fieldAliases', {'CPCL': 'CPCL', 'Jns_Tanama': 'Jns_Tanama', 'Kondisi': 'Kondisi', 'Tinggi': 'Tinggi', 'Tinggi_Slm': 'Tinggi_Slm', });
lyr_TitikTanam_Bigaran_14.set('fieldAliases', {'CPCL': 'CPCL', 'Jns_Tanama': 'Jns_Tanama', 'Kondisi': 'Kondisi', 'Tinggi': 'Tinggi', 'Tinggi_Slm': 'Tinggi_Slm', });
lyr_Jalan_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fid_1': 'fid_1', 'OBJECTID_1': 'OBJECTID_1', 'Kl_Dat_Das': 'Kl_Dat_Das', 'Nm_Ruas': 'Nm_Ruas', 'Thn_Data': 'Thn_Data', 'Status': 'Status', 'Fungsi': 'Fungsi', 'Mendukung': 'Mendukung', 'Ura_Dukung': 'Ura_Dukung', 'Kd_Bd_PU': 'Kd_Bd_PU', 'Kd_Jns_Inf': 'Kd_Jns_Inf', 'Kd_Inf': 'Kd_Inf', 'Propinsi': 'Propinsi', 'Kab_Kot': 'Kab_Kot', 'Kecamatan': 'Kecamatan', 'Desa_Kel': 'Desa_Kel', 'Tk_Ruas_Aw': 'Tk_Ruas_Aw', 'Tk_Ruas_Ak': 'Tk_Ruas_Ak', 'Kd_Patok': 'Kd_Patok', 'Km_Awal': 'Km_Awal', 'Km_Akhir': 'Km_Akhir', 'Nm_Lintas': 'Nm_Lintas', 'Kon_Baik': 'Kon_Baik', 'Kon_Sdg': 'Kon_Sdg', 'Kon_Rgn': 'Kon_Rgn', 'Kon_Rusak': 'Kon_Rusak', 'Kon_Mntp': 'Kon_Mntp', 'Kon_T_Mntp': 'Kon_T_Mntp', 'Panjang': 'Panjang', 'Lbr_Keras': 'Lbr_Keras', 'LHRT': 'LHRT', 'VCR': 'VCR', 'Tipe_Jln': 'Tipe_Jln', 'MST': 'MST', 'Tanah_Kri': 'Tanah_Kri', 'Macadam': 'Macadam', 'Aspal': 'Aspal', 'Rigid': 'Rigid', 'Thn_Pen_Ak': 'Thn_Pen_Ak', 'Jns_Pen': 'Jns_Pen', 'Koord_X_Aw': 'Koord_X_Aw', 'Koord_Y_Aw': 'Koord_Y_Aw', 'Koord_X_Ak': 'Koord_X_Ak', 'Koord_Y_Ak': 'Koord_Y_Ak', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Batas_Desa_16.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'fid_1': 'fid_1', 'OBJECTID': 'OBJECTID', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Klasifikas': 'Klasifikas', 'SUMBER': 'SUMBER', 'luas': 'luas', 'Kabupaten': 'Kabupaten', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Batas_Kec_17.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'fid_1': 'fid_1', 'OBJECTID': 'OBJECTID', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SUMBER': 'SUMBER', 'LUAS': 'LUAS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Tracking_Jalan_18.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Points_19.set('fieldAliases', {'OID': 'OID', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'TimeSpan': 'TimeSpan', 'TimeStamp': 'TimeStamp', 'BeginTime': 'BeginTime', 'EndTime': 'EndTime', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', });
lyr_AnakPetak_RDAS_Menoreh_2.set('fieldImages', {'CPCL': 'TextEdit', 'Dusun': 'TextEdit', 'Desa': 'TextEdit', 'Kecamatan': 'TextEdit', 'Zona': 'TextEdit', });
lyr_TitikTanam_Ngadirejo_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'CPCL': 'TextEdit', 'Jns_Tanama': 'TextEdit', 'Kondisi': 'TextEdit', 'Tinggi': 'TextEdit', 'Tinggi_Slm': 'TextEdit', });
lyr_TitikTanam_Ngargoretno1_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Jns_Tanama': 'TextEdit', 'CPCL': 'TextEdit', 'Kondisi': 'TextEdit', 'Tinggi': 'TextEdit', 'Tinggi_Slm': 'TextEdit', });
lyr_TitikTanam_Paripurno_5.set('fieldImages', {'CPCL': 'TextEdit', 'Jns_Tanama': 'TextEdit', 'Kondisi': 'TextEdit', 'Tinggi': 'TextEdit', 'Tinggi_Slm': 'TextEdit', });
lyr_TitikTanam_Sriwedari_6.set('fieldImages', {'CPCL': 'TextEdit', 'Jns_Tanama': 'TextEdit', 'Kondisi': 'TextEdit', 'Tinggi': 'TextEdit', 'Tinggi_Slm': 'TextEdit', });
lyr_TitikTanam_Ngadiharjo_7.set('fieldImages', {'CPCL': 'TextEdit', 'Jns_Tanama': 'TextEdit', 'Kondisi': 'TextEdit', 'Tinggi': 'TextEdit', 'Tinggi_Slm': 'TextEdit', });
lyr_TitikTanam_Menoreh_8.set('fieldImages', {'CPCL': 'TextEdit', 'Jns_Tanama': 'TextEdit', 'Kondisi': 'TextEdit', 'Tinggi': 'TextEdit', 'Tinggi_Slm': 'TextEdit', });
lyr_TitikTanam_Kenalan_9.set('fieldImages', {'CPCL': 'TextEdit', 'Jns_Tanama': 'TextEdit', 'Kondisi': 'TextEdit', 'Tinggi': 'Range', 'Tgl_Slm': 'TextEdit', });
lyr_TitikTanam_Kalisalak_10.set('fieldImages', {'CPCL': 'TextEdit', 'Jns_Tanama': 'TextEdit', 'Kondisi': 'TextEdit', 'Tinggi': 'TextEdit', 'Tinggi_Slm': 'TextEdit', });
lyr_TitikTanam_Kalirejo_11.set('fieldImages', {'CPCL': 'TextEdit', 'Jns_Tanama': 'TextEdit', 'Kondisi': 'TextEdit', 'Tinggi': 'Range', 'Tinggi_Slm': 'Range', });
lyr_TitikTanam_Giripurno_12.set('fieldImages', {'CPCL': 'TextEdit', 'Jns_Tanama': 'TextEdit', 'Kondisi': 'TextEdit', 'Tinggi': 'Range', 'Tinggi_Slm': 'Range', });
lyr_TitikTanam_Candirejo_13.set('fieldImages', {'CPCL': 'TextEdit', 'Jns_Tanama': 'TextEdit', 'Kondisi': 'TextEdit', 'Tinggi': 'Range', 'Tinggi_Slm': 'Range', });
lyr_TitikTanam_Bigaran_14.set('fieldImages', {'CPCL': 'TextEdit', 'Jns_Tanama': 'TextEdit', 'Kondisi': 'TextEdit', 'Tinggi': 'Range', 'Tinggi_Slm': 'Range', });
lyr_Jalan_15.set('fieldImages', {'OBJECTID': 'TextEdit', 'fid_1': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'Kl_Dat_Das': 'TextEdit', 'Nm_Ruas': 'TextEdit', 'Thn_Data': 'TextEdit', 'Status': 'TextEdit', 'Fungsi': 'TextEdit', 'Mendukung': 'TextEdit', 'Ura_Dukung': 'TextEdit', 'Kd_Bd_PU': 'TextEdit', 'Kd_Jns_Inf': 'TextEdit', 'Kd_Inf': 'TextEdit', 'Propinsi': 'TextEdit', 'Kab_Kot': 'TextEdit', 'Kecamatan': 'TextEdit', 'Desa_Kel': 'TextEdit', 'Tk_Ruas_Aw': 'TextEdit', 'Tk_Ruas_Ak': 'TextEdit', 'Kd_Patok': 'TextEdit', 'Km_Awal': 'TextEdit', 'Km_Akhir': 'TextEdit', 'Nm_Lintas': 'TextEdit', 'Kon_Baik': 'TextEdit', 'Kon_Sdg': 'TextEdit', 'Kon_Rgn': 'TextEdit', 'Kon_Rusak': 'TextEdit', 'Kon_Mntp': 'TextEdit', 'Kon_T_Mntp': 'TextEdit', 'Panjang': 'TextEdit', 'Lbr_Keras': 'TextEdit', 'LHRT': 'TextEdit', 'VCR': 'TextEdit', 'Tipe_Jln': 'TextEdit', 'MST': 'TextEdit', 'Tanah_Kri': 'TextEdit', 'Macadam': 'TextEdit', 'Aspal': 'TextEdit', 'Rigid': 'TextEdit', 'Thn_Pen_Ak': 'TextEdit', 'Jns_Pen': 'TextEdit', 'Koord_X_Aw': 'TextEdit', 'Koord_Y_Aw': 'TextEdit', 'Koord_X_Ak': 'TextEdit', 'Koord_Y_Ak': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_Batas_Desa_16.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'fid_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Klasifikas': 'TextEdit', 'SUMBER': 'TextEdit', 'luas': 'TextEdit', 'Kabupaten': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Batas_Kec_17.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'fid_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SUMBER': 'TextEdit', 'LUAS': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Tracking_Jalan_18.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Points_19.set('fieldImages', {'OID': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'Range', 'AltMode': 'Range', 'Base': 'TextEdit', 'TimeSpan': 'Range', 'TimeStamp': 'Range', 'BeginTime': 'TextEdit', 'EndTime': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'HasLabel': 'Range', 'LabelID': 'Range', });
lyr_AnakPetak_RDAS_Menoreh_2.set('fieldLabels', {'CPCL': 'inline label', 'Dusun': 'no label', 'Desa': 'no label', 'Kecamatan': 'no label', 'Zona': 'inline label', });
lyr_TitikTanam_Ngadirejo_3.set('fieldLabels', {'OBJECTID': 'no label', 'CPCL': 'inline label', 'Jns_Tanama': 'inline label', 'Kondisi': 'inline label', 'Tinggi': 'inline label', 'Tinggi_Slm': 'inline label', });
lyr_TitikTanam_Ngargoretno1_4.set('fieldLabels', {'OBJECTID': 'no label', 'Jns_Tanama': 'inline label', 'CPCL': 'no label', 'Kondisi': 'inline label', 'Tinggi': 'inline label', 'Tinggi_Slm': 'inline label', });
lyr_TitikTanam_Paripurno_5.set('fieldLabels', {'CPCL': 'inline label', 'Jns_Tanama': 'inline label', 'Kondisi': 'inline label', 'Tinggi': 'inline label', 'Tinggi_Slm': 'inline label', });
lyr_TitikTanam_Sriwedari_6.set('fieldLabels', {'CPCL': 'inline label', 'Jns_Tanama': 'inline label', 'Kondisi': 'inline label', 'Tinggi': 'inline label', 'Tinggi_Slm': 'inline label', });
lyr_TitikTanam_Ngadiharjo_7.set('fieldLabels', {'CPCL': 'inline label', 'Jns_Tanama': 'inline label', 'Kondisi': 'inline label', 'Tinggi': 'inline label', 'Tinggi_Slm': 'inline label', });
lyr_TitikTanam_Menoreh_8.set('fieldLabels', {'CPCL': 'inline label', 'Jns_Tanama': 'inline label', 'Kondisi': 'inline label', 'Tinggi': 'inline label', 'Tinggi_Slm': 'inline label', });
lyr_TitikTanam_Kenalan_9.set('fieldLabels', {'CPCL': 'no label', 'Jns_Tanama': 'no label', 'Kondisi': 'no label', 'Tinggi': 'no label', 'Tgl_Slm': 'no label', });
lyr_TitikTanam_Kalisalak_10.set('fieldLabels', {'CPCL': 'inline label', 'Jns_Tanama': 'inline label', 'Kondisi': 'inline label', 'Tinggi': 'inline label', 'Tinggi_Slm': 'inline label', });
lyr_TitikTanam_Kalirejo_11.set('fieldLabels', {'CPCL': 'inline label', 'Jns_Tanama': 'inline label', 'Kondisi': 'inline label', 'Tinggi': 'inline label', 'Tinggi_Slm': 'inline label', });
lyr_TitikTanam_Giripurno_12.set('fieldLabels', {'CPCL': 'inline label', 'Jns_Tanama': 'inline label', 'Kondisi': 'inline label', 'Tinggi': 'inline label', 'Tinggi_Slm': 'inline label', });
lyr_TitikTanam_Candirejo_13.set('fieldLabels', {'CPCL': 'inline label', 'Jns_Tanama': 'inline label', 'Kondisi': 'inline label', 'Tinggi': 'inline label', 'Tinggi_Slm': 'inline label', });
lyr_TitikTanam_Bigaran_14.set('fieldLabels', {'CPCL': 'inline label', 'Jns_Tanama': 'inline label', 'Kondisi': 'inline label', 'Tinggi': 'inline label', 'Tinggi_Slm': 'inline label', });
lyr_Jalan_15.set('fieldLabels', {'OBJECTID': 'no label', 'fid_1': 'no label', 'OBJECTID_1': 'no label', 'Kl_Dat_Das': 'no label', 'Nm_Ruas': 'no label', 'Thn_Data': 'no label', 'Status': 'no label', 'Fungsi': 'no label', 'Mendukung': 'no label', 'Ura_Dukung': 'no label', 'Kd_Bd_PU': 'no label', 'Kd_Jns_Inf': 'no label', 'Kd_Inf': 'no label', 'Propinsi': 'no label', 'Kab_Kot': 'no label', 'Kecamatan': 'no label', 'Desa_Kel': 'no label', 'Tk_Ruas_Aw': 'no label', 'Tk_Ruas_Ak': 'no label', 'Kd_Patok': 'no label', 'Km_Awal': 'no label', 'Km_Akhir': 'no label', 'Nm_Lintas': 'no label', 'Kon_Baik': 'no label', 'Kon_Sdg': 'no label', 'Kon_Rgn': 'no label', 'Kon_Rusak': 'no label', 'Kon_Mntp': 'no label', 'Kon_T_Mntp': 'no label', 'Panjang': 'no label', 'Lbr_Keras': 'no label', 'LHRT': 'no label', 'VCR': 'no label', 'Tipe_Jln': 'no label', 'MST': 'no label', 'Tanah_Kri': 'no label', 'Macadam': 'no label', 'Aspal': 'no label', 'Rigid': 'no label', 'Thn_Pen_Ak': 'no label', 'Jns_Pen': 'no label', 'Koord_X_Aw': 'no label', 'Koord_Y_Aw': 'no label', 'Koord_X_Ak': 'no label', 'Koord_Y_Ak': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', });
lyr_Batas_Desa_16.set('fieldLabels', {'OBJECTID_1': 'no label', 'fid_1': 'no label', 'OBJECTID': 'no label', 'KDEBPS': 'inline label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'inline label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Klasifikas': 'no label', 'SUMBER': 'no label', 'luas': 'no label', 'Kabupaten': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Batas_Kec_17.set('fieldLabels', {'OBJECTID_1': 'no label', 'fid_1': 'no label', 'OBJECTID': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SUMBER': 'no label', 'LUAS': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Tracking_Jalan_18.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Points_19.set('fieldLabels', {'OID': 'no label', 'Name': 'inline label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'TimeSpan': 'no label', 'TimeStamp': 'no label', 'BeginTime': 'no label', 'EndTime': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', 'LabelID': 'no label', });
lyr_Points_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});