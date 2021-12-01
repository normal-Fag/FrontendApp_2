ymaps.ready(init);

function init(){
    var myMap = new ymaps.Map("map", {
        center: [53.721642, 91.442226],
        zoom: 16
    });

    // Создаем геообъект с типом геометрии "Точка".
    myGeoObject = new ymaps.GeoObject({
        // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [53.721642, 91.442226]
        },
        // Свойства.
        properties: {
            // Контент метки.
            iconCaption: 'Агенство туризма Республики Хакасия',
            hintContent: 'Республика Хакасия, г. Абакан, пр. Ленина, д. 67'
        }
    }, 
    {
        // Опции.
        // Иконка метки будет растягиваться под размер ее содержимого.
        preset: 'islands#dotIconWithCaption',
        // Метку можно перемещать.
        draggable: true
    })

     myMap.geoObjects
        .add(myGeoObject)
}