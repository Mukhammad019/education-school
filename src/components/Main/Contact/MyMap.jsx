import React from 'react';
import {
    YMaps,
    Map,
    SearchControl,
    TrafficControl,
    TypeSelector,
    RulerControl,
    RouteEditor,
    RouteButton,
    ListBox,
    ListBoxItem,
    GeolocationControl,
} from "@pbe/react-yandex-maps";

const MyMap = () => {
    return (
        <div>
            {/* Надо будет схранить ключ в env файле */}

            <YMaps query={{ apikey: "f773cd1b-dc02-4a39-80b5-89055de97e9f" }}>
                <Map
                    width="900px"
                    height="500px"
                    defaultState={{
                        center: [43.32, 45.69],
                        zoom: 9,
                        controls: ["zoomControl", "fullscreenControl"],
                    }}
                    modules={["control.ZoomControl", "control.FullscreenControl"]}
                >
                    {/* Показывать трафик на дорогах */}
                    <TrafficControl options={{ float: "right" }} />

                    {/* Сделать поиск */}
                    <SearchControl options={{ float: "left" }} />

                    {/* Выбор типа (Спутник, Панорама, Гибрид)*/}
                    <TypeSelector options={{ float: "right" }} />

                    {/* Линейка */}
                    <RulerControl options={{ float: "right" }} />

                    {/* Панель маршрутов */}
                    {/* <RoutePanel options={{ float: "right" }} /> */}

                    {/* Редактор маршрутов */}
                    <RouteEditor />

                    {/* Маршруткнопка */}
                    <RouteButton options={{ float: "right" }} />

                    {/* Список городов */}
                    <ListBox data={{ content: "Select city" }}>
                        <ListBoxItem data={{ content: "Moscow" }} />
                        <ListBoxItem data={{ content: "Saint Petersburg" }} />
                        <ListBoxItem data={{ content: "Grozny" }} />
                    </ListBox>

                    {/* Геолокация */}
                    <GeolocationControl
                        options={{ float: "left" }}
                        defaultState={{ center: [43.32, 45.69] }}
                    />
sa                </Map>
            </YMaps>
        </div>
    );
};

export default MyMap;