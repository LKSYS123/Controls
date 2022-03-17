import { useEffect } from 'react';
import '../components/Controls/FloatingMenu.css'
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSMSource from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Polygon from 'ol/geom/Polygon';
import Point from 'ol/geom/Point';
import Overlay from 'ol/Overlay';
import {fromLonLat} from 'ol/proj';
import DragPan from 'ol/interaction/DragPan';

import FloatingMenuA from '../components/Controls/FloatingMenuA';
import FloatingMenuB from '../components/Controls/FloatingMenuB';
import FloatingMenuC from '../components/Controls/FloatingMenuC';

const FloatingMenu = () => {

    const polygon = new Feature({
        name: 'polygon',
        geometry: new Polygon([ [
            [ -1232776.3921833225, 4392988.889605651 ],
            [ 5342031.032794397, 4392988.889605651 ],
            [ 5342031.032794397, 1320831.8487678468 ],
            [ -1232776.3921833225, 1320831.8487678468 ],
            [ -1232776.3921833225, 4392988.889605651 ]
        ] ])
    })

    const square = new Feature({
        name: 'polygon',
        geometry: new Polygon([ [
            [-5e6, 6e6],
            [-3e6, 6e6],
            [-3e6, 8e6],
            [-5e6, 8e6],
            [-5e6, 6e6]
        ] ])
    })

    const polygon2 = new Feature({
        name: 'polygon',
        geometry: new Polygon([ [
            [-11330916.556581097, 5322450.680402423],
            [-13395804.91453172, 3406574.6914819833],
            [-9585340.863450546, 3427861.3709265906],
            [-11330916.556581097, 5322450.680402423]
        ] ])
    })

    const polygon3 = new Feature({
        name: 'polygon',
        geometry: new Polygon([ [
            [-5711014.279405352, 2853098.574250458],
            [-3135225.0340850614, 2810523.9680461474],
            [-2943637.435193017, 979798.4388494259],
            [-5370413.687825574, 958509.888432174],
            [-5711014.279405352, 2853098.574250458]
        ] ])
    })

    const polygon4 = new Feature({
        name: 'polygon',
        geometry: new Polygon([ [
            [9722432.018441591, 1802361.1161488397],
            [10935820.14475787, 1866223.649112855],
            [10850668.437719055, 610259.6692771688],
            [9679856.164922182, 546397.1363131534],
            [9722432.018441591, 1802361.1161488397]
        ] ])
    })
    const polygon5 = new Feature({
        name: 'polygon',
        geometry: new Polygon([ [
            [11489293.7673592, 5471462.4257750595],
            [10510069.093454376, 4321936.832422796],
            [12809120.280158903, 4407087.292146514],
            [11489293.7673592, 5471462.4257750595]
        ] ])
    })
    const polygon6 = new Feature({
        name: 'polygon',
        geometry: new Polygon([ [
            [11723457.219770651, 3811036.5687106783],
            [14661133.736115325, 3832324.4954703823],
            [12936845.34608693, 2363485.6136404965],
            [11723457.219770651, 3811036.5687106783]
        ] ])
    })
    const polygon7 = new Feature({
        name: 'polygon',
        geometry: new Polygon([ [
            [15321045.745200079, 5982362.689487177],
            [14150233.47240321, 4705112.030206883],
            [16704734.790963795, 4768974.563170899],
            [15321045.745200079, 5982362.689487177]
        ] ])
    })

    const polygon8 = new Feature({
        name: 'polygon',
        geometry: new Polygon([ [
            [-1363531.4501686394, -41111.320413058624],
            [1054604.6294516698, -94374.78732296452],
            [1150478.6553294174, -1447252.2567491457],
            [-1235699.7732651066, -1457905.164691206],
            [-1363531.4501686394, -41111.320413058624]
        ] ])
    })

    const polygon9 = new Feature({
        name: 'polygon',
        geometry: new Polygon([ [
            [-5933488.420460526, -381994.7193554174],
            [-3685794.040311397, -403299.4624391403],
            [-4942799.0930604255, -1862702.7928847354],
            [-5933488.420460526, -381994.7193554174]
        ] ])
    })

    const point1 = new Feature({
        name: 'point',
        geometry: new Point([8721916.92314687, 2193186.565165706])
    });

    const vectorSource = new VectorSource({});

    const vectorLayer = new VectorLayer({
        source: vectorSource
    });

    // onClick에 연결해줄 함수 : Map에 도형 표시
    const addVectorSrc = () => {
        vectorSource.addFeature(polygon);
    };
    const addVectorSrc2 = () => {
        vectorSource.addFeature(square);
    };
    const addVectorSrc3 = () => {
        vectorSource.addFeature(polygon3);
    };
    const addPolygon1 = () => {
        vectorSource.addFeature(polygon2);
    };
    const addPolygon2 = () => {
        vectorSource.addFeature(polygon4);
    };
    const addPolygon3 = () => {
        vectorSource.addFeature(polygon5);
    };
    const addPolygon4 = () => {
        vectorSource.addFeature(polygon6);
    };
    const addPolygon5 = () => {
        vectorSource.addFeature(polygon7);
    };
    const addPolygon6 = () => {
        vectorSource.addFeature(polygon9);
    };
    const addPolygon7 = () => {
        vectorSource.addFeature(polygon8);
    };
    const addPoint1 = () => {
        vectorSource.addFeature(point1);
    };

    const verBtnsClickEvts = {
        addPoint1,
        addPolygon1,
        addPolygon2
    }
    const verBtnsClickEvtsN = {
        addVectorSrc,
        addVectorSrc2,
        addVectorSrc3,
        addPolygon3,
        addPolygon4,
        addPolygon5,
        addPolygon6,
        addPolygon7
    }

    useEffect(() => {
        const map = new Map({
            view: new View({
                center: [ 0, 0 ],
                zoom: 2
            }),
            layers: [
                new TileLayer({
                    source: new OSMSource()
                }),
                vectorLayer
            ],
            target: 'map',
            projection: 'EPSG:4326'
        })

        //////////DragPan Start////////////////
        let dragPan;
        map.getInteractions().forEach(function(interaction){
            if (interaction instanceof DragPan) {
                    dragPan = interaction;  
            }
        });

        //FloatingMenuA
        const pos = fromLonLat([155.372, 45.208]);
        const marker_el = document.getElementById('marker');
        const marker = new Overlay({
        position: pos,
        positioning: 'center-center',
        element: marker_el,
        stopEvent: false,
        dragging: false
        });
        map.addOverlay(marker);
        marker_el.addEventListener('mousedown', function(evt) {
            dragPan.setActive(false);
            marker.set('dragging', true);
            console.info('start dragging');
        });
        map.on('pointermove', function(evt) {
            if (marker.get('dragging') === true) {
                marker.setPosition(evt.coordinate);
            }
        });
        map.on('pointerup', function(evt) {
            if (marker.get('dragging') === true) {
                console.info('stop dragging');
                dragPan.setActive(true);
                marker.set('dragging', false);
            }
        });

        //FloatingMenuB
        const posN = fromLonLat([-35.372, 52.208]);
        // const marker_elN = document.getElementById('markerN');
        // const markerN = new Overlay({
        // position: posN,
        // positioning: 'center-center',
        // element: marker_elN,
        // stopEvent: false,
        // dragging: false
        // });
        // map.addOverlay(markerN);

        // marker_elN.addEventListener('mousedown', function(evt) {
        //     dragPan.setActive(false);
        //     markerN.set('dragging', true);
        //     console.info('start dragging');
        // });
        // map.on('pointermove', function(evt) {
        //     if (markerN.get('dragging') === true) {
        //         markerN.setPosition(evt.coordinate);
        //     }
        // });
        // map.on('pointerup', function(evt) {
        //     if (markerN.get('dragging') === true) {
        //         console.info('stop dragging');
        //         dragPan.setActive(true);
        //         markerN.set('dragging', false);
        //     }
        // });

        //FloatingMenuC
        const posS = fromLonLat([185.372, -57.208]);
        const marker_elS = document.getElementById('markerS');
        const markerS = new Overlay({
        position: posS,
        positioning: 'center-center',
        element: marker_elS,
        stopEvent: false,
        dragging: false
        });
        map.addOverlay(markerS);

        marker_elS.addEventListener('mousedown', function(evt) {
            dragPan.setActive(false);
            markerS.set('dragging', true);
            console.info('start dragging');
        });
        map.on('pointermove', function(evt) {
            if (markerS.get('dragging') === true) {
                markerS.setPosition(evt.coordinate);
            }
        });
        map.on('pointerup', function(evt) {
            if (markerS.get('dragging') === true) {
                console.info('stop dragging');
                dragPan.setActive(true);
                markerS.set('dragging', false);
            }
        });
        //////////DragPan End////////////////

    }, [])
    
    return (
        <>
            <div id="map" className='map' style={{ width: '98vw', height: '89vh' }}>
            </div>
            <div className = 'HorizontalF'>
                <FloatingMenuB
                    id_move="markerN"
                    variant="text"
                    size="large"
                    color="inherit"
                    label="Horizontal Floating Menu"
                    onClick={verBtnsClickEvtsN}
                />
            </div>
            <div className = 'VerticalF'>
                <FloatingMenuA
                    id_move="marker"
                    variant="contained"
                    size="large"
                    color="primary"
                    label="Vertical Floating Menu"
                    onClick={verBtnsClickEvts}
                />
            </div>
            <div>
                <FloatingMenuC
                    id_move="markerS"
                    label="SpeedDial Floating Menu"
                />
            </div>
        </>
    );
};

export default FloatingMenu;