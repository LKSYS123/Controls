import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { useState, useEffect } from 'react';
import TileWMS from 'ol/source/TileWMS';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {fromLonLat} from 'ol/proj';

const KoreanMap = () => {
    const tileWMS = new TileWMS({
        url:'http://192.168.1.47:8088/geoserver/all_Tml_blk_StoreName/wms',
        params: {
            'FORMAT': 'image/png',
            LAYERS: 'all_Tml_blk_StoreName:tl_scco_sig',
            'TILED': true
        }
    });

    const tileLayerGeo = new TileLayer({
        source: tileWMS
    });

    const view = new View({
        center: fromLonLat([ 127.8, 36.5 ], 'EPSG:4326'), //대한민국 경도, 위도
        // center: [ 0, 0 ],
        zoom: 5,
        projection: 'EPSG:4326'
    });

    const map = new Map({
        view: view,
        layers: [
            new TileLayer({
                source: new OSM()
            }),
            tileLayerGeo
        ],
        target: 'map'
        
    })

    const ClicktoSwing = () => {
        console.log('ClicktoSwing clicked');
        console.log('beforeClicked', tileWMS.getParams());
        tileWMS.updateParams({'angle': 180});
        console.log('afterClicked', tileWMS.getParams());
         
    };
    const ClicktoSwingBack = () => {
        console.log('ClicktoSwingBack clicked');
        console.log('beforeClicked', tileWMS.getParams());
        tileWMS.updateParams({'angle': 0});
        console.log('afterClicked', tileWMS.getParams());

    };

    const buttons1 = [
        <Button key="swing" onClick={ClicktoSwing}>180도 회전</Button>,
        <Button key="swingback" onClick={ClicktoSwingBack}>지도 원래대로</Button>
    ];

    map.on('singleclick', function(evt) {
        const view = map.getView();
        const viewResolution = view.getResolution(); 
        const url = tileWMS.getFeatureInfoUrl( 
            evt.coordinate, 
            viewResolution, 
            view.getProjection(),
            { 
                'INFO_FORMAT': 'application/json',
                'FEATURE_COUNT': 50,
            }
        ); 
        if (url) { 
            fetch(url, { mode: 'no-cors' })
            .then(function(response) {
                console.log('fetch res', response);
            });
        } 
    });

    const [mapObject, setMapObject] = useState({})

    useEffect(() => {
        setMapObject({ map });
       
    }, [])
  
    return (
        <>
            <div id="map" value={mapObject} style={{ width: '100%', height: '85vh' }}>
            </div>
            <div style={{ paddingLeft:200}}>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <ButtonGroup variant="contained" size="large" color="primary" aria-label="large button group">
                        {buttons1}
                    </ButtonGroup>
                </Box>
            </div>
        </>
    );
};

export default KoreanMap;